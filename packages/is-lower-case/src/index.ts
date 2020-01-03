/**
 * Returns a boolean indicating whether text is lower case.
 */
export function isLowerCase(input: string) {
  return input.toLowerCase() === input && input.toUpperCase() !== input;
}
