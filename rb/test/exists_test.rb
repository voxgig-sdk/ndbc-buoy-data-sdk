# NdbcBuoyData SDK exists test

require "minitest/autorun"
require_relative "../NdbcBuoyData_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = NdbcBuoyDataSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
