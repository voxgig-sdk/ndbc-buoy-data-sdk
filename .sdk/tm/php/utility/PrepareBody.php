<?php
declare(strict_types=1);

// NdbcBuoyData SDK utility: prepare_body

class NdbcBuoyDataPrepareBody
{
    public static function call(NdbcBuoyDataContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
