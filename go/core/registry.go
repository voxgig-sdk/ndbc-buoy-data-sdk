package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewBuoyEntityFunc func(client *NdbcBuoyDataSDK, entopts map[string]any) NdbcBuoyDataEntity

