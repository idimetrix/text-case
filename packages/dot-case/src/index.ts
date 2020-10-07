import { noCase, Options } from "text-no-case";

export { Options };

export function dotCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: ".",
    ...options,
  });
}
