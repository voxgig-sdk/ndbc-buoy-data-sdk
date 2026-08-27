<?php
declare(strict_types=1);

// NdbcBuoyData SDK configuration

class NdbcBuoyDataConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "NdbcBuoyData",
                "slug" => "ndbc-buoy-data",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://surftruths.com/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "buoy" => [],
                ],
            ],
            "entity" => [
        'buoy' => [
          'fields' => [
            [
              'name' => 'air_temperature',
              'short' => 'Air temperature in Celsius',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'atmospheric_pressure',
              'short' => 'Atmospheric pressure in hPa',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'average_wave_period',
              'short' => 'Average wave period in seconds',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'dominant_wave_period',
              'short' => 'Dominant wave period in seconds',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'latitude',
              'short' => 'Latitude coordinate of the buoy',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'longitude',
              'short' => 'Longitude coordinate of the buoy',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the buoy station',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'station_id',
              'short' => 'Unique identifier for the buoy station',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'timestamp',
              'short' => 'Timestamp of the reading',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'water_temperature',
              'short' => 'Water temperature in Celsius',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'wave_direction',
              'short' => 'Wave direction in degrees',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'wave_height',
              'short' => 'Significant wave height in meters',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'wind_direction',
              'short' => 'Wind direction in degrees',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'wind_speed',
              'short' => 'Wind speed in meters per second',
              'type' => '`$NUMBER`',
            ],
          ],
          'name' => 'buoy',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/buoys.json',
                  'parts' => [
                    'buoys.json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/buoys.csv',
                  'parts' => [
                    'buoys.csv',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/buoys.html',
                  'parts' => [
                    'buoys.html',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/buoys.xml',
                  'parts' => [
                    'buoys.xml',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return NdbcBuoyDataFeatures::make_feature($name);
    }
}
