"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpLoggingLevel = exports.PushNotificationImportance = exports.PushTokenTrackingFrequency = void 0;
var PushTokenTrackingFrequency;
(function (PushTokenTrackingFrequency) {
    /** Tracked on the first launch or if the token changes */
    PushTokenTrackingFrequency["ON_TOKEN_CHANGE"] = "ON_TOKEN_CHANGE";
    /** Tracked every time the app is launched */
    PushTokenTrackingFrequency["EVERY_LAUNCH"] = "EVERY_LAUNCH";
    /** Tracked once on days when the user opens the app */
    PushTokenTrackingFrequency["DAILY"] = "DAILY";
})(PushTokenTrackingFrequency = exports.PushTokenTrackingFrequency || (exports.PushTokenTrackingFrequency = {}));
var PushNotificationImportance;
(function (PushNotificationImportance) {
    /** Translates to android.app.NotificationManager.IMPORTANCE_MIN */
    PushNotificationImportance["MIN"] = "MIN";
    /** Translates to android.app.NotificationManager.IMPORTANCE_LOW */
    PushNotificationImportance["LOW"] = "LOW";
    /** Translates to android.app.NotificationManager.IMPORTANCE_DEFAULT */
    PushNotificationImportance["DEFAULT"] = "DEFAULT";
    /** Translates to android.app.NotificationManager.IMPORTANCE_HIGH */
    PushNotificationImportance["HIGH"] = "HIGH";
})(PushNotificationImportance = exports.PushNotificationImportance || (exports.PushNotificationImportance = {}));
var HttpLoggingLevel;
(function (HttpLoggingLevel) {
    /** No logs. */
    HttpLoggingLevel["NONE"] = "NONE";
    /** Logs request and response lines. */
    HttpLoggingLevel["BASIC"] = "BASIC";
    /** Logs request and response lines and their respective headers. */
    HttpLoggingLevel["HEADERS"] = "HEADERS";
    /** Logs request and response lines and their respective headers and bodies (if present). */
    HttpLoggingLevel["BODY"] = "BODY";
})(HttpLoggingLevel = exports.HttpLoggingLevel || (exports.HttpLoggingLevel = {}));
