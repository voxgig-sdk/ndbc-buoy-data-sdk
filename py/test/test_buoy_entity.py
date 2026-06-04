# Buoy entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from ndbcbuoydata_sdk import NdbcBuoyDataSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestBuoyEntity:

    def test_should_create_instance(self):
        testsdk = NdbcBuoyDataSDK.test(None, None)
        ent = testsdk.Buoy(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _buoy_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "buoy." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set NDBCBUOYDATA_TEST_BUOY_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        buoy_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.buoy")))
        buoy_ref01_data = None
        if len(buoy_ref01_data_raw) > 0:
            buoy_ref01_data = helpers.to_map(buoy_ref01_data_raw[0][1])

        # LIST
        buoy_ref01_ent = client.Buoy(None)
        buoy_ref01_match = {}

        buoy_ref01_list_result, err = buoy_ref01_ent.list(buoy_ref01_match, None)
        assert err is None
        assert isinstance(buoy_ref01_list_result, list)

        # LOAD
        buoy_ref01_match_dt0 = {}
        buoy_ref01_data_dt0_loaded, err = buoy_ref01_ent.load(buoy_ref01_match_dt0, None)
        assert err is None
        assert buoy_ref01_data_dt0_loaded is not None



def _buoy_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/buoy/BuoyTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = NdbcBuoyDataSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["buoy01", "buoy02", "buoy03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "NDBCBUOYDATA_TEST_BUOY_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "NDBCBUOYDATA_TEST_BUOY_ENTID": idmap,
        "NDBCBUOYDATA_TEST_LIVE": "FALSE",
        "NDBCBUOYDATA_TEST_EXPLAIN": "FALSE",
    })

    idmap_resolved = helpers.to_map(
        env.get("NDBCBUOYDATA_TEST_BUOY_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("NDBCBUOYDATA_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
            },
            extra or {},
        ])
        client = NdbcBuoyDataSDK(helpers.to_map(merged_opts))

    _live = env.get("NDBCBUOYDATA_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("NDBCBUOYDATA_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
