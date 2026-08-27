# NdbcBuoyData SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "NdbcBuoyData",
            "slug": "ndbc-buoy-data",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://surftruths.com/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "buoy": {},
            },
        },
        "entity": {
      "buoy": {
        "fields": [
          {
            "name": "air_temperature",
            "short": "Air temperature in Celsius",
            "type": "`$NUMBER`",
          },
          {
            "name": "atmospheric_pressure",
            "short": "Atmospheric pressure in hPa",
            "type": "`$NUMBER`",
          },
          {
            "name": "average_wave_period",
            "short": "Average wave period in seconds",
            "type": "`$NUMBER`",
          },
          {
            "name": "dominant_wave_period",
            "short": "Dominant wave period in seconds",
            "type": "`$NUMBER`",
          },
          {
            "name": "latitude",
            "short": "Latitude coordinate of the buoy",
            "type": "`$NUMBER`",
          },
          {
            "name": "longitude",
            "short": "Longitude coordinate of the buoy",
            "type": "`$NUMBER`",
          },
          {
            "name": "name",
            "short": "Name of the buoy station",
            "type": "`$STRING`",
          },
          {
            "name": "station_id",
            "short": "Unique identifier for the buoy station",
            "type": "`$STRING`",
          },
          {
            "name": "timestamp",
            "short": "Timestamp of the reading",
            "type": "`$STRING`",
          },
          {
            "name": "water_temperature",
            "short": "Water temperature in Celsius",
            "type": "`$NUMBER`",
          },
          {
            "name": "wave_direction",
            "short": "Wave direction in degrees",
            "type": "`$NUMBER`",
          },
          {
            "name": "wave_height",
            "short": "Significant wave height in meters",
            "type": "`$NUMBER`",
          },
          {
            "name": "wind_direction",
            "short": "Wind direction in degrees",
            "type": "`$NUMBER`",
          },
          {
            "name": "wind_speed",
            "short": "Wind speed in meters per second",
            "type": "`$NUMBER`",
          },
        ],
        "name": "buoy",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/buoys.json",
                "parts": [
                  "buoys.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/buoys.csv",
                "parts": [
                  "buoys.csv",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/buoys.html",
                "parts": [
                  "buoys.html",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/buoys.xml",
                "parts": [
                  "buoys.xml",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
