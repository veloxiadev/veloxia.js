/**
 * Name of each month.
 */
export const MONTHS = {
  1: "januari",
  2: "februari",
  3: "mars",
  4: "april",
  5: "maj",
  6: "juni",
  7: "juli",
  8: "augusti",
  9: "september",
  10: "oktober",
  11: "november",
  12: "december",
};

/**
 * Name of the months.
 */
export const MONTHS_SHORT = {
  1: "jan",
  2: "feb",
  3: "mar",
  4: "apr",
  5: "maj",
  6: "jun",
  7: "jul",
  8: "aug",
  9: "sep",
  10: "okt",
  11: "nov",
  12: "dec",
};

/**
 * Convert a date (year + month + day) to the default locale format.
 * @param date
 */
export function dateFormat(date: Date) {
  const y: number = date.getFullYear();
  let m = `${date.getMonth() + 1}`;
  let d = `${date.getDate()}`;
  if (m.length === 1) m = `0${m}`;
  if (d.length === 1) d = `0${d}`;
  return `${y}-${m}-${d}`;
}
