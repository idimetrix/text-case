/**
 * Returns a boolean indicating whether text is lower case.
 */
export function isLowerCase(input: string) {
  // Handle null/undefined inputs gracefully
  if (!input) return false;

  return input.toLowerCase() === input && input.toUpperCase() !== input;
}
