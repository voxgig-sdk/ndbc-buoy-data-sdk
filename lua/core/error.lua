-- NdbcBuoyData SDK error

local NdbcBuoyDataError = {}
NdbcBuoyDataError.__index = NdbcBuoyDataError


function NdbcBuoyDataError.new(code, msg, ctx)
  local self = setmetatable({}, NdbcBuoyDataError)
  self.is_sdk_error = true
  self.sdk = "NdbcBuoyData"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function NdbcBuoyDataError:error()
  return self.msg
end


function NdbcBuoyDataError:__tostring()
  return self.msg
end


return NdbcBuoyDataError
