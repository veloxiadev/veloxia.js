"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert a given unit of time to milliseconds (1000 ms = 1 s)
 * @param timeUnit i.e. "year", "hour", "month"...
 */
function toMs(timeUnit) {
    let ms;
    switch (timeUnit.toLowerCase()) {
        case "year":
            ms = 1000 * 3600 * 24 * 365;
            break;
        case "month":
            ms = 1000 * 3600 * 24 * 30;
            break;
        case "week":
            ms = 1000 * 3600 * 24 * 7;
            break;
        case "day":
            ms = 1000 * 3600 * 24;
            break;
        case "hour":
            ms = 1000 * 3600;
            break;
        case "minute":
            ms = 1000 * 60;
            break;
        case "second":
            ms = 1000;
            break;
    }
    return ms;
}
exports.toMs = toMs;
exports.LITERAL_TIME_PARSER_RULES = [
    {
        match: /^now$/i,
        provide: () => Date.now(),
    },
    {
        match: /^today$/i,
        provide: () => Date.now(),
    },
    {
        match: /^tomorrow$/i,
        provide: () => Date.now() + 1000 * 3600 * 24,
    },
    {
        match: /^yesterday$/i,
        provide: () => Date.now() - 1000 * 3600 * 24,
    },
    {
        match: /^last week$/i,
        provide: () => Date.now() - 1000 * 3600 * 24 * 7,
    },
    {
        match: /^next week$/i,
        provide: () => Date.now() + 1000 * 3600 * 24 * 7,
    },
    {
        match: /^last month$/i,
        provide: () => Date.now() - 1000 * 3600 * 24 * 30,
    },
    {
        match: /^next month$/i,
        provide: () => Date.now() + 1000 * 3600 * 24 * 30,
    },
    {
        match: /^last year$/i,
        provide: () => Date.now() - 1000 * 3600 * 24 * 365,
    },
    {
        match: /^next year$/i,
        provide: () => Date.now() + 1000 * 3600 * 24 * 365,
    },
    {
        match: [
            /^(?<num>\d+)\s*?(?<unit>year|month|week|day|hour|minute|second)s?\s*?ago$/i,
            /^-\s*?(?<num>\d+)\s*?(?<unit>year|month|week|day|hour|minute|second)s?$/i,
        ],
        provide: (match) => {
            const milliSeconds = toMs(match.unit.toLowerCase());
            const factor = parseInt(match.num);
            const date = new Date(Date.now() - milliSeconds * factor);
            return date;
        },
    },
    {
        match: /^(?:\+|in)\s*?(?<num>\d+)\s*?(?<unit>year|month|week|day|hour|minute|second)s?\s*$/i,
        provide: (match) => {
            const milliSeconds = toMs(match.unit.toLowerCase());
            const factor = parseInt(match.num);
            const date = new Date(Date.now() + milliSeconds * factor);
            return date;
        },
    },
];
/**
 * Transform a `Date` instance into a desired format.
 * @param format Date format, default: Y-m-d H:i:s
 * @param date Date instance or Unix timestamp in milliseconds. Default is current date.
 */
function date(format = "Y-m-d H:i:s", date = Date.now()) {
    exports.LITERAL_TIME_PARSER_RULES.forEach(instr => {
        let exps = [];
        if (!Array.isArray(instr.match)) {
            exps[0] = instr.match;
        }
        else {
            exps = instr.match;
        }
        exps.forEach(exp => {
            const match = date.toString().match(exp);
            if (match) {
                date = instr.provide.call(this, match.groups);
            }
        });
    });
    date = new Date(date);
    const parts = {};
    (parts.Y = date.getFullYear()), (parts.y = date.getFullYear() % 100);
    parts.m = `${date.getMonth() + 1}`;
    parts.d = `${date.getDate()}`;
    if (parts.m.length === 1)
        parts.m = `0${parts.m}`;
    if (parts.d.length === 1)
        parts.d = `0${parts.d}`;
    parts.H = `${date.getHours()}`;
    parts.i = `${date.getMinutes()}`;
    parts.s = `${date.getSeconds()}`;
    if (parts.H.length === 1)
        parts.H = `0${parts.H}`;
    if (parts.i.length === 1)
        parts.i = `0${parts.i}`;
    if (parts.s.length === 1)
        parts.s = `0${parts.s}`;
    return format
        .split("")
        .map(char => (typeof parts[char] !== "undefined" ? parts[char] : char))
        .join("");
}
exports.date = date;
//# sourceMappingURL=date.js.map