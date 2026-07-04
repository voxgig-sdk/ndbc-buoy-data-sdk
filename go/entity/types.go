// Typed models for the NdbcBuoyData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Buoy is the typed data model for the buoy entity.
type Buoy struct {
	AirTemperature *float64 `json:"air_temperature,omitempty"`
	AtmosphericPressure *float64 `json:"atmospheric_pressure,omitempty"`
	AverageWavePeriod *float64 `json:"average_wave_period,omitempty"`
	DominantWavePeriod *float64 `json:"dominant_wave_period,omitempty"`
	Latitude *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
	Name *string `json:"name,omitempty"`
	StationId *string `json:"station_id,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	WaterTemperature *float64 `json:"water_temperature,omitempty"`
	WaveDirection *float64 `json:"wave_direction,omitempty"`
	WaveHeight *float64 `json:"wave_height,omitempty"`
	WindDirection *float64 `json:"wind_direction,omitempty"`
	WindSpeed *float64 `json:"wind_speed,omitempty"`
}

// BuoyLoadMatch mirrors the buoy fields as an all-optional match
// filter (Go analog of Partial<Buoy>).
type BuoyLoadMatch struct {
	AirTemperature *float64 `json:"air_temperature,omitempty"`
	AtmosphericPressure *float64 `json:"atmospheric_pressure,omitempty"`
	AverageWavePeriod *float64 `json:"average_wave_period,omitempty"`
	DominantWavePeriod *float64 `json:"dominant_wave_period,omitempty"`
	Latitude *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
	Name *string `json:"name,omitempty"`
	StationId *string `json:"station_id,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	WaterTemperature *float64 `json:"water_temperature,omitempty"`
	WaveDirection *float64 `json:"wave_direction,omitempty"`
	WaveHeight *float64 `json:"wave_height,omitempty"`
	WindDirection *float64 `json:"wind_direction,omitempty"`
	WindSpeed *float64 `json:"wind_speed,omitempty"`
}

// BuoyListMatch mirrors the buoy fields as an all-optional match
// filter (Go analog of Partial<Buoy>).
type BuoyListMatch struct {
	AirTemperature *float64 `json:"air_temperature,omitempty"`
	AtmosphericPressure *float64 `json:"atmospheric_pressure,omitempty"`
	AverageWavePeriod *float64 `json:"average_wave_period,omitempty"`
	DominantWavePeriod *float64 `json:"dominant_wave_period,omitempty"`
	Latitude *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
	Name *string `json:"name,omitempty"`
	StationId *string `json:"station_id,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	WaterTemperature *float64 `json:"water_temperature,omitempty"`
	WaveDirection *float64 `json:"wave_direction,omitempty"`
	WaveHeight *float64 `json:"wave_height,omitempty"`
	WindDirection *float64 `json:"wind_direction,omitempty"`
	WindSpeed *float64 `json:"wind_speed,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
