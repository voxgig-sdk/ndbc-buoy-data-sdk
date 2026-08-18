-- NdbcBuoyData SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "NdbcBuoyData",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://surftruths.com/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["buoy"] = {},
      },
    },
    entity = {
      ["buoy"] = {
        ["fields"] = {
          {
            ["name"] = "air_temperature",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "atmospheric_pressure",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "average_wave_period",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "dominant_wave_period",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "latitude",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "longitude",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "station_id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "timestamp",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "water_temperature",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "wave_direction",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "wave_height",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "wind_direction",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "wind_speed",
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "buoy",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/buoys.json",
                ["parts"] = {
                  "buoys.json",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/buoys.csv",
                ["parts"] = {
                  "buoys.csv",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/buoys.html",
                ["parts"] = {
                  "buoys.html",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/buoys.xml",
                ["parts"] = {
                  "buoys.xml",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
