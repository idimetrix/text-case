# Lower Case First

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text by making the first character lowercase while keeping the rest unchanged.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-lower-case-first

# yarn
yarn add text-lower-case-first

# pnpm
pnpm add text-lower-case-first

# bun
bun add text-lower-case-first
```

## Usage

### ES Modules (Recommended)

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

console.log(lowerCaseFirst("Hello World")); // "hello World"
```

### CommonJS

```javascript
const { lowerCaseFirst } = require("text-lower-case-first");

console.log(lowerCaseFirst("Hello World")); // "hello World"
```

### TypeScript

```typescript
import { lowerCaseFirst } from "text-lower-case-first";

const result: string = lowerCaseFirst("Hello World");
console.log(result); // "hello World"
```

## Examples

### Basic Usage

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

// Simple transformations
lowerCaseFirst("Hello"); // "hello"
lowerCaseFirst("World"); // "world"
lowerCaseFirst("Hello World"); // "hello World"

// Already lowercase
lowerCaseFirst("hello"); // "hello"
lowerCaseFirst("hello world"); // "hello world"

// Mixed case
lowerCaseFirst("HELLo WoRLD"); // "hELLo WoRLD"
lowerCaseFirst("TEST"); // "tEST"

// Single character
lowerCaseFirst("A"); // "a"
lowerCaseFirst("a"); // "a"
```

### Real-world Examples

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

// Variable naming (camelCase style)
lowerCaseFirst("FirstName"); // "firstName"
lowerCaseFirst("LastName"); // "lastName"
lowerCaseFirst("EmailAddress"); // "emailAddress"

// JSON property names
lowerCaseFirst("UserProfile"); // "userProfile"
lowerCaseFirst("ApiResponse"); // "apiResponse"
lowerCaseFirst("DatabaseConnection"); // "databaseConnection"

// CSS property names
lowerCaseFirst("BackgroundColor"); // "backgroundColor"
lowerCaseFirst("FontSize"); // "fontSize"
lowerCaseFirst("MarginTop"); // "marginTop"

// Function names
lowerCaseFirst("GetUserData"); // "getUserData"
lowerCaseFirst("ValidateInput"); // "validateInput"
lowerCaseFirst("ProcessPayment"); // "processPayment"
```

### Programming Examples

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

// Class names to instance names
lowerCaseFirst("UserService"); // "userService"
lowerCaseFirst("PaymentGateway"); // "paymentGateway"
lowerCaseFirst("DatabaseManager"); // "databaseManager"

// Method names
lowerCaseFirst("Initialize"); // "initialize"
lowerCaseFirst("Execute"); // "execute"
lowerCaseFirst("Terminate"); // "terminate"

// Property names
lowerCaseFirst("IsActive"); // "isActive"
lowerCaseFirst("HasPermission"); // "hasPermission"
lowerCaseFirst("CanEdit"); // "canEdit"

// Event names
lowerCaseFirst("OnClick"); // "onClick"
lowerCaseFirst("OnSubmit"); // "onSubmit"
lowerCaseFirst("OnLoad"); // "onLoad"
```

### API and Configuration Examples

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

// API endpoint names
lowerCaseFirst("GetUsers"); // "getUsers"
lowerCaseFirst("CreateUser"); // "createUser"
lowerCaseFirst("UpdateProfile"); // "updateProfile"
lowerCaseFirst("DeleteAccount"); // "deleteAccount"

// Configuration keys
lowerCaseFirst("ServerPort"); // "serverPort"
lowerCaseFirst("DatabaseUrl"); // "databaseUrl"
lowerCaseFirst("ApiSecretKey"); // "apiSecretKey"

// Component props
lowerCaseFirst("ShowHeader"); // "showHeader"
lowerCaseFirst("AllowEdit"); // "allowEdit"
lowerCaseFirst("AutoSave"); // "autoSave"

// State variables
lowerCaseFirst("IsLoading"); // "isLoading"
lowerCaseFirst("HasError"); // "hasError"
lowerCaseFirst("UserData"); // "userData"
```

### Edge Cases

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

// Empty and whitespace
lowerCaseFirst(""); // ""
lowerCaseFirst(" "); // " "
lowerCaseFirst("  Hello"); // "  Hello"

// Numbers and symbols
lowerCaseFirst("123ABC"); // "123ABC"
lowerCaseFirst("!Important"); // "!Important"
lowerCaseFirst("@Username"); // "@Username"

// Unicode characters
lowerCaseFirst("Élégant"); // "élégant"
lowerCaseFirst("Naïve"); // "naïve"
lowerCaseFirst("Résumé"); // "résumé"

// Acronyms
lowerCaseFirst("API"); // "aPI"
lowerCaseFirst("URL"); // "uRL"
lowerCaseFirst("JSON"); // "jSON"
```

### Framework Integration Examples

```javascript
import { lowerCaseFirst } from "text-lower-case-first";

// React component props
lowerCaseFirst("ClassName"); // "className"
lowerCaseFirst("OnClick"); // "onClick"
lowerCaseFirst("DefaultValue"); // "defaultValue"

// Vue.js properties
lowerCaseFirst("VModel"); // "vModel"
lowerCaseFirst("VShow"); // "vShow"
lowerCaseFirst("VIf"); // "vIf"

// Angular directives
lowerCaseFirst("NgIf"); // "ngIf"
lowerCaseFirst("NgFor"); // "ngFor"
lowerCaseFirst("NgModel"); // "ngModel"
```

## API

### `lowerCaseFirst(input)`

Makes the first character of a string lowercase.

#### Parameters

- `input` (`string`): The string to transform

#### Returns

- `string`: The string with first character lowercased

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

- **Minified**: ~130 B
- **Gzipped**: ~90 B
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

- [`text-upper-case-first`](../upper-case-first) - Uppercase first character
- [`text-upper-case`](../upper-case) - Convert to UPPERCASE
- [`text-lower-case`](../lower-case) - Convert to lowercase
- [`text-camel-case`](../camel-case) - Convert to camelCase

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

[npm-image]: https://img.shields.io/npm/v/text-lower-case-first.svg?style=flat
[npm-url]: https://npmjs.org/package/text-lower-case-first
[downloads-image]: https://img.shields.io/npm/dm/text-lower-case-first.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-lower-case-first
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-lower-case-first.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-lower-case-first
