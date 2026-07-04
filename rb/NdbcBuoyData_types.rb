# frozen_string_literal: true

# Typed models for the NdbcBuoyData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Buoy entity data model.
#
# @!attribute [rw] air_temperature
#   @return [Float, nil]
#
# @!attribute [rw] atmospheric_pressure
#   @return [Float, nil]
#
# @!attribute [rw] average_wave_period
#   @return [Float, nil]
#
# @!attribute [rw] dominant_wave_period
#   @return [Float, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] station_id
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] water_temperature
#   @return [Float, nil]
#
# @!attribute [rw] wave_direction
#   @return [Float, nil]
#
# @!attribute [rw] wave_height
#   @return [Float, nil]
#
# @!attribute [rw] wind_direction
#   @return [Float, nil]
#
# @!attribute [rw] wind_speed
#   @return [Float, nil]
Buoy = Struct.new(
  :air_temperature,
  :atmospheric_pressure,
  :average_wave_period,
  :dominant_wave_period,
  :latitude,
  :longitude,
  :name,
  :station_id,
  :timestamp,
  :water_temperature,
  :wave_direction,
  :wave_height,
  :wind_direction,
  :wind_speed,
  keyword_init: true
)

# Match filter for Buoy#load (any subset of Buoy fields).
#
# @!attribute [rw] air_temperature
#   @return [Float, nil]
#
# @!attribute [rw] atmospheric_pressure
#   @return [Float, nil]
#
# @!attribute [rw] average_wave_period
#   @return [Float, nil]
#
# @!attribute [rw] dominant_wave_period
#   @return [Float, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] station_id
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] water_temperature
#   @return [Float, nil]
#
# @!attribute [rw] wave_direction
#   @return [Float, nil]
#
# @!attribute [rw] wave_height
#   @return [Float, nil]
#
# @!attribute [rw] wind_direction
#   @return [Float, nil]
#
# @!attribute [rw] wind_speed
#   @return [Float, nil]
BuoyLoadMatch = Struct.new(
  :air_temperature,
  :atmospheric_pressure,
  :average_wave_period,
  :dominant_wave_period,
  :latitude,
  :longitude,
  :name,
  :station_id,
  :timestamp,
  :water_temperature,
  :wave_direction,
  :wave_height,
  :wind_direction,
  :wind_speed,
  keyword_init: true
)

# Match filter for Buoy#list (any subset of Buoy fields).
#
# @!attribute [rw] air_temperature
#   @return [Float, nil]
#
# @!attribute [rw] atmospheric_pressure
#   @return [Float, nil]
#
# @!attribute [rw] average_wave_period
#   @return [Float, nil]
#
# @!attribute [rw] dominant_wave_period
#   @return [Float, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] station_id
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] water_temperature
#   @return [Float, nil]
#
# @!attribute [rw] wave_direction
#   @return [Float, nil]
#
# @!attribute [rw] wave_height
#   @return [Float, nil]
#
# @!attribute [rw] wind_direction
#   @return [Float, nil]
#
# @!attribute [rw] wind_speed
#   @return [Float, nil]
BuoyListMatch = Struct.new(
  :air_temperature,
  :atmospheric_pressure,
  :average_wave_period,
  :dominant_wave_period,
  :latitude,
  :longitude,
  :name,
  :station_id,
  :timestamp,
  :water_temperature,
  :wave_direction,
  :wave_height,
  :wind_direction,
  :wind_speed,
  keyword_init: true
)

