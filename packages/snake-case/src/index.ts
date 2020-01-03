import { dotCase, Options } from "text-dot-case";

export { Options };

export function snakeCase(input: string, options: Options = {}) {
  return dotCase(input, {
    delimiter: "_",
    ...options
  });
}
