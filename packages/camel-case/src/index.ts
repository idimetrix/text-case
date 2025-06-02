import {
  pascalCase,
  pascalCaseTransform,
  pascalCaseTransformMerge,
  Options,
} from "text-pascal-case";

export { Options };

export function camelCaseTransform(input: string, index: number) {
  if (index === 0) return input.toLowerCase();
  return pascalCaseTransform(input, index);
}

export function camelCaseTransformMerge(input: string, index: number) {
  if (index === 0) return input.toLowerCase();
  return pascalCaseTransformMerge(input);
}

export function camelCase(input: string, options: Options = {}) {
  // Handle null/undefined inputs gracefully
  if (!input) return "";

  return pascalCase(input, {
    transform: camelCaseTransform,
    ...options,
  });
}
