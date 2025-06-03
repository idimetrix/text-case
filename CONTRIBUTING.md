# Contributing to Text Case

🎉 First off, thank you for considering contributing to **Text Case**! Your time and effort are highly appreciated. This guide outlines the best practices and steps to contribute effectively to this modular TypeScript text transformation library.

---

## 🧭 About the Project

**Text Case** is a comprehensive, high-performance text case transformation library featuring a unique modular architecture with 21 individual packages. Each transformation is available as an independent npm module (100B-450B minified), enabling optimal tree-shaking and minimal bundle sizes.

- **Repository**: https://github.com/idimetrix/text-case
- **NPM Package**: https://www.npmjs.com/package/text-case
- **Documentation**: Individual package READMEs with comprehensive examples
- **License**: MIT

### Key Features

- 21 text transformation functions (camelCase, snake_case, kebab-case, etc.)
- Zero runtime dependencies
- Full TypeScript support with comprehensive type definitions
- 100% test coverage using Jest
- Cross-platform compatibility (Node.js 12+, modern browsers, serverless)
- Monorepo architecture with pnpm workspaces

---

## 💡 Ways to Contribute

- 🔧 **Bug Fixes**: Report or fix issues in existing transformations
- ✨ **New Features**: Add new case transformation functions
- 🧪 **Testing**: Improve test coverage or add edge case tests
- 📖 **Documentation**: Enhance README files, examples, or API documentation
- ⚡ **Performance**: Optimize transformation algorithms or bundle sizes
- 🌐 **Internationalization**: Improve Unicode and international character support
- 💬 **Community**: Participate in discussions and help other contributors

---

## 🛠️ Development Setup

### Prerequisites

- Node.js 12+ (recommended: Node.js 18+)
- pnpm (preferred package manager)

### 1. Fork and Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/text-case.git
cd text-case
```

### 2. Install Dependencies

We use `pnpm` for efficient workspace management:

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install all dependencies
pnpm install
```

### 3. Build All Packages

```bash
# Build all packages (CommonJS and ES2015)
pnpm build

# Build specific package
pnpm --filter text-camel-case build
```

### 4. Run Tests

```bash
# Run all tests across all packages
pnpm test

# Run tests with coverage
pnpm test --coverage

# Run tests for specific package
pnpm --filter text-camel-case test

# Run tests in watch mode during development
pnpm --filter text-camel-case test --watch
```

### 5. Type Checking and Linting

```bash
# Type check all packages
pnpm typecheck

# Type check in watch mode
pnpm typecheck:watch

# Format code with Prettier
pnpm format

# Lint with TSLint
pnpm --filter text-camel-case lint
```

---

## 📦 Repository Structure

```
text-case/
├── packages/                    # Individual transformation packages
│   ├── text-case/              # Main aggregate package
│   ├── camel-case/             # camelCase transformation
│   ├── pascal-case/            # PascalCase transformation
│   ├── snake-case/             # snake_case transformation
│   ├── kebab-case/             # kebab-case transformation
│   ├── title-case/             # Title Case transformation
│   ├── sentence-case/          # Sentence case transformation
│   ├── constant-case/          # CONSTANT_CASE transformation
│   ├── dot-case/               # dot.case transformation
│   ├── path-case/              # path/case transformation
│   ├── header-case/            # Header-Case transformation
│   ├── capital-case/           # Capital Case transformation
│   ├── no-case/                # no case transformation
│   ├── param-case/             # param-case transformation
│   ├── upper-case/             # UPPER CASE transformation
│   ├── lower-case/             # lower case transformation
│   ├── upper-case-first/       # Upper case first transformation
│   ├── lower-case-first/       # lower case first transformation
│   ├── swap-case/              # sWaP cAsE transformation
│   ├── is-upper-case/          # UPPER CASE validation
│   └── is-lower-case/          # lower case validation
├── paper.md                    # JOSS academic paper
├── references.bib              # Bibliography for paper
├── CITATION.cff                # Citation metadata
├── CONTRIBUTING.md             # This file
├── README.md                   # Main project documentation
├── package.json                # Root package configuration
├── pnpm-workspace.yaml         # pnpm workspace configuration
├── lerna.json                  # Lerna monorepo configuration
├── tsconfig.base.json          # Base TypeScript configuration
├── tsconfig.json               # Root TypeScript configuration
└── LICENSE                     # MIT license
```

### Individual Package Structure

Each package follows a consistent structure:

```
packages/[package-name]/
├── src/
│   ├── index.ts                # Main implementation
│   └── index.spec.ts           # Jest test suite
├── dist/                       # CommonJS build output
├── dist.es2015/               # ES2015 build output
├── coverage/                   # Test coverage reports
├── package.json               # Package-specific configuration
├── README.md                  # Package documentation
├── LICENSE                    # MIT license
├── tsconfig.json              # TypeScript config
├── tsconfig.es2015.json       # ES2015 TypeScript config
└── tslint.json               # TSLint configuration
```

---

## 🧪 Testing Guidelines

We use **Jest** as our testing framework with comprehensive test coverage requirements.

### Test Requirements

Each transformation function must include tests covering:

- ✅ **Basic transformations**: Standard input/output pairs
- 🔤 **Edge cases**: Empty strings, single characters, special characters
- 🌐 **Unicode support**: Accented characters, non-Latin scripts
- 📊 **Performance**: Large string handling (>10KB inputs)
- ⚙️ **Custom options**: splitRegexp, stripRegexp, transform functions
- 🔀 **Mixed formats**: Inputs with multiple case conventions
- 🚫 **Error handling**: null, undefined, and invalid inputs

### Test Structure Example

```typescript
// packages/camel-case/src/index.spec.ts
import { camelCase } from ".";

const TEST_CASES: [string, string, Options?][] = [
  // Basic transformations
  ["", ""],
  ["hello world", "helloWorld"],
  ["Hello World", "helloWorld"],

  // Edge cases
  ["XMLHttpRequest", "xmlHttpRequest"],
  ["user_profile_data", "userProfileData"],

  // Unicode support
  ["café_münü", "caféMünü"],

  // Custom options
  [
    "api-v2-endpoint",
    "APIV2Endpoint",
    {
      transform: (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase(),
    },
  ],
];

describe("camelCase", () => {
  TEST_CASES.forEach(([input, expected, options]) => {
    it(`should transform "${input}" to "${expected}"`, () => {
      expect(camelCase(input, options)).toBe(expected);
    });
  });
});
```

### Running Tests

```bash
# Full test suite (all packages)
pnpm test

# Specific package tests
pnpm --filter text-camel-case test

# Watch mode for development
pnpm --filter text-camel-case test --watch

# Coverage reports
pnpm --filter text-camel-case test --coverage
```

---

## 🎯 Code Guidelines

### TypeScript Standards

- **Type Safety**: All functions must have explicit TypeScript types
- **Interface Design**: Use consistent `Options` interface across packages
- **Pure Functions**: All transformations should be pure (no side effects)
- **Error Handling**: Gracefully handle null/undefined inputs
- **Performance**: Optimize for common use cases and large inputs

### API Design Principles

```typescript
// Consistent function signature across all packages
export function transformCase(input: string, options: Options = {}): string;

// Standard Options interface
export interface Options {
  splitRegexp?: RegExp;
  stripRegexp?: RegExp;
  transform?: (word: string, index: number, words: string[]) => string;
  split?: (value: string) => string[];
  delimiter?: string;
}
```

### Code Quality Requirements

- **Zero Dependencies**: No runtime dependencies allowed
- **Tree-Shakeable**: Use named exports, avoid default exports
- **Documentation**: JSDoc comments for all public functions
- **Size Optimization**: Individual packages should be <500B minified
- **Browser Compatibility**: Support modern browsers (ES2015+)

---

## 📤 Pull Request Process

### 1. Create a Feature Branch

```bash
git checkout -b feature/new-transformation
# or
git checkout -b fix/unicode-handling
# or
git checkout -b docs/improve-readme
```

### 2. Development Workflow

1. Make your changes
2. Add/update tests (maintain 100% coverage)
3. Update documentation if needed
4. Ensure all checks pass:

```bash
pnpm build          # Build all packages
pnpm test           # Run all tests
pnpm typecheck      # Type checking
pnpm format         # Code formatting
```

### 3. Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add new text-train-case transformation
fix: handle unicode characters in titleCase
docs: improve API documentation for camelCase
test: add edge cases for snake_case transformation
perf: optimize regexp compilation in core engine
refactor: simplify transformation logic
```

### 4. Submit Pull Request

1. Push your branch to your fork
2. Open a PR against the `main` branch
3. Fill out the PR template with:
   - Clear description of changes
   - Test coverage information
   - Breaking change notes (if any)
   - Related issue numbers

### 5. Code Review Process

- All PRs require review before merging
- Automated checks must pass (tests, linting, type checking)
- New packages require comprehensive documentation
- Performance regressions will be flagged for review

---

## 🚀 Release Process

Releases are managed using Lerna with conventional commits:

```bash
# Version bump and publish (maintainers only)
npx lerna version patch --yes --force-publish=*
npx lerna publish from-package --yes
```

---

## 📋 Adding a New Transformation

### Step-by-Step Guide

1. **Create Package Directory**

   ```bash
   mkdir packages/text-my-case
   cd packages/text-my-case
   ```

2. **Set Up Package Structure**

   ```bash
   mkdir src dist dist.es2015 coverage
   ```

3. **Create package.json**

   ```json
   {
     "name": "text-my-case",
     "version": "1.2.4",
     "description": "Transform text to my custom case",
     "main": "dist/index.js",
     "typings": "dist/index.d.ts",
     "module": "dist.es2015/index.js",
     "sideEffects": false,
     "scripts": {
       "build": "rimraf dist/ dist.es2015/ && tsc && tsc -P tsconfig.es2015.json",
       "test": "pnpm run build && pnpm run lint && pnpm run specs",
       "specs": "jest --coverage",
       "lint": "tslint \"src/**/*\" --project tsconfig.json",
       "typecheck": "tsc --noEmit"
     },
     "dependencies": {
       "text-pascal-case": "workspace:*"
     }
   }
   ```

4. **Implement the Transformation**

   ```typescript
   // src/index.ts
   import { pascalCase, Options } from "text-pascal-case";

   export { Options };

   export function myCase(input: string, options: Options = {}) {
     if (!input) return "";

     // Your transformation logic here
     return pascalCase(input, {
       delimiter: "-",
       transform: (word, index) => word.toLowerCase(),
       ...options,
     });
   }
   ```

5. **Add Comprehensive Tests**

   ```typescript
   // src/index.spec.ts
   import { myCase } from ".";

   const TEST_CASES: [string, string][] = [
     ["hello world", "hello-world"],
     ["HelloWorld", "hello-world"],
     // ... comprehensive test cases
   ];

   describe("myCase", () => {
     TEST_CASES.forEach(([input, expected]) => {
       it(`should transform "${input}" to "${expected}"`, () => {
         expect(myCase(input)).toBe(expected);
       });
     });
   });
   ```

6. **Create Documentation**

   ```markdown
   # Text My Case

   Transform text to my-custom-case format.

   ## Installation

   \`\`\`bash
   npm install text-my-case
   \`\`\`

   ## Usage

   \`\`\`typescript
   import { myCase } from "text-my-case";

   myCase("Hello World"); // "hello-world"
   \`\`\`
   ```

7. **Update Main Package**
   Add your transformation to `packages/text-case/src/index.ts`:
   ```typescript
   export { myCase } from "text-my-case";
   ```

---

## 🔍 Performance Considerations

### Optimization Guidelines

- **Regex Efficiency**: Compile regexes once, reuse them
- **Memory Management**: Avoid unnecessary string concatenations
- **Algorithm Complexity**: Aim for O(n) time complexity
- **Bundle Size**: Keep individual packages under 500B minified

### Performance Testing

```typescript
// Example performance test
describe("Performance", () => {
  it("should handle large inputs efficiently", () => {
    const largeInput = "test_string".repeat(10000);
    const start = performance.now();
    const result = camelCase(largeInput);
    const end = performance.now();

    expect(end - start).toBeLessThan(100); // <100ms
    expect(result).toBeDefined();
  });
});
```

---

## 📣 Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and community discussions
- **Email**: selikhov.dmitrey@gmail.com for security issues or direct contact
- **Documentation**: Individual package READMEs for specific questions

---

## 🔐 Security Policy

- Report security vulnerabilities privately via email
- Include detailed reproduction steps when possible
- Security fixes receive priority treatment
- We aim to acknowledge reports within 24-48 hours

---

## 📊 Project Statistics

- **21 packages** in the monorepo
- **100% test coverage** across all packages
- **516 test cases** for camelCase alone
- **Zero runtime dependencies**
- **Compatible** with Node.js 12+, modern browsers, and serverless environments

---

## 📝 License

All contributions to this project will be licensed under the MIT License. By contributing, you agree that your contributions will be licensed under the same terms.

---

## 🙏 Acknowledgments

Thank you for contributing to Text Case! Your efforts help maintain a high-quality, reliable library that benefits the entire JavaScript and TypeScript community.

For questions about this contribution guide, please open an issue or start a discussion.

**Happy coding!** 🚀

– Dmitry Selikhov
https://github.com/idimetrix
