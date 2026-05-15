<?php
declare(strict_types=1);

// NdbcBuoyData SDK exists test

require_once __DIR__ . '/../ndbcbuoydata_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = NdbcBuoyDataSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
