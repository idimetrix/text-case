import { noCase, Options } from "text-no-case";
import { upperCaseFirst } from "text-upper-case-first";

export { Options };

export function capitalCaseTransform(input: string) {
  return upperCaseFirst(input.toLowerCase());
}

export function capitalCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: " ",
    transform: capitalCaseTransform,
    ...options
  });
}
