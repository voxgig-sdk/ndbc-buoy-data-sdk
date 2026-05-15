# NdbcBuoyData SDK utility: make_context
require_relative '../core/context'
module NdbcBuoyDataUtilities
  MakeContext = ->(ctxmap, basectx) {
    NdbcBuoyDataContext.new(ctxmap, basectx)
  }
end
