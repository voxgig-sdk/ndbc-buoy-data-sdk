# NdbcBuoyData SDK

Real-time NOAA buoy readings and tide-station data, served as JSON, XML, CSV, or HTML

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About NDBC Buoy Data API

The NDBC Buoy Data API is a community wrapper operated by [SurfTruths](https://surftruths.com/api) that re-serves real-time marine observations from the US National Oceanic and Atmospheric Administration's [National Data Buoy Center](https://www.ndbc.noaa.gov/). It is aimed at surf, sailing, and ocean-monitoring applications that want NOAA data in a friendlier format.

What you get from the API:

- Real-time buoy readings from NDBC stations (`/api/buoys.json`, also available as `.xml`, `.csv`, `.html`).
- NOAA tide-station predictions (`/api/tide/stations.json` and equivalent formats).
- Sibling GFS forecast-location endpoints are listed alongside on the same host.

The service is open and requires no authentication. CORS is reported as disabled, so browser clients may need to proxy requests. The provider notes the API is still under development and endpoints may change.

## Try it

**TypeScript**
```bash
npm install ndbc-buoy-data
```

**Python**
```bash
pip install ndbc-buoy-data-sdk
```

**PHP**
```bash
composer require voxgig/ndbc-buoy-data-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/ndbc-buoy-data-sdk/go
```

**Ruby**
```bash
gem install ndbc-buoy-data-sdk
```

**Lua**
```bash
luarocks install ndbc-buoy-data-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { NdbcBuoyDataSDK } from 'ndbc-buoy-data'

const client = new NdbcBuoyDataSDK({})

// List all buoys
const buoys = await client.Buoy().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o ndbc-buoy-data-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "ndbc-buoy-data": {
      "command": "/abs/path/to/ndbc-buoy-data-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Buoy** | A National Data Buoy Center observation station; listings and readings are exposed at `/api/buoys.json` (with `.xml`, `.csv`, and `.html` variants). | `/buoys.json` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from ndbcbuoydata_sdk import NdbcBuoyDataSDK

client = NdbcBuoyDataSDK({})

# List all buoys
buoys, err = client.Buoy(None).list(None, None)

# Load a specific buoy
buoy, err = client.Buoy(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'ndbcbuoydata_sdk.php';

$client = new NdbcBuoyDataSDK([]);

// List all buoys
[$buoys, $err] = $client->Buoy(null)->list(null, null);

// Load a specific buoy
[$buoy, $err] = $client->Buoy(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/ndbc-buoy-data-sdk/go"

client := sdk.NewNdbcBuoyDataSDK(map[string]any{})

// List all buoys
buoys, err := client.Buoy(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "NdbcBuoyData_sdk"

client = NdbcBuoyDataSDK.new({})

# List all buoys
buoys, err = client.Buoy(nil).list(nil, nil)

# Load a specific buoy
buoy, err = client.Buoy(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("ndbc-buoy-data_sdk")

local client = sdk.new({})

-- List all buoys
local buoys, err = client:Buoy(nil):list(nil, nil)

-- Load a specific buoy
local buoy, err = client:Buoy(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = NdbcBuoyDataSDK.test()
const result = await client.Buoy().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = NdbcBuoyDataSDK.test(None, None)
result, err = client.Buoy(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = NdbcBuoyDataSDK::test(null, null);
[$result, $err] = $client->Buoy(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Buoy(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = NdbcBuoyDataSDK.test(nil, nil)
result, err = client.Buoy(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Buoy(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the NDBC Buoy Data API

- Upstream: [https://surftruths.com/api](https://surftruths.com/api)

- The SurfTruths wrapper API does not publish an explicit licence.
- Underlying observations come from the NOAA National Data Buoy Center (NDBC) and NOAA Tides & Currents, whose data are in the US public domain.
- Attribution to NOAA / NDBC is customary when redistributing the readings.
- The API documentation notes the service is still under development and may change.

---

Generated from the NDBC Buoy Data API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
