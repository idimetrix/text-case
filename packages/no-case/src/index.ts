import { lowerCase } from "text-lower-case";

/**
 * Configuration options for text transformation functions.
 *
 * @public
 */
export interface Options {
  /** Regular expression(s) to split words on boundaries */
  splitRegexp?: RegExp | RegExp[];
  /** Regular expression(s) to strip unwanted characters */
  stripRegexp?: RegExp | RegExp[];
  /** Delimiter to use between words in the output */
  delimiter?: string;
  /** Custom transformation function for each word */
  transform?: (part: string, index: number, parts: string[]) => string;
}

/**
 * Default regular expressions for splitting text into words.
 * Supports Unicode letters and handles camelCase/PascalCase boundaries.
 *
 * Patterns:
 * 1. Split between lowercase/number and uppercase: "camelCase" -> "camel Case"
 * 2. Split between uppercase sequences: "XMLParser" -> "XML Parser"
 */
const DEFAULT_SPLIT_REGEXP = [
  /(\p{Ll}|\p{N})(\p{Lu})/gu,
  /(\p{Lu})(\p{Lu}\p{Ll})/gu,
];

/**
 * Default regular expression for stripping unwanted characters.
 * Removes all non-letter and non-number characters while preserving Unicode.
 */
const DEFAULT_STRIP_REGEXP = /[^\p{L}\p{N}]+/gu;

/**
 * Normalize text into a consistent format that other transformation functions can use.
 *
 * This is the foundation function used by all other case conversion libraries.
 * It handles word splitting, character stripping, and applies transformations
 * to create a normalized output.
 *
 * @param input - The string to normalize
 * @param options - Configuration options for the normalization
 * @returns The normalized string
 *
 * @example
 * ```typescript
 * noCase("helloWorld")           // "hello world"
 * noCase("user_profile_data")    // "user profile data"
 * noCase("XMLHttpRequest")       // "xml http request"
 * noCase("iPhone")               // "i phone"
 *
 * // With custom delimiter
 * noCase("hello world", { delimiter: "-" })  // "hello-world"
 *
 * // With custom transform
 * noCase("hello world", {
 *   transform: (word) => word.toUpperCase()
 * }) // "HELLO WORLD"
 * ```
 *
 * @public
 */
export function noCase(input: string, options: Options = {}): string {
  // Handle null/undefined inputs gracefully
  if (!input) return "";

  const {
    splitRegexp = DEFAULT_SPLIT_REGEXP,
    stripRegexp = DEFAULT_STRIP_REGEXP,
    transform = lowerCase,
    delimiter = " ",
  } = options;

  const result = replace(
    replace(input, splitRegexp, "$1\0$2"),
    stripRegexp,
    "\0",
  );
  let start = 0;
  let end = result.length;

  // Trim the delimiter from around the output string.
  while (result.charAt(start) === "\0") start++;
  while (result.charAt(end - 1) === "\0") end--;

  // Transform each token independently.
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}

/**
 * Replace pattern(s) in the input string with the replacement value.
 * Supports both single RegExp and arrays of RegExp patterns.
 *
 * @param input - The string to perform replacements on
 * @param re - Single RegExp or array of RegExp patterns to match
 * @param value - The replacement value
 * @returns The string with all patterns replaced
 *
 * @internal
 */
function replace(input: string, re: RegExp | RegExp[], value: string): string {
  if (re instanceof RegExp) return input.replace(re, value);
  return re.reduce((result, pattern) => result.replace(pattern, value), input);
}
