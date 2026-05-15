<?php
declare(strict_types=1);

// NdbcBuoyData SDK utility: result_headers

class NdbcBuoyDataResultHeaders
{
    public static function call(NdbcBuoyDataContext $ctx): ?NdbcBuoyDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
