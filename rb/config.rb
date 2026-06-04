# NdbcBuoyData SDK configuration

module NdbcBuoyDataConfig
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
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "atmospheric_pressure",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "average_wave_period",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "dominant_wave_period",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 3,
            },
            {
              "name" => "latitude",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 4,
            },
            {
              "name" => "longitude",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 5,
            },
            {
              "name" => "name",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 6,
            },
            {
              "name" => "station_id",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 7,
            },
            {
              "name" => "timestamp",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 8,
            },
            {
              "name" => "water_temperature",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 9,
            },
            {
              "name" => "wave_direction",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 10,
            },
            {
              "name" => "wave_height",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 11,
            },
            {
              "name" => "wind_direction",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 12,
            },
            {
              "name" => "wind_speed",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 13,
            },
          ],
          "name" => "buoy",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "method" => "GET",
                  "orig" => "/buoys.json",
                  "parts" => [
                    "buoys.json",
                  ],
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "select" => {},
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
            },
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "method" => "GET",
                  "orig" => "/buoys.csv",
                  "parts" => [
                    "buoys.csv",
                  ],
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "select" => {},
                  "index$" => 0,
                },
                {
                  "method" => "GET",
                  "orig" => "/buoys.html",
                  "parts" => [
                    "buoys.html",
                  ],
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "select" => {},
                  "index$" => 1,
                },
                {
                  "method" => "GET",
                  "orig" => "/buoys.xml",
                  "parts" => [
                    "buoys.xml",
                  ],
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "select" => {},
                  "index$" => 2,
                },
              ],
              "input" => "data",
              "key$" => "load",
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
