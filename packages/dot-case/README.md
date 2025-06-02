# Dot Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text into dot.case format - lowercase words separated by dots.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-dot-case

# yarn
yarn add text-dot-case

# pnpm
pnpm add text-dot-case

# bun
bun add text-dot-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { dotCase } from "text-dot-case";

console.log(dotCase("Hello World")); // "hello.world"
```

### CommonJS

```javascript
const { dotCase } = require("text-dot-case");

console.log(dotCase("Hello World")); // "hello.world"
```

### TypeScript

```typescript
import { dotCase } from "text-dot-case";

const result: string = dotCase("Hello World");
console.log(result); // "hello.world"
```

## Examples

### Basic Usage

```javascript
import { dotCase } from "text-dot-case";

// From different cases
dotCase("Hello World");               // "hello.world"
dotCase("helloWorld");                // "hello.world"
dotCase("HelloWorld");                // "hello.world"
dotCase("hello_world");               // "hello.world"
dotCase("hello-world");               // "hello.world"
dotCase("HELLO_WORLD");               // "hello.world"
```

### Complex Examples

```javascript
import { dotCase } from "text-dot-case";

// Mixed cases and numbers
dotCase("XMLParser");                 // "xml.parser"
dotCase("iPhone6Plus");               // "i.phone6.plus"
dotCase("HTML5Canvas");               // "html5.canvas"
dotCase("getUserID");                 // "get.user.id"

// With symbols and spaces
dotCase("hello, world!");             // "hello.world"
dotCase("Hello & World");             // "hello.world"
dotCase("test@example.com");          // "test.example.com"
dotCase("user-name_123");             // "user.name.123"
```

### Real-world Applications

```javascript
import { dotCase } from "text-dot-case";

// Object property names
const apiResponse = {
  "First Name": "John",
  "Last_Name": "Doe",
  "emailAddress": "john@example.com"
};

const normalized = Object.keys(apiResponse).reduce((acc, key) => {
  acc[dotCase(key)] = apiResponse[key];
  return acc;
}, {});
// { "first.name": "John", "last.name": "Doe", "email.address": "john@example.com" }

// Configuration keys
dotCase("DATABASE_HOST");             // "database.host"
dotCase("apiSecretKey");              // "api.secret.key"
dotCase("maxRetryAttempts");          // "max.retry.attempts"

// File naming
dotCase("UserProfile");               // "user.profile"
dotCase("ShoppingCart");              // "shopping.cart"
dotCase("PaymentGateway");            // "payment.gateway"
```

### Advanced Options

```javascript
import { dotCase } from "text-dot-case";

// Custom separators
dotCase("hello@world#test", {
  separateNumbers: false
});                                   // "hello.world.test"

// Preserve certain patterns
dotCase("API_VERSION_2_1", {
  splitRegexp: /([a-z])([A-Z])/g
});                                   // "api.version.2.1"
```

### Programming Examples

```javascript
import { dotCase } from "text-dot-case";

// Class names to dot notation
const classNames = ["UserService", "PaymentProcessor", "EmailValidator"];
const dotNotation = classNames.map(dotCase);
// ["user.service", "payment.processor", "email.validator"]

// Method names
dotCase("getUserById");               // "get.user.by.id"
dotCase("calculateTotalPrice");       // "calculate.total.price"
dotCase("validateEmailAddress");      // "validate.email.address"

// Constants
dotCase("MAX_FILE_SIZE");             // "max.file.size"
dotCase("DEFAULT_TIMEOUT");           // "default.timeout"
dotCase("ERROR_MESSAGES");            // "error.messages"
```

### Data Processing

```javascript
import { dotCase } from "text-dot-case";

// Transform form data
function normalizeFormData(formData) {
  const normalized = {};

  for (const [key, value] of Object.entries(formData)) {
    normalized[dotCase(key)] = value;
  }

  return normalized;
}

const form = {
  "firstName": "John",
  "lastName": "Doe",
  "emailAddress": "john@example.com",
  "phoneNumber": "+1234567890"
};

normalizeFormData(form);
// {
//   "first.name": "John",
//   "last.name": "Doe",
//   "email.address": "john@example.com",
//   "phone.number": "+1234567890"
// }

// Database column mapping
function createColumnMapping(schema) {
  return schema.map(column => ({
    original: column,
    dotCase: dotCase(column)
  }));
}

createColumnMapping(["userId", "createdAt", "lastLoginTime"]);
// [
//   { original: "userId", dotCase: "user.id" },
//   { original: "createdAt", dotCase: "created.at" },
//   { original: "lastLoginTime", dotCase: "last.login.time" }
// ]
```

### Framework Integration

```javascript
import { dotCase } from "text-dot-case";

// React props transformation
function transformProps(props) {
  const transformed = {};

  Object.keys(props).forEach(key => {
    transformed[dotCase(key)] = props[key];
  });

  return transformed;
}

// Vue.js data normalization
const vueData = {
  userName: "john",
  isLoggedIn: true,
  shoppingCartItems: []
};

const normalized = Object.keys(vueData).reduce((acc, key) => {
  acc[dotCase(key)] = vueData[key];
  return acc;
}, {});
// { "user.name": "john", "is.logged.in": true, "shopping.cart.items": [] }

// Angular service names
dotCase("UserAuthService");           // "user.auth.service"
dotCase("HttpInterceptor");           // "http.interceptor"
dotCase("RouteGuard");                // "route.guard"
```

### Utility Functions

```javascript
import { dotCase } from "text-dot-case";

// Batch transformation
function transformKeys(obj, transformer = dotCase) {
  if (Array.isArray(obj)) {
    return obj.map(item => transformKeys(item, transformer));
  }

  if (obj !== null && typeof obj === 'object') {
    const transformed = {};

    Object.keys(obj).forEach(key => {
      transformed[transformer(key)] = transformKeys(obj[key], transformer);
    });

    return transformed;
  }

  return obj;
}

const nestedData = {
  userInfo: {
    firstName: "John",
    lastLoginDate: "2023-01-01"
  },
  accountSettings: {
    emailNotifications: true,
    twoFactorAuth: false
  }
};

transformKeys(nestedData);
// {
//   "user.info": {
//     "first.name": "John",
//     "last.login.date": "2023-01-01"
//   },
//   "account.settings": {
//     "email.notifications": true,
//     "two.factor.auth": false
//   }
// }

// Path generation
function generatePath(...segments) {
  return segments.map(dotCase).join('.');
}

generatePath("user", "profile", "settings"); // "user.profile.settings"
generatePath("API", "version", "2.0");       // "api.version.2.0"
```

### Edge Cases

```javascript
import { dotCase } from "text-dot-case";

// Empty and special inputs
dotCase("");                          // ""
dotCase(" ");                         // ""
dotCase("   ");                       // ""

// Numbers and symbols only
dotCase("123");                       // "123"
dotCase("@#$");                       // ""
dotCase("123abc");                    // "123.abc"

// Single words
dotCase("hello");                     // "hello"
dotCase("HELLO");                     // "hello"
dotCase("Hello");                     // "hello"

// Already dot case
dotCase("hello.world");               // "hello.world"
dotCase("user.name.here");            // "user.name.here"
```

## API

### `dotCase(input, options?)`

Transforms a string into dot.case format.

#### Parameters

- `input` (`string`): The string to transform
- `options` (`object`, optional): Transformation options
  - `separateNumbers` (`boolean`): Whether to separate numbers. Default: `true`
  - `stripRegexp` (`RegExp`): Pattern for characters to remove
  - `splitRegexp` (`RegExp`): Pattern for splitting words

#### Returns

- `string`: The transformed string in dot.case format

#### Examples

```javascript
dotCase("HelloWorld");                // "hello.world"
dotCase("hello_world");               // "hello.world"
dotCase("HELLO-WORLD");               // "hello.world"
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
- [`text-path-case`](../path-case) - Transform to path/case

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

[npm-image]: https://img.shields.io/npm/v/text-dot-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-dot-case
[downloads-image]: https://img.shields.io/npm/dm/text-dot-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-dot-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-dot-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-dot-case
