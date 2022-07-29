export declare type JsonPrimitive = string | number | boolean | null;
export declare type JsonValue = JsonPrimitive | JsonObject | JsonArray;
export declare type JsonObject = {
    [member: string]: JsonValue;
};
export declare type JsonArray = Array<JsonValue>;
