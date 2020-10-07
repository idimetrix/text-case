import { capitalCase, Options } from "text-capital-case";

export { Options };

export function headerCase(input: string, options: Options = {}) {
  return capitalCase(input, {
    delimiter: "-",
    ...options,
  });
}
