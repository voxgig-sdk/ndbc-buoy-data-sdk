<?php
declare(strict_types=1);

// NdbcBuoyData SDK utility: result_body

class NdbcBuoyDataResultBody
{
    public static function call(NdbcBuoyDataContext $ctx): ?NdbcBuoyDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
