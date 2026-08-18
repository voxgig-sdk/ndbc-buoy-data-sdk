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
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'atmospheric_pressure',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'average_wave_period',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'dominant_wave_period',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'latitude',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'longitude',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'station_id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'timestamp',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'water_temperature',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'wave_direction',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'wave_height',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'wind_direction',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'wind_speed',
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
