/**
 * Converts a boolean value into `yes` or `no`.
 * @param input Input boolean or truthy/falsy value.
 * @param onTrue String to display if input is truthy.
 * @param onFalse String to display if input is falsy.
 */
export function booleanToString(
  input: boolean | number,
  onTrue = "Ja",
  onFalse = "Nej"
) {
  return input ? onTrue : onFalse;
}
