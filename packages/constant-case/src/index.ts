import { noCase, Options } from "text-no-case";
import { upperCase } from "text-upper-case";

export { Options };

export function constantCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: "_",
    transform: upperCase,
    ...options,
  });
}
