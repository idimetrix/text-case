import { noCase, Options } from "text-no-case";
import { upperCaseFirst } from "text-upper-case-first";

export { Options };

function capitalCaseTransform(input: string, index: number) {
  // Convert to lowercase first, then capitalize first letter
  return upperCaseFirst(input.toLowerCase());
}

export function capitalCase(input: string, options: Options = {}) {
  // Handle null/undefined inputs gracefully
  if (!input) return "";

  return noCase(input, {
    delimiter: " ",
    transform: capitalCaseTransform,
    ...options,
  });
}
