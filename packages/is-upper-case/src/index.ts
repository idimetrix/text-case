/**
 * Returns a boolean indicating whether text is upper case.
 */
export function isUpperCase(input: string) {
  // Handle null/undefined inputs gracefully
  if (!input) return false;

  return input.toUpperCase() === input && input.toLowerCase() !== input;
}
