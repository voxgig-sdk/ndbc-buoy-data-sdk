<?php
declare(strict_types=1);

// NdbcBuoyData SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class NdbcBuoyDataMakeContext
{
    public static function call(array $ctxmap, ?NdbcBuoyDataContext $basectx): NdbcBuoyDataContext
    {
        return new NdbcBuoyDataContext($ctxmap, $basectx);
    }
}
