"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushAction = exports.LogLevel = exports.FlushMode = void 0;
var FlushMode;
(function (FlushMode) {
    /** Events are flushed to Exponea backend immediately when they are tracked */
    FlushMode["IMMEDIATE"] = "IMMEDIATE";
    /** Events are flushed to Exponea backend periodically based on flush period */
    FlushMode["PERIOD"] = "PERIOD";
    /** Events are flushed to Exponea backend when application is closed */
    FlushMode["APP_CLOSE"] = "APP_CLOSE";
    /** Events are flushed to Exponea when flushData() is manually called by the developer */
    FlushMode["MANUAL"] = "MANUAL";
})(FlushMode = exports.FlushMode || (exports.FlushMode = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel["OFF"] = "OFF";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["WARN"] = "WARN";
    LogLevel["INFO"] = "INFO";
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["VERBOSE"] = "VERBOSE";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var PushAction;
(function (PushAction) {
    /** "Open App" action */
    PushAction["APP"] = "app";
    /** "Deep link" action. In order to open your application from deeplink, extra setup is required. */
    PushAction["DEEPLINK"] = "deeplink";
    /** "Open web browser" action. Exponea SDK will automatically open the browser in this case. */
    PushAction["WEB"] = "web";
})(PushAction = exports.PushAction || (exports.PushAction = {}));
