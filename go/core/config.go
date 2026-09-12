package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "NdbcBuoyData",
			"slug": "ndbc-buoy-data",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://surftruths.com/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"buoy": map[string]any{},
			},
		},
		"entity": map[string]any{
			"buoy": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "float",
						"name": "air_temperature",
						"short": "Air temperature in Celsius",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "float",
						"name": "atmospheric_pressure",
						"short": "Atmospheric pressure in hPa",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "float",
						"name": "average_wave_period",
						"short": "Average wave period in seconds",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "float",
						"name": "dominant_wave_period",
						"short": "Dominant wave period in seconds",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "float",
						"name": "latitude",
						"short": "Latitude coordinate of the buoy",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "float",
						"name": "longitude",
						"short": "Longitude coordinate of the buoy",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the buoy station",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "station_id",
						"short": "Unique identifier for the buoy station",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"short": "Timestamp of the reading",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "float",
						"name": "water_temperature",
						"short": "Water temperature in Celsius",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "float",
						"name": "wave_direction",
						"short": "Wave direction in degrees",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "float",
						"name": "wave_height",
						"short": "Significant wave height in meters",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "float",
						"name": "wind_direction",
						"short": "Wind direction in degrees",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "float",
						"name": "wind_speed",
						"short": "Wind speed in meters per second",
						"type": "`$NUMBER`",
					},
				},
				"name": "buoy",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/buoys.json",
								"segments": []any{
									map[string]any{
										"lit": "buoys.json",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"buoys.json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/buoys.csv",
								"segments": []any{
									map[string]any{
										"lit": "buoys.csv",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"buoys.csv",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/buoys.html",
								"segments": []any{
									map[string]any{
										"lit": "buoys.html",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"buoys.html",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/buoys.xml",
								"segments": []any{
									map[string]any{
										"lit": "buoys.xml",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"buoys.xml",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
