---
title: "text-case: A Reusable Text Formatting Toolkit in TypeScript for Multi-Platform Applications"
tags:
  - TypeScript
  - text transformation
  - string utilities
  - JavaScript
  - open source
authors:
  - name: Dmitry Selikhov
    orcid: 0009-0007-2206-2711
    affiliation: Independent Researcher
date: 2025-06-03
bibliography: references.bib
---

# Summary

`text-case` is a comprehensive, reusable string transformation toolkit written in TypeScript, designed for multi-platform applications. It supports consistent text formatting across naming conventions such as `camelCase`, `snake_case`, `PascalCase`, `kebab-case`, `CONSTANT_CASE`, and more.

With growing adoption — approximately 4,000 weekly downloads — `text-case` addresses a significant developer need for a reliable, tree-shakable, type-safe, and platform-agnostic case transformation library. It works seamlessly in Node.js, browsers, and Deno environments, offering strong typing, modular imports, and zero runtime dependencies.

# Statement of Need

Many open source and commercial software projects require the normalization of textual data. Consistent casing is especially critical in use cases such as API response mapping, configuration parsing, code generation, and UI data transformation.

While tools like `change-case`, `lodash`, and `case` provide similar utilities, they typically suffer from one or more of the following issues:

- Lack of modular imports, increasing bundle size
- Incomplete TypeScript support
- Runtime dependencies
- Platform coupling or reliance on legacy APIs

`text-case` addresses all of these limitations. It is written from the ground up in TypeScript with ES module support and fine-grained package-level separation for optimal bundling and performance. Each transformation function is available as an individual package (e.g., `text-camel-case`, `text-snake-case`), or as part of the full `text-case` bundle.

# Features

- 21+ transformation functions for all common and edge-case formats
- Modular packages with tree-shakable builds
- Pure TypeScript implementation with rich type inference
- Runs on Node.js, modern browsers, and Deno
- Supports customizable transformation logic with user-defined rules
- Zero dependencies
- 100% test coverage using `vitest`

# Example Use

```ts
import { camelCase, snakeCase, pascalCase, titleCase } from "text-case";

const input = "user_profile_data";

camelCase(input); // "userProfileData"
snakeCase(input); // "user_profile_data"
pascalCase(input); // "UserProfileData"
titleCase(input); // "User Profile Data"
```

The toolkit is particularly useful in:

- Code generators that transform schema definitions to code
- API response normalization for front-end apps
- Automatic variable renaming in developer tools
- Text formatting pipelines in CMS and static site generators

# Repository and Installation

- **GitHub**: [https://github.com/idimetrix/text-case](https://github.com/idimetrix/text-case)
- **NPM**: [https://www.npmjs.com/package/text-case](https://www.npmjs.com/package/text-case)

Installation:

```bash
npm install text-case
```

Or install specific transformation packages:

```bash
npm install text-camel-case text-snake-case
```

Full documentation, including API references, test suite instructions, and contribution guidelines, is available in the [README](https://github.com/idimetrix/text-case#readme).

# Testing

The project includes a comprehensive test suite using `vitest`:

- Basic transformation scenarios
- Unicode and edge case handling
- Performance benchmarks
- Integration tests across transformation chains

To run all tests:

```bash
pnpm install
pnpm test
```

You can also run tests for individual packages using workspace filters:

```bash
pnpm --filter text-camel-case test
```

# Software and Author Metadata

- **Software Name**: text-case
- **Version**: 1.0.0
- **License**: MIT
- **Programming Language**: TypeScript
- **Development Status**: Production-ready
- **Keywords**: case transformation, TypeScript, JavaScript, utilities
- **Author**: Dmitry Selikhov
- **ORCID**: https://orcid.org/0009-0007-2206-2711
- **Repository**: https://github.com/idimetrix/text-case
- **NPM**: https://www.npmjs.com/package/text-case
- **Contact**: dmitrii.selikhov@gmail.com

# Acknowledgements

This project was independently developed and maintained by Dmitry Selikhov. It has received no external funding. Inspiration was drawn from libraries such as `change-case`, `lodash`, and `case`.

# References

- Lodash string utilities: https://lodash.com/
- change-case: https://github.com/blakeembrey/change-case
- case: https://github.com/sindresorhus/case
