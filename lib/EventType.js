"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventType;
(function (EventType) {
    /** Install event is fired only once when the app is first installed */
    EventType["INSTALL"] = "INSTALL";
    /** Session start event used to mark the start of a session, typically when an app comes to foreground */
    EventType["SESSION_START"] = "SESSION_START";
    /** Session end event used to mark the end of a session, typically when an app goes to background */
    EventType["SESSION_END"] = "SESSION_END";
    /** Custom event tracking, used to report any of your custom events */
    EventType["TRACK_EVENT"] = "TRACK_EVENT";
    /** Tracking of customers is used to identify a current customer with some identifier */
    EventType["TRACK_CUSTOMER"] = "TRACK_CUSTOMER";
    /** Virtual and hard payments */
    EventType["PAYMENT"] = "PAYMENT";
    /** Event used for registering the push notifications token of the device with Exponea */
    EventType["PUSH_TOKEN"] = "PUSH_TOKEN";
    /** For tracking that push notification has been delivered */
    EventType["PUSH_DELIVERED"] = "PUSH_DELIVERED";
    /** For tracking that a push notification has been opened */
    EventType["PUSH_OPENED"] = "PUSH_OPENED";
    /** For tracking user interaction with links containing campaign data(deeplinks) */
    EventType["CAMPAIGN_CLICK"] = "CAMPAIGN_CLICK";
    /** For tracking in-app message related events */
    EventType["BANNER"] = "BANNER";
})(EventType || (EventType = {}));
exports.default = EventType;
