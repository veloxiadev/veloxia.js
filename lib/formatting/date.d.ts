/**
 * Convert a given unit of time to milliseconds (1000 ms = 1 s)
 * @param timeUnit i.e. "year", "hour", "month"...
 */
export declare function toMs(timeUnit: "year" | "month" | "week" | "day" | "hour" | "minute" | "second"): number;
/**
 * Transform a `Date` instance into a desired format.
 * @param format Date format, default: Y-m-d
 * @param date Date instance or Unix timestamp in milliseconds. Default is current date.
 */
export declare function date(format?: string, date?: number | string | Date | "now" | "today" | "tomorrow" | "yesterday" | "last year" | "last week"): string;
