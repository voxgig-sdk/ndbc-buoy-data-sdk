# Typed models for the NdbcBuoyData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Buoy(TypedDict, total=False):
    air_temperature: float
    atmospheric_pressure: float
    average_wave_period: float
    dominant_wave_period: float
    latitude: float
    longitude: float
    name: str
    station_id: str
    timestamp: str
    water_temperature: float
    wave_direction: float
    wave_height: float
    wind_direction: float
    wind_speed: float


class BuoyLoadMatch(TypedDict, total=False):
    air_temperature: float
    atmospheric_pressure: float
    average_wave_period: float
    dominant_wave_period: float
    latitude: float
    longitude: float
    name: str
    station_id: str
    timestamp: str
    water_temperature: float
    wave_direction: float
    wave_height: float
    wind_direction: float
    wind_speed: float


class BuoyListMatch(TypedDict, total=False):
    air_temperature: float
    atmospheric_pressure: float
    average_wave_period: float
    dominant_wave_period: float
    latitude: float
    longitude: float
    name: str
    station_id: str
    timestamp: str
    water_temperature: float
    wave_direction: float
    wave_height: float
    wind_direction: float
    wind_speed: float
