package voxgigndbcbuoydatasdk

import (
	"github.com/voxgig-sdk/ndbc-buoy-data-sdk/core"
	"github.com/voxgig-sdk/ndbc-buoy-data-sdk/entity"
	"github.com/voxgig-sdk/ndbc-buoy-data-sdk/feature"
	_ "github.com/voxgig-sdk/ndbc-buoy-data-sdk/utility"
)

// Type aliases preserve external API.
type NdbcBuoyDataSDK = core.NdbcBuoyDataSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type NdbcBuoyDataEntity = core.NdbcBuoyDataEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type NdbcBuoyDataError = core.NdbcBuoyDataError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewBuoyEntityFunc = func(client *core.NdbcBuoyDataSDK, entopts map[string]any) core.NdbcBuoyDataEntity {
		return entity.NewBuoyEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewNdbcBuoyDataSDK = core.NewNdbcBuoyDataSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
