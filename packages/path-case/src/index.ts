import { dotCase, Options } from "text-dot-case";

export { Options };

export function pathCase(input: string, options: Options = {}) {
  return dotCase(input, {
    delimiter: "/",
    ...options,
  });
}
