# NdbcBuoyData Python SDK Reference

Complete API reference for the NdbcBuoyData Python SDK.


## NdbcBuoyDataSDK

### Constructor

```python
from ndbc-buoy-data_sdk import NdbcBuoyDataSDK

client = NdbcBuoyDataSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NdbcBuoyDataSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = NdbcBuoyDataSDK.test()
```


### Instance Methods

#### `Buoy(data=None)`

Create a new `BuoyEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## BuoyEntity

```python
buoy = client.Buoy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `air_temperature` | ``$NUMBER`` | No |  |
| `atmospheric_pressure` | ``$NUMBER`` | No |  |
| `average_wave_period` | ``$NUMBER`` | No |  |
| `dominant_wave_period` | ``$NUMBER`` | No |  |
| `latitude` | ``$NUMBER`` | No |  |
| `longitude` | ``$NUMBER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `water_temperature` | ``$NUMBER`` | No |  |
| `wave_direction` | ``$NUMBER`` | No |  |
| `wave_height` | ``$NUMBER`` | No |  |
| `wind_direction` | ``$NUMBER`` | No |  |
| `wind_speed` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Buoy().list({})
```

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Buoy().load({"id": "buoy_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BuoyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = NdbcBuoyDataSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

