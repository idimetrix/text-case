import { noCase, Options } from "text-no-case";
import { upperCaseFirst } from "text-upper-case-first";

export { Options };

export function sentenceCaseTransform(input: string, index: number) {
  const result = input.toLowerCase();
  if (index === 0) return upperCaseFirst(result);
  return result;
}

export function sentenceCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: " ",
    transform: sentenceCaseTransform,
    ...options
  });
}
