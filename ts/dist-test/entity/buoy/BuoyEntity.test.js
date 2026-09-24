"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('BuoyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NDBC_BUOY_DATA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NDBC_BUOY_DATA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NdbcBuoyDataSDK.test();
        const ent = testsdk.Buoy();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NDBC_BUOY_DATA_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'buoy.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "air_temperature": { "a": true, "fo": "float", "h": "Air Temperature", "n": "air_temperature", "r": false, "sh": "Air temperature in Celsius", "t": "`$NUMBER`", "key$": "air_temperature", "index$": 0 }, "atmospheric_pressure": { "a": true, "fo": "float", "h": "Atmospheric Pressure", "n": "atmospheric_pressure", "r": false, "sh": "Atmospheric pressure in hPa", "t": "`$NUMBER`", "key$": "atmospheric_pressure", "index$": 1 }, "average_wave_period": { "a": true, "fo": "float", "h": "Average Wave Period", "n": "average_wave_period", "r": false, "sh": "Average wave period in seconds", "t": "`$NUMBER`", "key$": "average_wave_period", "index$": 2 }, "dominant_wave_period": { "a": true, "fo": "float", "h": "Dominant Wave Period", "n": "dominant_wave_period", "r": false, "sh": "Dominant wave period in seconds", "t": "`$NUMBER`", "key$": "dominant_wave_period", "index$": 3 }, "latitude": { "a": true, "fo": "float", "h": "Latitude", "n": "latitude", "r": false, "sh": "Latitude coordinate of the buoy", "t": "`$NUMBER`", "key$": "latitude", "index$": 4 }, "longitude": { "a": true, "fo": "float", "h": "Longitude", "n": "longitude", "r": false, "sh": "Longitude coordinate of the buoy", "t": "`$NUMBER`", "key$": "longitude", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the buoy station", "t": "`$STRING`", "key$": "name", "index$": 6 }, "station_id": { "a": true, "h": "Station Id", "n": "station_id", "r": false, "sh": "Unique identifier for the buoy station", "t": "`$STRING`", "key$": "station_id", "index$": 7 }, "timestamp": { "a": true, "fo": "date-time", "h": "Timestamp", "n": "timestamp", "r": false, "sh": "Timestamp of the reading", "t": "`$STRING`", "key$": "timestamp", "index$": 8 }, "water_temperature": { "a": true, "fo": "float", "h": "Water Temperature", "n": "water_temperature", "r": false, "sh": "Water temperature in Celsius", "t": "`$NUMBER`", "key$": "water_temperature", "index$": 9 }, "wave_direction": { "a": true, "fo": "float", "h": "Wave Direction", "n": "wave_direction", "r": false, "sh": "Wave direction in degrees", "t": "`$NUMBER`", "key$": "wave_direction", "index$": 10 }, "wave_height": { "a": true, "fo": "float", "h": "Wave Height", "n": "wave_height", "r": false, "sh": "Significant wave height in meters", "t": "`$NUMBER`", "key$": "wave_height", "index$": 11 }, "wind_direction": { "a": true, "fo": "float", "h": "Wind Direction", "n": "wind_direction", "r": false, "sh": "Wind direction in degrees", "t": "`$NUMBER`", "key$": "wind_direction", "index$": 12 }, "wind_speed": { "a": true, "fo": "float", "h": "Wind Speed", "n": "wind_speed", "r": false, "sh": "Wind speed in meters per second", "t": "`$NUMBER`", "key$": "wind_speed", "index$": 13 } }, "name": "buoy", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /buoys.json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/buoys.json", "q": {}, "r": {}, "s": [{ "lit": "buoys.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /buoys.csv", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/buoys.csv", "q": {}, "r": {}, "s": [{ "lit": "buoys.csv" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /buoys.html", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/buoys.html", "q": {}, "r": {}, "s": [{ "lit": "buoys.html" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /buoys.xml", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/buoys.xml", "q": {}, "r": {}, "s": [{ "lit": "buoys.xml" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "buoy", "name__orig": "buoy", "Name": "Buoy", "name_": "buoy", "name-": "buoy", "NAME": "BUOY", "index$": 0 }, { "active": true, "entity": "buoy", "key$": "BasicBuoyFlow", "kind": "basic", "name": "BasicBuoyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "buoy_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "buoy_ref01", "srcdatavar": "buoy_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-buoy_ref01" } }], "index$": 1 }] }, 'Buoy', { "GET /buoys.json": { "protocol": "http", "operationId": "getBuoysJson", "responses": { "200": { "description": "Successful response with buoy data", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "description": "Buoy data object containing real-time readings and station information", "properties": { "station_id": { "type": "string", "description": "Unique identifier for the buoy station", "example": "46025", "key$": "station_id" }, "name": { "type": "string", "description": "Name of the buoy station", "example": "Santa Monica Basin", "key$": "name" }, "latitude": { "type": "number", "format": "float", "description": "Latitude coordinate of the buoy", "example": 33.749, "key$": "latitude" }, "longitude": { "type": "number", "format": "float", "description": "Longitude coordinate of the buoy", "example": -119.053, "key$": "longitude" }, "wave_height": { "type": "number", "format": "float", "description": "Significant wave height in meters", "example": 2.5, "key$": "wave_height" }, "dominant_wave_period": { "type": "number", "format": "float", "description": "Dominant wave period in seconds", "example": 14, "key$": "dominant_wave_period" }, "average_wave_period": { "type": "number", "format": "float", "description": "Average wave period in seconds", "example": 10.5, "key$": "average_wave_period" }, "wave_direction": { "type": "number", "format": "float", "description": "Wave direction in degrees", "example": 290, "key$": "wave_direction" }, "water_temperature": { "type": "number", "format": "float", "description": "Water temperature in Celsius", "example": 15.5, "key$": "water_temperature" }, "air_temperature": { "type": "number", "format": "float", "description": "Air temperature in Celsius", "example": 18.2, "key$": "air_temperature" }, "wind_speed": { "type": "number", "format": "float", "description": "Wind speed in meters per second", "example": 7.5, "key$": "wind_speed" }, "wind_direction": { "type": "number", "format": "float", "description": "Wind direction in degrees", "example": 315, "key$": "wind_direction" }, "atmospheric_pressure": { "type": "number", "format": "float", "description": "Atmospheric pressure in hPa", "example": 1013.2, "key$": "atmospheric_pressure" }, "timestamp": { "type": "string", "format": "date-time", "description": "Timestamp of the reading", "example": "2023-10-15T14:30:00Z", "key$": "timestamp" } }, "x-ref": "#/components/schemas/Buoy", "index$": 0 } } } } }, "500": { "description": "Internal server error" } }, "parameters": [], "securitySource": "unspecified" }, "GET /buoys.csv": { "protocol": "http", "operationId": "getBuoysCsv", "responses": { "200": { "description": "Successful response with buoy data", "content": { "text/csv": { "schema": { "type": "string" } } } }, "500": { "description": "Internal server error" } }, "parameters": [], "securitySource": "unspecified" }, "GET /buoys.html": { "protocol": "http", "operationId": "getBuoysHtml", "responses": { "200": { "description": "Successful response with buoy data", "content": { "text/html": { "schema": { "type": "string" } } } }, "500": { "description": "Internal server error" } }, "parameters": [], "securitySource": "unspecified" }, "GET /buoys.xml": { "protocol": "http", "operationId": "getBuoysXml", "responses": { "200": { "description": "Successful response with buoy data", "content": { "application/xml": { "schema": { "type": "object", "xml": { "name": "buoys" } } } } }, "500": { "description": "Internal server error" } }, "parameters": [], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let buoy_ref01_data = Object.values(setup.data.existing.buoy)[0];
        // LIST
        const buoy_ref01_ent = client.Buoy();
        const buoy_ref01_match = {};
        const buoy_ref01_list = (await buoy_ref01_ent.list(buoy_ref01_match)).map((e) => e.data());
        // LOAD
        const buoy_ref01_match_dt0 = {};
        const buoy_ref01_data_dt0 = (await buoy_ref01_ent.load(buoy_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != buoy_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/buoy/BuoyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NdbcBuoyDataSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['buoy01', 'buoy02', 'buoy03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NDBC_BUOY_DATA_TEST_BUOY_ENTID': idmap,
        'NDBC_BUOY_DATA_TEST_LIVE': 'FALSE',
        'NDBC_BUOY_DATA_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['NDBC_BUOY_DATA_TEST_BUOY_ENTID'];
    const live = 'TRUE' === env.NDBC_BUOY_DATA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NDBC_BUOY_DATA_TEST_BUOY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.NdbcBuoyDataSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.NDBC_BUOY_DATA_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=BuoyEntity.test.js.map