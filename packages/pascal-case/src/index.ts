import { noCase, Options } from "text-no-case";

// Re-export Options interface for consumer convenience
export { Options };

/**
 * Transform function for PascalCase conversion.
 * Capitalizes the first letter of each word and handles numeric prefixes.
 *
 * @param input - The word/token to transform
 * @param index - The position of the word in the array (0-based)
 * @returns The transformed word in PascalCase format
 *
 * @example
 * ```typescript
 * pascalCaseTransform("hello", 0)  // "Hello"
 * pascalCaseTransform("world", 1)  // "World"
 * pascalCaseTransform("123test", 1) // "_123test" (numeric prefix handling)
 * ```
 */
export function pascalCaseTransform(input: string, index: number): string {
  const firstChar = input.charAt(0);
  const lowerChars = input.slice(1).toLowerCase(); // Use slice instead of deprecated substr

  // Handle numeric prefixes by adding underscore for non-first words
  if (index > 0 && firstChar >= "0" && firstChar <= "9") {
    return `_${firstChar}${lowerChars}`;
  }

  return `${firstChar.toUpperCase()}${lowerChars}`;
}

/**
 * Transform function for PascalCase conversion with simple capitalization.
 * Capitalizes first letter and lowercases the rest without special numeric handling.
 *
 * @param input - The word/token to transform
 * @returns The transformed word with simple capitalization
 *
 * @example
 * ```typescript
 * pascalCaseTransformMerge("hello")    // "Hello"
 * pascalCaseTransformMerge("WORLD")    // "World"
 * pascalCaseTransformMerge("123test")  // "123test"
 * ```
 */
export function pascalCaseTransformMerge(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

/**
 * Convert a string to PascalCase format.
 *
 * PascalCase is a naming convention where the first letter of each word
 * is capitalized and there are no separators between words. Also known
 * as UpperCamelCase.
 *
 * @param input - The string to convert to PascalCase
 * @param options - Optional configuration for the conversion
 * @returns The PascalCase formatted string
 *
 * @example
 * ```typescript
 * pascalCase("hello world")        // "HelloWorld"
 * pascalCase("user_profile_data")  // "UserProfileData"
 * pascalCase("background-color")   // "BackgroundColor"
 * pascalCase("xml-http-request")   // "XmlHttpRequest"
 *
 * // With custom options
 * pascalCase("version 1.2.3", {
 *   transform: pascalCaseTransformMerge
 * }) // "Version123"
 * ```
 *
 * @public
 */
export function pascalCase(input: string, options: Options = {}): string {
  // Handle null/undefined inputs gracefully
  if (!input) return "";

  return noCase(input, {
    delimiter: "",
    transform: pascalCaseTransform,
    ...options,
  });
}
