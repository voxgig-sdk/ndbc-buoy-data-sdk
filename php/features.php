<?php
declare(strict_types=1);

// NdbcBuoyData SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class NdbcBuoyDataFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new NdbcBuoyDataBaseFeature();
            case "test":
                return new NdbcBuoyDataTestFeature();
            default:
                return new NdbcBuoyDataBaseFeature();
        }
    }
}
