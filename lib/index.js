"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
/*
React native bridge doesn't like optional parameters, we have to implement it ourselves.
Parameters that are null/undefined are ignored and the bridge looks for a method with one less parameter(and fails).
When calling native methods we pass each optional parameter as an object with key equal to parameter name
*/
var Exponea = {
    configure: react_native_1.NativeModules.Exponea.configure,
    isConfigured: react_native_1.NativeModules.Exponea.isConfigured,
    getCustomerCookie: react_native_1.NativeModules.Exponea.getCustomerCookie,
    checkPushSetup: react_native_1.NativeModules.Exponea.checkPushSetup,
    getFlushMode: react_native_1.NativeModules.Exponea.getFlushMode,
    setFlushMode: react_native_1.NativeModules.Exponea.setFlushMode,
    getFlushPeriod: react_native_1.NativeModules.Exponea.getFlushPeriod,
    setFlushPeriod: react_native_1.NativeModules.Exponea.setFlushPeriod,
    getLogLevel: react_native_1.NativeModules.Exponea.getLogLevel,
    setLogLevel: react_native_1.NativeModules.Exponea.setLogLevel,
    getDefaultProperties: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, react_native_1.NativeModules.Exponea.getDefaultProperties()];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    },
    setDefaultProperties: react_native_1.NativeModules.Exponea.setDefaultProperties,
    anonymize: function (exponeaProject, projectMapping) {
        return react_native_1.NativeModules.Exponea.anonymize({ exponeaProject: exponeaProject }, { projectMapping: projectMapping });
    },
    identifyCustomer: react_native_1.NativeModules.Exponea.identifyCustomer,
    flushData: react_native_1.NativeModules.Exponea.flushData,
    trackEvent: function (eventName, properties, timestamp) {
        return react_native_1.NativeModules.Exponea.trackEvent(eventName, properties, { timestamp: timestamp });
    },
    trackSessionStart: function (timestamp) {
        return react_native_1.NativeModules.Exponea.trackSessionStart({ timestamp: timestamp });
    },
    trackSessionEnd: function (timestamp) {
        return react_native_1.NativeModules.Exponea.trackSessionEnd({ timestamp: timestamp });
    },
    fetchConsents: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, react_native_1.NativeModules.Exponea.fetchConsents()];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    },
    fetchRecommendations: function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, react_native_1.NativeModules.Exponea.fetchRecommendations(options)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    },
    setPushOpenedListener: function (listener) {
        pushOpenedUserListener = listener;
        react_native_1.NativeModules.Exponea.onPushOpenedListenerSet();
    },
    removePushOpenedListener: function () {
        pushOpenedUserListener = null;
        react_native_1.NativeModules.Exponea.onPushOpenedListenerRemove();
    },
    setPushReceivedListener: function (listener) {
        pushReceivedUserListener = listener;
        react_native_1.NativeModules.Exponea.onPushReceivedListenerSet();
    },
    removePushReceivedListener: function () {
        pushReceivedUserListener = null;
        react_native_1.NativeModules.Exponea.onPushReceivedListenerRemove();
    },
    requestIosPushAuthorization: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (react_native_1.Platform.OS !== 'ios') {
                    throw new Error('requestIosPushAuthorization is only available on iOS!');
                }
                return [2 /*return*/, react_native_1.NativeModules.Exponea.requestPushAuthorization()];
            });
        });
    },
};
var pushOpenedUserListener = null;
var pushReceivedUserListener = null;
var eventEmitter = new react_native_1.NativeEventEmitter(react_native_1.NativeModules.Exponea);
eventEmitter.addListener('pushOpened', function (pushOpened) {
    pushOpenedUserListener && pushOpenedUserListener(JSON.parse(pushOpened));
});
eventEmitter.addListener('pushReceived', function (data) {
    pushReceivedUserListener && pushReceivedUserListener(JSON.parse(data));
});
exports.default = Exponea;
