// Typed models for the NdbcBuoyData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Buoy {
  air_temperature?: number
  atmospheric_pressure?: number
  average_wave_period?: number
  dominant_wave_period?: number
  latitude?: number
  longitude?: number
  name?: string
  station_id?: string
  timestamp?: string
  water_temperature?: number
  wave_direction?: number
  wave_height?: number
  wind_direction?: number
  wind_speed?: number
}

export interface BuoyLoadMatch {
  air_temperature?: number
  atmospheric_pressure?: number
  average_wave_period?: number
  dominant_wave_period?: number
  latitude?: number
  longitude?: number
  name?: string
  station_id?: string
  timestamp?: string
  water_temperature?: number
  wave_direction?: number
  wave_height?: number
  wind_direction?: number
  wind_speed?: number
}

export interface BuoyListMatch {
  air_temperature?: number
  atmospheric_pressure?: number
  average_wave_period?: number
  dominant_wave_period?: number
  latitude?: number
  longitude?: number
  name?: string
  station_id?: string
  timestamp?: string
  water_temperature?: number
  wave_direction?: number
  wave_height?: number
  wind_direction?: number
  wind_speed?: number
}

