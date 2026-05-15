package = "voxgig-sdk-ndbc-buoy-data"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/ndbc-buoy-data-sdk.git"
}
description = {
  summary = "NdbcBuoyData SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["ndbc-buoy-data_sdk"] = "ndbc-buoy-data_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
