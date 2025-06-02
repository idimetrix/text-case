/**
 * Upper case the first character of an input string.
 */
export function upperCaseFirst(str: string) {
  // Handle null/undefined inputs gracefully
  if (!str) return "";

  return str.charAt(0).toUpperCase() + str.substr(1);
}
