import { noCase, Options } from "text-no-case";

export { Options };

export function dotCase(input: string, options: Options = {}) {
  // Handle null/undefined inputs gracefully
  if (!input) return "";

  return noCase(input, {
    delimiter: ".",
    ...options,
  });
}
