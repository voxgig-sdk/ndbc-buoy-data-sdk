
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
     test:     {
      "options": {
        "active": false
      }
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
          "name": "air_temperature",
          "short": "Air temperature in Celsius",
          "type": "`$NUMBER`"
        },
        {
          "name": "atmospheric_pressure",
          "short": "Atmospheric pressure in hPa",
          "type": "`$NUMBER`"
        },
        {
          "name": "average_wave_period",
          "short": "Average wave period in seconds",
          "type": "`$NUMBER`"
        },
        {
          "name": "dominant_wave_period",
          "short": "Dominant wave period in seconds",
          "type": "`$NUMBER`"
        },
        {
          "name": "latitude",
          "short": "Latitude coordinate of the buoy",
          "type": "`$NUMBER`"
        },
        {
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
          "name": "timestamp",
          "short": "Timestamp of the reading",
          "type": "`$STRING`"
        },
        {
          "name": "water_temperature",
          "short": "Water temperature in Celsius",
          "type": "`$NUMBER`"
        },
        {
          "name": "wave_direction",
          "short": "Wave direction in degrees",
          "type": "`$NUMBER`"
        },
        {
          "name": "wave_height",
          "short": "Significant wave height in meters",
          "type": "`$NUMBER`"
        },
        {
          "name": "wind_direction",
          "short": "Wind direction in degrees",
          "type": "`$NUMBER`"
        },
        {
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
              "parts": [
                "buoys.json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "buoys.csv"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/buoys.html",
              "parts": [
                "buoys.html"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/buoys.xml",
              "parts": [
                "buoys.xml"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
  config
}

