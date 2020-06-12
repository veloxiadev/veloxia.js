import { literalTimeParserRules } from "../utils/literal_time_parser_rules";

export function toMs(
  timeUnit: "year" | "month" | "week" | "day" | "hour" | "minute" | "second"
) {
  let ms: number;
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
/**
 * Transform a `Date` instance into a desired format.
 * @param format Date format, default: Y-m-d H:i:s
 * @param date Date instance or Unix timestamp in milliseconds. Default is current date.
 */
export function date(
  format = "Y-m-d H:i:s",
  date:
    | number
    | string
    | Date
    | "now"
    | "today"
    | "tomorrow"
    | "yesterday"
    | "last year"
    | "last week" = Date.now()
) {
  literalTimeParserRules.forEach(instr => {
    let exps = [];
    if (!Array.isArray(instr.match)) {
      exps[0] = instr.match;
    } else {
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
  const parts: { [attr: string]: string | number } = {};
  (parts.Y = date.getFullYear()), (parts.y = date.getFullYear() % 100);
  parts.m = `${date.getMonth() + 1}`;
  parts.d = `${date.getDate()}`;
  if (parts.m.length === 1) parts.m = `0${parts.m}`;
  if (parts.d.length === 1) parts.d = `0${parts.d}`;
  parts.H = `${date.getHours()}`;
  parts.i = `${date.getMinutes()}`;
  parts.s = `${date.getSeconds()}`;
  if (parts.H.length === 1) parts.H = `0${parts.H}`;
  if (parts.i.length === 1) parts.i = `0${parts.i}`;
  if (parts.s.length === 1) parts.s = `0${parts.s}`;
  return format
    .split("")
    .map(char => (typeof parts[char] !== "undefined" ? parts[char] : char))
    .join("");
}
