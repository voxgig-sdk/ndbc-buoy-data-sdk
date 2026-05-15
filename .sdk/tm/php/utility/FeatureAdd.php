<?php
declare(strict_types=1);

// NdbcBuoyData SDK utility: feature_add

class NdbcBuoyDataFeatureAdd
{
    public static function call(NdbcBuoyDataContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
