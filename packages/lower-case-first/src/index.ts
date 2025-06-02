/**
 * Lower case the first character of an input string.
 */
export function lowerCaseFirst(str: string) {
  // Handle null/undefined inputs gracefully
  if (!str) return "";

  return str.charAt(0).toLowerCase() + str.substr(1);
}
