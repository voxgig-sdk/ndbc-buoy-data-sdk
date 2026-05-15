# NdbcBuoyData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module NdbcBuoyDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      NdbcBuoyDataBaseFeature.new
    when "test"
      NdbcBuoyDataTestFeature.new
    else
      NdbcBuoyDataBaseFeature.new
    end
  end
end
