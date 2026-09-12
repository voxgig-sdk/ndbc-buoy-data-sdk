"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'NdbcBuoyData',
        slug: "ndbc-buoy-data",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://surftruths.com/api",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            buoy: {},
        }
    };
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
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map