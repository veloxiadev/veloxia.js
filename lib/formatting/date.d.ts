/**
 * Convert a given unit of time to milliseconds (1000 ms = 1 s)
 * @param timeUnit i.e. "year", "hour", "month"...
 */
export declare function toMs(timeUnit: "year" | "month" | "week" | "day" | "hour" | "minute" | "second"): number;
export declare const LITERAL_TIME_PARSER_RULES: ({
    match: RegExp;
    provide: () => number;
} | {
    match: RegExp[];
    provide: (match: {
        num: any;
        unit: any;
    }) => Date;
} | {
    match: RegExp;
    provide: (match: {
        num: any;
        unit: any;
    }) => Date;
})[];
/**
 * Transform a `Date` instance into a desired format.
 * @param format Date format, default: Y-m-d H:i:s
 * @param date Date instance or Unix timestamp in milliseconds. Default is current date.
 */
export declare function date(format?: string, date?: number | string | Date | "now" | "today" | "tomorrow" | "yesterday" | "last year" | "last week"): string;
