import { toMs } from "../formatting/date";
export const literalTimeParserRules = [
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
    provide: (match: { num: any; unit: any }) => {
      const milliSeconds = toMs(match.unit.toLowerCase());
      const factor = parseInt(match.num);
      const date = new Date(Date.now() - milliSeconds * factor);
      return date;
    },
  },
  {
    match: /^(?:\+|in)\s*?(?<num>\d+)\s*?(?<unit>year|month|week|day|hour|minute|second)s?\s*$/i,
    provide: (match: { num: any; unit: any }) => {
      const milliSeconds = toMs(match.unit.toLowerCase());
      const factor = parseInt(match.num);
      const date = new Date(Date.now() + milliSeconds * factor);
      return date;
    },
  },
];
