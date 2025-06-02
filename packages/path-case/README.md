# Path Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into path/case format - lowercase words separated by forward slashes.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-path-case

# yarn
yarn add text-path-case

# pnpm
pnpm add text-path-case

# bun
bun add text-path-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { pathCase } from "text-path-case";

console.log(pathCase("Hello World")); // "hello/world"
```

### CommonJS

```javascript
const { pathCase } = require("text-path-case");

console.log(pathCase("Hello World")); // "hello/world"
```

### TypeScript

```typescript
import { pathCase } from "text-path-case";

const result: string = pathCase("Hello World");
console.log(result); // "hello/world"
```

## Examples

### Basic Usage

```javascript
import { pathCase } from "text-path-case";

// From different cases
pathCase("Hello World"); // "hello/world"
pathCase("helloWorld"); // "hello/world"
pathCase("HelloWorld"); // "hello/world"
pathCase("hello_world"); // "hello/world"
pathCase("hello-world"); // "hello/world"
pathCase("HELLO_WORLD"); // "hello/world"
```

### Complex Examples

```javascript
import { pathCase } from "text-path-case";

// Mixed cases and numbers
pathCase("XMLParser"); // "xml/parser"
pathCase("iPhone6Plus"); // "i/phone6/plus"
pathCase("HTML5Canvas"); // "html5/canvas"
pathCase("getUserID"); // "get/user/id"

// With symbols and spaces
pathCase("hello, world!"); // "hello/world"
pathCase("Hello & World"); // "hello/world"
pathCase("test@example.com"); // "test/example/com"
pathCase("user-name_123"); // "user/name/123"
```

### Real-world Applications

```javascript
import { pathCase } from "text-path-case";

// URL path generation
pathCase("User Profile"); // "user/profile"
pathCase("Shopping Cart"); // "shopping/cart"
pathCase("Payment Gateway"); // "payment/gateway"
pathCase("Admin Dashboard"); // "admin/dashboard"

// File system paths
pathCase("Component Library"); // "component/library"
pathCase("Shared Utils"); // "shared/utils"
pathCase("Test Fixtures"); // "test/fixtures"

// Route generation
pathCase("API Version 2"); // "api/version/2"
pathCase("User Settings"); // "user/settings"
pathCase("Order History"); // "order/history"
```

### Advanced Options

```javascript
import { pathCase } from "text-path-case";

// Custom separators
pathCase("hello@world#test", {
  separateNumbers: false,
}); // "hello/world/test"

// Preserve certain patterns
pathCase("API_VERSION_2_1", {
  splitRegexp: /([a-z])([A-Z])/g,
}); // "api/version/2/1"
```

### Web Development Examples

```javascript
import { pathCase } from "text-path-case";

// React Router paths
const routes = ["User Profile", "Shopping Cart", "Order History"];
const routePaths = routes.map((route) => `/${pathCase(route)}`);
// ["/user/profile", "/shopping/cart", "/order/history"]

// API endpoint generation
function createEndpoint(action, resource) {
  return `/api/${pathCase(resource)}/${pathCase(action)}`;
}

createEndpoint("getUserById", "User Management");
// "/api/user/management/get/user/by/id"

createEndpoint("updateProfile", "User Settings");
// "/api/user/settings/update/profile"

// File path generation
pathCase("Component Tests"); // "component/tests"
pathCase("Utility Functions"); // "utility/functions"
pathCase("Style Sheets"); // "style/sheets"
```

### Framework Integration

```javascript
import { pathCase } from "text-path-case";

// Next.js page routes
const pageNames = ["About Us", "Contact Form", "Privacy Policy"];
const pageRoutes = pageNames.map((name) => `/${pathCase(name)}`);
// ["/about/us", "/contact/form", "/privacy/policy"]

// Express.js route definitions
function defineRoute(name) {
  return `/${pathCase(name)}`;
}

defineRoute("User Dashboard"); // "/user/dashboard"
defineRoute("Admin Panel"); // "/admin/panel"
defineRoute("Settings Page"); // "/settings/page"

// Vue.js component paths
pathCase("Navigation Bar"); // "navigation/bar"
pathCase("Modal Dialog"); // "modal/dialog"
pathCase("Data Table"); // "data/table"
```

### Directory Structure Generation

```javascript
import { pathCase } from "text-path-case";

// Create directory paths
function createDirectoryPath(...segments) {
  return segments.map(pathCase).join("/");
}

createDirectoryPath("src", "Components", "UserInterface");
// "src/components/user/interface"

createDirectoryPath("tests", "Integration Tests", "API Endpoints");
// "tests/integration/tests/api/endpoints"

// Project structure
const projectStructure = [
  "Source Code",
  "Test Files",
  "Documentation",
  "Build Scripts",
];

projectStructure.map(pathCase);
// ["source/code", "test/files", "documentation", "build/scripts"]
```

### Asset Path Generation

```javascript
import { pathCase } from "text-path-case";

// Image paths
pathCase("User Avatar"); // "user/avatar"
pathCase("Product Images"); // "product/images"
pathCase("Icon Set"); // "icon/set"

// Static asset organization
function getAssetPath(category, name) {
  return `assets/${pathCase(category)}/${pathCase(name)}`;
}

getAssetPath("Images", "User Profiles");
// "assets/images/user/profiles"

getAssetPath("Styles", "Component Library");
// "assets/styles/component/library"

// CDN path generation
function generateCDNPath(version, module) {
  return `cdn/v${version}/${pathCase(module)}`;
}

generateCDNPath("2.1", "UI Components");
// "cdn/v2.1/ui/components"
```

### Configuration and Metadata

```javascript
import { pathCase } from "text-path-case";

// Configuration keys to paths
const configKeys = [
  "Database Connection",
  "Email Settings",
  "Cache Configuration",
  "Security Options",
];

const configPaths = configKeys.map((key) => `config/${pathCase(key)}`);
// [
//   "config/database/connection",
//   "config/email/settings",
//   "config/cache/configuration",
//   "config/security/options"
// ]

// Metadata organization
function organizeMetadata(items) {
  return items.reduce((acc, item) => {
    const path = pathCase(item.category);
    if (!acc[path]) acc[path] = [];
    acc[path].push(item);
    return acc;
  }, {});
}

// Internationalization paths
pathCase("User Interface"); // "user/interface"
pathCase("Error Messages"); // "error/messages"
pathCase("Button Labels"); // "button/labels"
```

### Build and Deployment Paths

```javascript
import { pathCase } from "text-path-case";

// Build output paths
pathCase("Distribution Files"); // "distribution/files"
pathCase("Minified Assets"); // "minified/assets"
pathCase("Source Maps"); // "source/maps"

// Deployment environments
const environments = ["Development", "Staging", "Production"];
const deployPaths = environments.map((env) => `deploy/${pathCase(env)}`);
// ["deploy/development", "deploy/staging", "deploy/production"]

// Docker container paths
pathCase("Application Code"); // "application/code"
pathCase("Configuration Files"); // "configuration/files"
pathCase("Log Directory"); // "log/directory"

// CI/CD pipeline paths
function createPipelinePath(stage, environment) {
  return `pipelines/${pathCase(stage)}/${pathCase(environment)}`;
}

createPipelinePath("Build Process", "Development");
// "pipelines/build/process/development"
```

### Edge Cases

```javascript
import { pathCase } from "text-path-case";

// Empty and special inputs
pathCase(""); // ""
pathCase(" "); // ""
pathCase("   "); // ""

// Numbers and symbols only
pathCase("123"); // "123"
pathCase("@#$"); // ""
pathCase("123abc"); // "123/abc"

// Single words
pathCase("hello"); // "hello"
pathCase("HELLO"); // "hello"
pathCase("Hello"); // "hello"

// Already path case
pathCase("hello/world"); // "hello/world"
pathCase("user/profile/settings"); // "user/profile/settings"

// Special characters
pathCase("hello.world"); // "hello/world"
pathCase("user@domain.com"); // "user/domain/com"
pathCase("version-2.1.0"); // "version/2/1/0"
```

### Utility Functions

```javascript
import { pathCase } from "text-path-case";

// Path manipulation
function joinPaths(...segments) {
  return segments
    .map((segment) => pathCase(segment))
    .filter(Boolean)
    .join("/");
}

joinPaths("User", "Profile", "Settings");
// "user/profile/settings"

// Path validation
function isValidPath(path) {
  const converted = pathCase(path);
  return converted.length > 0 && !converted.includes("//");
}

isValidPath("User Settings"); // true
isValidPath(""); // false
isValidPath("Valid Path"); // true

// Create breadcrumb paths
function createBreadcrumbs(path) {
  const segments = path.split("/").filter(Boolean);
  return segments.map((_, index) => segments.slice(0, index + 1).join("/"));
}

const pathString = pathCase("Admin User Management Settings");
createBreadcrumbs(pathString);
// ["admin", "admin/user", "admin/user/management", "admin/user/management/settings"]
```

## API

### `pathCase(input, options?)`

Transforms a string into path/case format.

#### Parameters

- `input` (`string`): The string to transform
- `options` (`object`, optional): Transformation options
  - `separateNumbers` (`boolean`): Whether to separate numbers. Default: `true`
  - `stripRegexp` (`RegExp`): Pattern for characters to remove
  - `splitRegexp` (`RegExp`): Pattern for splitting words

#### Returns

- `string`: The transformed string in path/case format

#### Examples

```javascript
pathCase("HelloWorld"); // "hello/world"
pathCase("hello_world"); // "hello/world"
pathCase("HELLO-WORLD"); // "hello/world"
```

## Development

### Type Checking

```bash
# Check types
pnpm typecheck

# Check types in watch mode
pnpm typecheck:watch
```

### Linting

```bash
# Run linter
pnpm lint

# Auto-fix linting issues
pnpm lint --fix
```

### Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

### Building

```bash
# Build the package
pnpm build

# Build and watch for changes
pnpm build --watch
```

## Bundle Size

This package is optimized for minimal bundle size:

- **Minified**: ~800 B
- **Gzipped**: ~400 B
- **Tree-shakeable**: Yes
- **Side effects**: None

## TypeScript Support

This package includes comprehensive TypeScript definitions and supports:

- Full type safety
- IntelliSense autocompletion
- Type inference
- Generic type parameters

## Browser Support

- **Modern browsers**: ES2015+
- **Node.js**: 12+
- **Bundle formats**: UMD, ESM, CommonJS

## Related Packages

- [`text-camel-case`](../camel-case) - Transform to camelCase
- [`text-pascal-case`](../pascal-case) - Transform to PascalCase
- [`text-kebab-case`](../kebab-case) - Transform to kebab-case
- [`text-snake-case`](../snake-case) - Transform to snake_case
- [`text-dot-case`](../dot-case) - Transform to dot.case

## License

[MIT](LICENSE)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

- 📧 Email: [selikhov.dmitrey@gmail.com](mailto:selikhov.dmitrey@gmail.com)
- 🐛 Issues: [GitHub Issues](https://github.com/idimetrix/text-case/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/idimetrix/text-case/discussions)

[npm-image]: https://img.shields.io/npm/v/text-path-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-path-case
[downloads-image]: https://img.shields.io/npm/dm/text-path-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-path-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-path-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-path-case
