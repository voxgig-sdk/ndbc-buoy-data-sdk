package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/ndbc-buoy-data-sdk"
	"github.com/voxgig-sdk/ndbc-buoy-data-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestBuoyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Buoy(nil)
		if ent == nil {
			t.Fatal("expected non-nil BuoyEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := buoyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "buoy." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set NDBCBUOYDATA_TEST_BUOY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		buoyRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.buoy", setup.data)))
		var buoyRef01Data map[string]any
		if len(buoyRef01DataRaw) > 0 {
			buoyRef01Data = core.ToMapAny(buoyRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = buoyRef01Data

		// LIST
		buoyRef01Ent := client.Buoy(nil)
		buoyRef01Match := map[string]any{}

		buoyRef01ListResult, err := buoyRef01Ent.List(buoyRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, buoyRef01ListOk := buoyRef01ListResult.([]any)
		if !buoyRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", buoyRef01ListResult)
		}

		// LOAD
		buoyRef01MatchDt0 := map[string]any{}
		buoyRef01DataDt0Loaded, err := buoyRef01Ent.Load(buoyRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if buoyRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func buoyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "buoy", "BuoyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read buoy test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse buoy test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"buoy01", "buoy02", "buoy03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("NDBCBUOYDATA_TEST_BUOY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NDBCBUOYDATA_TEST_BUOY_ENTID": idmap,
		"NDBCBUOYDATA_TEST_LIVE":      "FALSE",
		"NDBCBUOYDATA_TEST_EXPLAIN":   "FALSE",
		"NDBCBUOYDATA_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["NDBCBUOYDATA_TEST_BUOY_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["NDBCBUOYDATA_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["NDBCBUOYDATA_APIKEY"],
			},
			extra,
		})
		client = sdk.NewNdbcBuoyDataSDK(core.ToMapAny(mergedOpts))
	}

	live := env["NDBCBUOYDATA_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["NDBCBUOYDATA_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
