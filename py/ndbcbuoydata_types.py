# Typed models for the NdbcBuoyData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Buoy:
    air_temperature: Optional[float] = None
    atmospheric_pressure: Optional[float] = None
    average_wave_period: Optional[float] = None
    dominant_wave_period: Optional[float] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    name: Optional[str] = None
    station_id: Optional[str] = None
    timestamp: Optional[str] = None
    water_temperature: Optional[float] = None
    wave_direction: Optional[float] = None
    wave_height: Optional[float] = None
    wind_direction: Optional[float] = None
    wind_speed: Optional[float] = None


@dataclass
class BuoyLoadMatch:
    air_temperature: Optional[float] = None
    atmospheric_pressure: Optional[float] = None
    average_wave_period: Optional[float] = None
    dominant_wave_period: Optional[float] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    name: Optional[str] = None
    station_id: Optional[str] = None
    timestamp: Optional[str] = None
    water_temperature: Optional[float] = None
    wave_direction: Optional[float] = None
    wave_height: Optional[float] = None
    wind_direction: Optional[float] = None
    wind_speed: Optional[float] = None


@dataclass
class BuoyListMatch:
    air_temperature: Optional[float] = None
    atmospheric_pressure: Optional[float] = None
    average_wave_period: Optional[float] = None
    dominant_wave_period: Optional[float] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    name: Optional[str] = None
    station_id: Optional[str] = None
    timestamp: Optional[str] = None
    water_temperature: Optional[float] = None
    wave_direction: Optional[float] = None
    wave_height: Optional[float] = None
    wind_direction: Optional[float] = None
    wind_speed: Optional[float] = None

