-- ProjectName SDK exists test

local sdk = require("ndbc-buoy-data_sdk")

describe("NdbcBuoyDataSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
