<?php
declare(strict_types=1);

// Typed models for the NdbcBuoyData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Buoy entity data model. */
class Buoy
{
    public ?float $air_temperature = null;
    public ?float $atmospheric_pressure = null;
    public ?float $average_wave_period = null;
    public ?float $dominant_wave_period = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?string $name = null;
    public ?string $station_id = null;
    public ?string $timestamp = null;
    public ?float $water_temperature = null;
    public ?float $wave_direction = null;
    public ?float $wave_height = null;
    public ?float $wind_direction = null;
    public ?float $wind_speed = null;
}

/** Request payload for Buoy#load. */
class BuoyLoadMatch
{
    public ?float $air_temperature = null;
    public ?float $atmospheric_pressure = null;
    public ?float $average_wave_period = null;
    public ?float $dominant_wave_period = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?string $name = null;
    public ?string $station_id = null;
    public ?string $timestamp = null;
    public ?float $water_temperature = null;
    public ?float $wave_direction = null;
    public ?float $wave_height = null;
    public ?float $wind_direction = null;
    public ?float $wind_speed = null;
}

/** Request payload for Buoy#list. */
class BuoyListMatch
{
    public ?float $air_temperature = null;
    public ?float $atmospheric_pressure = null;
    public ?float $average_wave_period = null;
    public ?float $dominant_wave_period = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?string $name = null;
    public ?string $station_id = null;
    public ?string $timestamp = null;
    public ?float $water_temperature = null;
    public ?float $wave_direction = null;
    public ?float $wave_height = null;
    public ?float $wind_direction = null;
    public ?float $wind_speed = null;
}

