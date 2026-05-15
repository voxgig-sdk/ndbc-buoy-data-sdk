# NdbcBuoyData SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

NdbcBuoyDataUtility.registrar = ->(u) {
  u.clean = NdbcBuoyDataUtilities::Clean
  u.done = NdbcBuoyDataUtilities::Done
  u.make_error = NdbcBuoyDataUtilities::MakeError
  u.feature_add = NdbcBuoyDataUtilities::FeatureAdd
  u.feature_hook = NdbcBuoyDataUtilities::FeatureHook
  u.feature_init = NdbcBuoyDataUtilities::FeatureInit
  u.fetcher = NdbcBuoyDataUtilities::Fetcher
  u.make_fetch_def = NdbcBuoyDataUtilities::MakeFetchDef
  u.make_context = NdbcBuoyDataUtilities::MakeContext
  u.make_options = NdbcBuoyDataUtilities::MakeOptions
  u.make_request = NdbcBuoyDataUtilities::MakeRequest
  u.make_response = NdbcBuoyDataUtilities::MakeResponse
  u.make_result = NdbcBuoyDataUtilities::MakeResult
  u.make_point = NdbcBuoyDataUtilities::MakePoint
  u.make_spec = NdbcBuoyDataUtilities::MakeSpec
  u.make_url = NdbcBuoyDataUtilities::MakeUrl
  u.param = NdbcBuoyDataUtilities::Param
  u.prepare_auth = NdbcBuoyDataUtilities::PrepareAuth
  u.prepare_body = NdbcBuoyDataUtilities::PrepareBody
  u.prepare_headers = NdbcBuoyDataUtilities::PrepareHeaders
  u.prepare_method = NdbcBuoyDataUtilities::PrepareMethod
  u.prepare_params = NdbcBuoyDataUtilities::PrepareParams
  u.prepare_path = NdbcBuoyDataUtilities::PreparePath
  u.prepare_query = NdbcBuoyDataUtilities::PrepareQuery
  u.result_basic = NdbcBuoyDataUtilities::ResultBasic
  u.result_body = NdbcBuoyDataUtilities::ResultBody
  u.result_headers = NdbcBuoyDataUtilities::ResultHeaders
  u.transform_request = NdbcBuoyDataUtilities::TransformRequest
  u.transform_response = NdbcBuoyDataUtilities::TransformResponse
}
