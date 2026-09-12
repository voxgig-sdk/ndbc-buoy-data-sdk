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
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "format" => "float",
              "name" => "air_temperature",
              "short" => "Air temperature in Celsius",
              "type" => "`$NUMBER`",
            },
            {
              "format" => "float",
              "name" => "atmospheric_pressure",
              "short" => "Atmospheric pressure in hPa",
              "type" => "`$NUMBER`",
            },
            {
              "format" => "float",
              "name" => "average_wave_period",
              "short" => "Average wave period in seconds",
              "type" => "`$NUMBER`",
            },
            {
              "format" => "float",
              "name" => "dominant_wave_period",
              "short" => "Dominant wave period in seconds",
              "type" => "`$NUMBER`",
            },
            {
              "format" => "float",
              "name" => "latitude",
              "short" => "Latitude coordinate of the buoy",
              "type" => "`$NUMBER`",
            },
            {
              "format" => "float",
              "name" => "longitude",
              "short" => "Longitude coordinate of the buoy",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "name",
              "short" => "Name of the buoy station",
              "type" => "`$STRING`",
            },
            {
              "name" => "station_id",
              "short" => "Unique identifier for the buoy station",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "timestamp",
              "short" => "Timestamp of the reading",
              "type" => "`$STRING`",
            },
            {
              "format" => "float",
              "name" => "water_temperature",
              "short" => "Water temperature in Celsius",
              "type" => "`$NUMBER`",
            },
            {
              "format" => "float",
              "name" => "wave_direction",
              "short" => "Wave direction in degrees",
              "type" => "`$NUMBER`",
            },
            {
              "format" => "float",
              "name" => "wave_height",
              "short" => "Significant wave height in meters",
              "type" => "`$NUMBER`",
            },
            {
              "format" => "float",
              "name" => "wind_direction",
              "short" => "Wind direction in degrees",
              "type" => "`$NUMBER`",
            },
            {
              "format" => "float",
              "name" => "wind_speed",
              "short" => "Wind speed in meters per second",
              "type" => "`$NUMBER`",
            },
          ],
          "name" => "buoy",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/buoys.json",
                  "segments" => [
                    {
                      "lit" => "buoys.json",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "buoys.json",
                  ],
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/buoys.csv",
                  "segments" => [
                    {
                      "lit" => "buoys.csv",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "buoys.csv",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/buoys.html",
                  "segments" => [
                    {
                      "lit" => "buoys.html",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "buoys.html",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/buoys.xml",
                  "segments" => [
                    {
                      "lit" => "buoys.xml",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "buoys.xml",
                  ],
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
