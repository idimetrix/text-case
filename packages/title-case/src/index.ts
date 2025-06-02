import { noCase, Options } from "text-no-case";
import { upperCaseFirst } from "text-upper-case-first";

export { Options };

// Small words that should not be capitalized unless they are at the beginning or end
const SMALL_WORDS = new Set([
  "a",
  "an",
  "and",
  "at",
  "but",
  "by",
  "en",
  "for",
  "if",
  "in",
  "nor",
  "of",
  "on",
  "or",
  "per",
  "so",
  "the",
  "to",
  "up",
  "via",
  "yet",
]);

function titleCaseTransform(input: string, index: number, parts: string[]) {
  const word = input.toLowerCase();

  // Always capitalize first and last words
  if (index === 0 || index === parts.length - 1) {
    return upperCaseFirst(word);
  }

  // Don't capitalize small words in the middle
  if (SMALL_WORDS.has(word)) {
    return word;
  }

  // Capitalize all other words
  return upperCaseFirst(word);
}

export function titleCase(input: string, options: Options = {}) {
  // Handle null/undefined inputs gracefully
  if (!input) return "";

  return noCase(input, {
    delimiter: " ",
    transform: titleCaseTransform,
    ...options,
  });
}
