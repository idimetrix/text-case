import { dotCase, Options } from "text-dot-case";

export { Options };

export function paramCase(input: string, options: Options = {}) {
  // Handle null/undefined inputs gracefully
  if (!input) return "";

  return dotCase(input, {
    delimiter: "-",
    ...options,
  });
}
