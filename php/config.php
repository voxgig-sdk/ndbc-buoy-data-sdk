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
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
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
              'title' => 'Air Temperature',
              'type' => '`$NUMBER`',
              'short' => 'Air temperature in Celsius',
              'format' => 'float',
            ],
            [
              'name' => 'atmospheric_pressure',
              'title' => 'Atmospheric Pressure',
              'type' => '`$NUMBER`',
              'short' => 'Atmospheric pressure in hPa',
              'format' => 'float',
            ],
            [
              'name' => 'average_wave_period',
              'title' => 'Average Wave Period',
              'type' => '`$NUMBER`',
              'short' => 'Average wave period in seconds',
              'format' => 'float',
            ],
            [
              'name' => 'dominant_wave_period',
              'title' => 'Dominant Wave Period',
              'type' => '`$NUMBER`',
              'short' => 'Dominant wave period in seconds',
              'format' => 'float',
            ],
            [
              'name' => 'latitude',
              'title' => 'Latitude',
              'type' => '`$NUMBER`',
              'short' => 'Latitude coordinate of the buoy',
              'format' => 'float',
            ],
            [
              'name' => 'longitude',
              'title' => 'Longitude',
              'type' => '`$NUMBER`',
              'short' => 'Longitude coordinate of the buoy',
              'format' => 'float',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'Name of the buoy station',
            ],
            [
              'name' => 'station_id',
              'title' => 'Station Id',
              'type' => '`$STRING`',
              'short' => 'Unique identifier for the buoy station',
            ],
            [
              'name' => 'timestamp',
              'title' => 'Timestamp',
              'type' => '`$STRING`',
              'short' => 'Timestamp of the reading',
              'format' => 'date-time',
            ],
            [
              'name' => 'water_temperature',
              'title' => 'Water Temperature',
              'type' => '`$NUMBER`',
              'short' => 'Water temperature in Celsius',
              'format' => 'float',
            ],
            [
              'name' => 'wave_direction',
              'title' => 'Wave Direction',
              'type' => '`$NUMBER`',
              'short' => 'Wave direction in degrees',
              'format' => 'float',
            ],
            [
              'name' => 'wave_height',
              'title' => 'Wave Height',
              'type' => '`$NUMBER`',
              'short' => 'Significant wave height in meters',
              'format' => 'float',
            ],
            [
              'name' => 'wind_direction',
              'title' => 'Wind Direction',
              'type' => '`$NUMBER`',
              'short' => 'Wind direction in degrees',
              'format' => 'float',
            ],
            [
              'name' => 'wind_speed',
              'title' => 'Wind Speed',
              'type' => '`$NUMBER`',
              'short' => 'Wind speed in meters per second',
              'format' => 'float',
            ],
          ],
          'name' => 'buoy',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/buoys.json',
                  'segments' => [
                    [
                      'lit' => 'buoys.json',
                    ],
                  ],
                  'parts' => [
                    'buoys.json',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/buoys.csv',
                  'segments' => [
                    [
                      'lit' => 'buoys.csv',
                    ],
                  ],
                  'parts' => [
                    'buoys.csv',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/buoys.html',
                  'segments' => [
                    [
                      'lit' => 'buoys.html',
                    ],
                  ],
                  'parts' => [
                    'buoys.html',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/buoys.xml',
                  'segments' => [
                    [
                      'lit' => 'buoys.xml',
                    ],
                  ],
                  'parts' => [
                    'buoys.xml',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
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
