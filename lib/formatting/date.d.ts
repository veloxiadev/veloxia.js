export declare function toMs(timeUnit: "year" | "month" | "week" | "day" | "hour" | "minute" | "second"): number;
/**
 * Transform a `Date` instance into a desired format.
 * @param format Date format, default: Y-m-d H:i:s
 * @param date Date instance or Unix timestamp in milliseconds. Default is current date.
 */
export declare function date(format?: string, date?: number | string | Date | "now" | "today" | "tomorrow" | "yesterday" | "last year" | "last week"): string;
