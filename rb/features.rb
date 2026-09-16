# NdbcBuoyData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module NdbcBuoyDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      NdbcBuoyDataBaseFeature.new
    when "ratelimit"
      NdbcBuoyDataRatelimitFeature.new
    when "retry"
      NdbcBuoyDataRetryFeature.new
    when "test"
      NdbcBuoyDataTestFeature.new
    when "timeout"
      NdbcBuoyDataTimeoutFeature.new
    else
      NdbcBuoyDataBaseFeature.new
    end
  end
end
