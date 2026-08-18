
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


  main = {
    name: 'NdbcBuoyData',
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
          "type": "`$NUMBER`"
        },
        {
          "name": "atmospheric_pressure",
          "type": "`$NUMBER`"
        },
        {
          "name": "average_wave_period",
          "type": "`$NUMBER`"
        },
        {
          "name": "dominant_wave_period",
          "type": "`$NUMBER`"
        },
        {
          "name": "latitude",
          "type": "`$NUMBER`"
        },
        {
          "name": "longitude",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "station_id",
          "type": "`$STRING`"
        },
        {
          "name": "timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "water_temperature",
          "type": "`$NUMBER`"
        },
        {
          "name": "wave_direction",
          "type": "`$NUMBER`"
        },
        {
          "name": "wave_height",
          "type": "`$NUMBER`"
        },
        {
          "name": "wind_direction",
          "type": "`$NUMBER`"
        },
        {
          "name": "wind_speed",
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

