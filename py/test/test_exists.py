# ProjectName SDK exists test

import pytest
from ndbcbuoydata_sdk import NdbcBuoyDataSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = NdbcBuoyDataSDK.test(None, None)
        assert testsdk is not None
