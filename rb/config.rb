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
        "auth" => {
          "prefix" => "Bearer",
        },
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
              "active" => true,
              "name" => "air_temperature",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "atmospheric_pressure",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "average_wave_period",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "dominant_wave_period",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "latitude",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "longitude",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "name",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "station_id",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "timestamp",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "water_temperature",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 9,
            },
            {
              "active" => true,
              "name" => "wave_direction",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 10,
            },
            {
              "active" => true,
              "name" => "wave_height",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 11,
            },
            {
              "active" => true,
              "name" => "wind_direction",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 12,
            },
            {
              "active" => true,
              "name" => "wind_speed",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 13,
            },
          ],
          "name" => "buoy",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
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
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
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
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {},
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
                  "index$" => 1,
                },
                {
                  "active" => true,
                  "args" => {},
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
                  "index$" => 2,
                },
              ],
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
