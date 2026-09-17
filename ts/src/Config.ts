
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'NdbcBuoyData',
        slug: "ndbc-buoy-data",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://surftruths.com/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        buoy: {
        },
  
    }
  }


  entity = {
    "buoy": {
      "fields": [
        {
          "format": "float",
          "name": "air_temperature",
          "short": "Air temperature in Celsius",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "atmospheric_pressure",
          "short": "Atmospheric pressure in hPa",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "average_wave_period",
          "short": "Average wave period in seconds",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "dominant_wave_period",
          "short": "Dominant wave period in seconds",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "latitude",
          "short": "Latitude coordinate of the buoy",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "longitude",
          "short": "Longitude coordinate of the buoy",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "short": "Name of the buoy station",
          "type": "`$STRING`"
        },
        {
          "name": "station_id",
          "short": "Unique identifier for the buoy station",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "timestamp",
          "short": "Timestamp of the reading",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "water_temperature",
          "short": "Water temperature in Celsius",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "wave_direction",
          "short": "Wave direction in degrees",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "wave_height",
          "short": "Significant wave height in meters",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "wind_direction",
          "short": "Wind direction in degrees",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "wind_speed",
          "short": "Wind speed in meters per second",
          "type": "`$NUMBER`"
        }
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
              "segments": [
                {
                  "lit": "buoys.json"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "buoys.json"
              ]
            }
          ]
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
              "segments": [
                {
                  "lit": "buoys.csv"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "buoys.csv"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/buoys.html",
              "segments": [
                {
                  "lit": "buoys.html"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "buoys.html"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/buoys.xml",
              "segments": [
                {
                  "lit": "buoys.xml"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "buoys.xml"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

