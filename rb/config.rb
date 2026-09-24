# NdbcBuoyData SDK configuration

module NdbcBuoyDataConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "NdbcBuoyData",
        "slug" => "ndbc-buoy-data",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://surftruths.com/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "buoy" => {},
        },
      },
      "entity" => {
        "buoy" => {
          "fields" => [
            {
              "name" => "air_temperature",
              "title" => "Air Temperature",
              "type" => "`$NUMBER`",
              "short" => "Air temperature in Celsius",
              "format" => "float",
            },
            {
              "name" => "atmospheric_pressure",
              "title" => "Atmospheric Pressure",
              "type" => "`$NUMBER`",
              "short" => "Atmospheric pressure in hPa",
              "format" => "float",
            },
            {
              "name" => "average_wave_period",
              "title" => "Average Wave Period",
              "type" => "`$NUMBER`",
              "short" => "Average wave period in seconds",
              "format" => "float",
            },
            {
              "name" => "dominant_wave_period",
              "title" => "Dominant Wave Period",
              "type" => "`$NUMBER`",
              "short" => "Dominant wave period in seconds",
              "format" => "float",
            },
            {
              "name" => "latitude",
              "title" => "Latitude",
              "type" => "`$NUMBER`",
              "short" => "Latitude coordinate of the buoy",
              "format" => "float",
            },
            {
              "name" => "longitude",
              "title" => "Longitude",
              "type" => "`$NUMBER`",
              "short" => "Longitude coordinate of the buoy",
              "format" => "float",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "short" => "Name of the buoy station",
            },
            {
              "name" => "station_id",
              "title" => "Station Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the buoy station",
            },
            {
              "name" => "timestamp",
              "title" => "Timestamp",
              "type" => "`$STRING`",
              "short" => "Timestamp of the reading",
              "format" => "date-time",
            },
            {
              "name" => "water_temperature",
              "title" => "Water Temperature",
              "type" => "`$NUMBER`",
              "short" => "Water temperature in Celsius",
              "format" => "float",
            },
            {
              "name" => "wave_direction",
              "title" => "Wave Direction",
              "type" => "`$NUMBER`",
              "short" => "Wave direction in degrees",
              "format" => "float",
            },
            {
              "name" => "wave_height",
              "title" => "Wave Height",
              "type" => "`$NUMBER`",
              "short" => "Significant wave height in meters",
              "format" => "float",
            },
            {
              "name" => "wind_direction",
              "title" => "Wind Direction",
              "type" => "`$NUMBER`",
              "short" => "Wind direction in degrees",
              "format" => "float",
            },
            {
              "name" => "wind_speed",
              "title" => "Wind Speed",
              "type" => "`$NUMBER`",
              "short" => "Wind speed in meters per second",
              "format" => "float",
            },
          ],
          "name" => "buoy",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/buoys.json",
                  "segments" => [
                    {
                      "lit" => "buoys.json",
                    },
                  ],
                  "parts" => [
                    "buoys.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/buoys.csv",
                  "segments" => [
                    {
                      "lit" => "buoys.csv",
                    },
                  ],
                  "parts" => [
                    "buoys.csv",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/buoys.html",
                  "segments" => [
                    {
                      "lit" => "buoys.html",
                    },
                  ],
                  "parts" => [
                    "buoys.html",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/buoys.xml",
                  "segments" => [
                    {
                      "lit" => "buoys.xml",
                    },
                  ],
                  "parts" => [
                    "buoys.xml",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    NdbcBuoyDataFeatures.make_feature(name)
  end
end
