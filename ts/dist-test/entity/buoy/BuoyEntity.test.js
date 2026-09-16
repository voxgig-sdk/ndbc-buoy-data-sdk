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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "float", "name": "air_temperature", "req": false, "short": "Air temperature in Celsius", "type": "`$NUMBER`", "index$": 0 }, { "active": true, "format": "float", "name": "atmospheric_pressure", "req": false, "short": "Atmospheric pressure in hPa", "type": "`$NUMBER`", "index$": 1 }, { "active": true, "format": "float", "name": "average_wave_period", "req": false, "short": "Average wave period in seconds", "type": "`$NUMBER`", "index$": 2 }, { "active": true, "format": "float", "name": "dominant_wave_period", "req": false, "short": "Dominant wave period in seconds", "type": "`$NUMBER`", "index$": 3 }, { "active": true, "format": "float", "name": "latitude", "req": false, "short": "Latitude coordinate of the buoy", "type": "`$NUMBER`", "index$": 4 }, { "active": true, "format": "float", "name": "longitude", "req": false, "short": "Longitude coordinate of the buoy", "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "name", "req": false, "short": "Name of the buoy station", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "station_id", "req": false, "short": "Unique identifier for the buoy station", "type": "`$STRING`", "index$": 7 }, { "active": true, "format": "date-time", "name": "timestamp", "req": false, "short": "Timestamp of the reading", "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "float", "name": "water_temperature", "req": false, "short": "Water temperature in Celsius", "type": "`$NUMBER`", "index$": 9 }, { "active": true, "format": "float", "name": "wave_direction", "req": false, "short": "Wave direction in degrees", "type": "`$NUMBER`", "index$": 10 }, { "active": true, "format": "float", "name": "wave_height", "req": false, "short": "Significant wave height in meters", "type": "`$NUMBER`", "index$": 11 }, { "active": true, "format": "float", "name": "wind_direction", "req": false, "short": "Wind direction in degrees", "type": "`$NUMBER`", "index$": 12 }, { "active": true, "format": "float", "name": "wind_speed", "req": false, "short": "Wind speed in meters per second", "type": "`$NUMBER`", "index$": 13 }], "name": "buoy", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /buoys.json", "json": "{\"operationId\":\"getBuoysJson\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"description\":\"Buoy data object containing real-time readings and station information\",\"properties\":{\"air_temperature\":{\"description\":\"Air temperature in Celsius\",\"example\":18.2,\"format\":\"float\",\"type\":\"number\"},\"atmospheric_pressure\":{\"description\":\"Atmospheric pressure in hPa\",\"example\":1013.2,\"format\":\"float\",\"type\":\"number\"},\"average_wave_period\":{\"description\":\"Average wave period in seconds\",\"example\":10.5,\"format\":\"float\",\"type\":\"number\"},\"dominant_wave_period\":{\"description\":\"Dominant wave period in seconds\",\"example\":14,\"format\":\"float\",\"type\":\"number\"},\"latitude\":{\"description\":\"Latitude coordinate of the buoy\",\"example\":33.749,\"format\":\"float\",\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude coordinate of the buoy\",\"example\":-119.053,\"format\":\"float\",\"type\":\"number\"},\"name\":{\"description\":\"Name of the buoy station\",\"example\":\"Santa Monica Basin\",\"type\":\"string\"},\"station_id\":{\"description\":\"Unique identifier for the buoy station\",\"example\":\"46025\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the reading\",\"example\":\"2023-10-15T14:30:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"water_temperature\":{\"description\":\"Water temperature in Celsius\",\"example\":15.5,\"format\":\"float\",\"type\":\"number\"},\"wave_direction\":{\"description\":\"Wave direction in degrees\",\"example\":290,\"format\":\"float\",\"type\":\"number\"},\"wave_height\":{\"description\":\"Significant wave height in meters\",\"example\":2.5,\"format\":\"float\",\"type\":\"number\"},\"wind_direction\":{\"description\":\"Wind direction in degrees\",\"example\":315,\"format\":\"float\",\"type\":\"number\"},\"wind_speed\":{\"description\":\"Wind speed in meters per second\",\"example\":7.5,\"format\":\"float\",\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with buoy data\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/buoys.json", "segments": [{ "lit": "buoys.json" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /buoys.csv", "json": "{\"operationId\":\"getBuoysCsv\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"text/csv\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful response with buoy data\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/buoys.csv", "segments": [{ "lit": "buoys.csv" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /buoys.html", "json": "{\"operationId\":\"getBuoysHtml\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"text/html\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful response with buoy data\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/buoys.html", "segments": [{ "lit": "buoys.html" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": {}, "contract": { "id": "GET /buoys.xml", "json": "{\"operationId\":\"getBuoysXml\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/xml\":{\"schema\":{\"type\":\"object\",\"xml\":{\"name\":\"buoys\"}}}},\"description\":\"Successful response with buoy data\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/buoys.xml", "segments": [{ "lit": "buoys.xml" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "buoy", "name__orig": "buoy", "Name": "Buoy", "name_": "buoy", "name-": "buoy", "NAME": "BUOY", "index$": 0 }, { "active": true, "entity": "buoy", "key$": "BasicBuoyFlow", "kind": "basic", "name": "BasicBuoyFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "buoy_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "buoy_ref01", "srcdatavar": "buoy_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-buoy_ref01" } }], "index$": 1 }] }, 'Buoy');
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