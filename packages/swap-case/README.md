# Swap Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Transform text by swapping the case of each character - uppercase becomes lowercase and vice versa.

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install text-swap-case

# yarn
yarn add text-swap-case

# pnpm
pnpm add text-swap-case

# bun
bun add text-swap-case
```

## Usage

### ES Modules (Recommended)

```javascript
import { swapCase } from "text-swap-case";

console.log(swapCase("Hello World")); // "hELLO wORLD"
```

### CommonJS

```javascript
const { swapCase } = require("text-swap-case");

console.log(swapCase("Hello World")); // "hELLO wORLD"
```

### TypeScript

```typescript
import { swapCase } from "text-swap-case";

const result: string = swapCase("Hello World");
console.log(result); // "hELLO wORLD"
```

## Examples

### Basic Usage

```javascript
import { swapCase } from "text-swap-case";

// Simple transformations
swapCase("Hello"); // "hELLO"
swapCase("WORLD"); // "world"
swapCase("Hello World"); // "hELLO wORLD"

// Mixed case
swapCase("HeLLo WoRLd"); // "hEllO wOrlD"
swapCase("tEsT"); // "TeSt"

// Single characters
swapCase("a"); // "A"
swapCase("A"); // "a"

// Numbers and symbols (unchanged)
swapCase("Hello123"); // "hELLO123"
swapCase("Test!@#"); // "tEST!@#"
```

### Text Processing Examples

```javascript
import { swapCase } from "text-swap-case";

// Creating emphasis or artistic text
swapCase("JavaScript"); // "jAVAsCRIPT"
swapCase("TypeScript"); // "tYPEsCRIPT"
swapCase("Programming"); // "pROGRAMMING"

// Text obfuscation
swapCase("SecretPassword"); // "sECRETpASSWORD"
swapCase("HiddenMessage"); // "hIDDENmESSAGE"

// Creating alternating patterns
swapCase("AlTeRnAtInG"); // "aLtErNaTiNg"
swapCase("PaTtErN"); // "pAtTeRn"
```

### Real-world Examples

```javascript
import { swapCase } from "text-swap-case";

// Logo or brand styling
swapCase("MyCompany"); // "mYcOMPANY"
swapCase("BrandName"); // "bRANDnAME"

// Game text effects
swapCase("GameOver"); // "gAMEoVER"
swapCase("LevelUp"); // "lEVELuP"
swapCase("PowerUp"); // "pOWERuP"

// Creative usernames
swapCase("CoolUser"); // "cOOLuSER"
swapCase("ProGamer"); // "pROgAMER"

// Artistic text display
swapCase("WelcomeToOurSite"); // "wELCOMEtOoURsITE"
swapCase("SpecialOffer"); // "sPECIALoFFER"
```

### Programming Examples

```javascript
import { swapCase } from "text-swap-case";

// Variable names
swapCase("firstName"); // "FIRSTnAME"
swapCase("lastName"); // "LASTnAME"
swapCase("emailAddress"); // "EMAILaDDRESS"

// Function names
swapCase("getUserData"); // "GETuSERdATA"
swapCase("validateInput"); // "VALIDATEiNPUT"
swapCase("processPayment"); // "PROCESSPAYMENt"

// Class names
swapCase("UserService"); // "uSERsERVICE"
swapCase("PaymentGateway"); // "pAYMENTgATEWAY"
swapCase("DatabaseManager"); // "dATABASEmANAGER"

// Constants
swapCase("API_KEY"); // "api_key"
swapCase("BASE_URL"); // "base_url"
swapCase("MAX_RETRIES"); // "max_retries"
```

### Special Characters and Unicode

```javascript
import { swapCase } from "text-swap-case";

// Unicode characters
swapCase("Café"); // "cAFÉ"
swapCase("Naïve"); // "nAÏVE"
swapCase("Résumé"); // "rÉSUMÉ"

// Mixed content
swapCase("Hello123World"); // "hELLO123wORLD"
swapCase("Test@Email.com"); // "tEST@eMAIL.COM"
swapCase("File_Name.txt"); // "fILE_nAME.TXT"

// Punctuation (unchanged)
swapCase("Hello, World!"); // "hELLO, wORLD!"
swapCase("Yes? No!"); // "yES? nO!"
```

### Edge Cases

```javascript
import { swapCase } from "text-swap-case";

// Empty and whitespace
swapCase(""); // ""
swapCase(" "); // " "
swapCase("   "); // "   "

// Only numbers
swapCase("123456"); // "123456"
swapCase("3.14159"); // "3.14159"

// Only symbols
swapCase("!@#$%"); // "!@#$%"
swapCase("()[]{}"); // "()[]{})"

// Mixed symbols and letters
swapCase("A!b@C#"); // "a!B@c#"
```

### Creative Applications

```javascript
import { swapCase } from "text-swap-case";

// Alternating headers
swapCase("ChApTeR oNe"); // "cHaPtEr OnE"
swapCase("SeCtIoN tWo"); // "sEcTiOn TwO"

// Stylized buttons
swapCase("CliCk HeRe"); // "cLIcK hErE"
swapCase("DoWnLoAd NoW"); // "dOwNlOaD nOw"

// Gaming elements
swapCase("EnTeR nAmE"); // "eNtEr NaMe"
swapCase("PlAyEr OnE"); // "pLaYeR oNe"

// Social media style
swapCase("fOlLoW mE"); // "FoLlOw Me"
swapCase("lIkE aNd ShArE"); // "LiKe AnD sHaRe"
```

## API

### `swapCase(input)`

Swaps the case of each character in a string.

#### Parameters

- `input` (`string`): The string to transform

#### Returns

- `string`: The string with character cases swapped

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

- **Minified**: ~140 B
- **Gzipped**: ~95 B
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

- [`text-upper-case`](../upper-case) - Convert to UPPERCASE
- [`text-lower-case`](../lower-case) - Convert to lowercase
- [`text-upper-case-first`](../upper-case-first) - Uppercase first character
- [`text-lower-case-first`](../lower-case-first) - Lowercase first character

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

[npm-image]: https://img.shields.io/npm/v/text-swap-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-swap-case
[downloads-image]: https://img.shields.io/npm/dm/text-swap-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-swap-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-swap-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-swap-case
