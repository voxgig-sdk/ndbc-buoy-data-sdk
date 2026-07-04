-- Typed models for the NdbcBuoyData SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Buoy
---@field air_temperature? number
---@field atmospheric_pressure? number
---@field average_wave_period? number
---@field dominant_wave_period? number
---@field latitude? number
---@field longitude? number
---@field name? string
---@field station_id? string
---@field timestamp? string
---@field water_temperature? number
---@field wave_direction? number
---@field wave_height? number
---@field wind_direction? number
---@field wind_speed? number

---@class BuoyLoadMatch

---@class BuoyListMatch

local M = {}

return M
