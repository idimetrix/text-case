import {
  pascalCase,
  pascalCaseTransform,
  pascalCaseTransformMerge,
  Options,
} from "text-pascal-case";

// Re-export Options interface for consumer convenience
export { Options };

/**
 * Transform function for camelCase conversion.
 * Converts the first word to lowercase, subsequent words to PascalCase.
 *
 * @param input - The word/token to transform
 * @param index - The position of the word in the array (0-based)
 * @returns The transformed word
 *
 * @example
 * ```typescript
 * camelCaseTransform("hello", 0) // "hello"
 * camelCaseTransform("world", 1) // "World"
 * ```
 */
export function camelCaseTransform(input: string, index: number): string {
  if (index === 0) return input.toLowerCase();
  return pascalCaseTransform(input, index);
}

/**
 * Transform function for camelCase conversion with number merging.
 * Merges numeric characters without separators while maintaining camelCase for text.
 *
 * @param input - The word/token to transform
 * @param index - The position of the word in the array (0-based)
 * @returns The transformed word with merged numbers
 *
 * @example
 * ```typescript
 * camelCaseTransformMerge("version", 0) // "version"
 * camelCaseTransformMerge("1", 1)       // "1" (merged)
 * camelCaseTransformMerge("2", 2)       // "2" (merged)
 * ```
 */
export function camelCaseTransformMerge(input: string, index: number): string {
  if (index === 0) return input.toLowerCase();
  return pascalCaseTransformMerge(input);
}

/**
 * Convert a string to camelCase format.
 *
 * camelCase is a naming convention where the first letter is lowercase
 * and the first letter of each subsequent word is capitalized, with no
 * separators between words.
 *
 * @param input - The string to convert to camelCase
 * @param options - Optional configuration for the conversion
 * @returns The camelCase formatted string
 *
 * @example
 * ```typescript
 * camelCase("hello world")        // "helloWorld"
 * camelCase("user_profile_data")  // "userProfileData"
 * camelCase("background-color")   // "backgroundColor"
 * camelCase("XMLHttpRequest")     // "xmlHttpRequest"
 *
 * // With custom options
 * camelCase("version 1.2.3", {
 *   transform: camelCaseTransformMerge
 * }) // "version123"
 * ```
 *
 * @public
 */
export function camelCase(input: string, options: Options = {}): string {
  // Handle null/undefined inputs gracefully
  if (!input) return "";

  return pascalCase(input, {
    transform: camelCaseTransform,
    ...options,
  });
}
