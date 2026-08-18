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
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
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
              "type" => "`$NUMBER`",
            },
            {
              "name" => "atmospheric_pressure",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "average_wave_period",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "dominant_wave_period",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "latitude",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "longitude",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "station_id",
              "type" => "`$STRING`",
            },
            {
              "name" => "timestamp",
              "type" => "`$STRING`",
            },
            {
              "name" => "water_temperature",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "wave_direction",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "wave_height",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "wind_direction",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "wind_speed",
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
                  "parts" => [
                    "buoys.json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
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
                  "parts" => [
                    "buoys.csv",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/buoys.html",
                  "parts" => [
                    "buoys.html",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/buoys.xml",
                  "parts" => [
                    "buoys.xml",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
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
