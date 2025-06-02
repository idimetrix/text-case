import { dotCase, Options } from "text-dot-case";

export { Options };

export function kebabCase(input: string, options: Options = {}) {
  // Handle null/undefined inputs gracefully
  if (input == null) return "";

  return dotCase(input, {
    delimiter: "-",
    ...options,
  });
}
