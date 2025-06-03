# Path Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

> Transform text to **path/case** format - lowercase words separated by forward slashes.

## 🚀 Features

- **Lightweight** - Only ~450B minified + gzipped
- **Type-safe** - Full TypeScript support with comprehensive type definitions
- **Zero dependencies** - No external dependencies
- **Tree-shakeable** - ES modules support
- **Universal** - Works in browsers, Node.js, and serverless environments
- **Well-tested** - Comprehensive test suite with edge cases
- **Customizable** - Support for custom transform functions and options

## 📦 Installation

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

## 🎯 Quick Start

```javascript
import { pathCase } from "text-path-case";

console.log(pathCase("hello world")); // "hello/world"
console.log(pathCase("camelCase")); // "camel/case"
console.log(pathCase("kebab-case")); // "kebab/case"
```

## 📖 Usage

### ES Modules (Recommended)

```javascript
import { pathCase } from "text-path-case";

console.log(pathCase("hello world")); // "hello/world"
```

### CommonJS

```javascript
const { pathCase } = require("text-path-case");

console.log(pathCase("hello world")); // "hello/world"
```

### TypeScript

```typescript
import { pathCase } from "text-path-case";

const result: string = pathCase("hello world");
console.log(result); // "hello/world"
```

## 🔄 Transformation Examples

### Basic Transformations

```javascript
import { pathCase } from "text-path-case";

// Simple cases
pathCase("hello world"); // "hello/world"
pathCase("Hello World"); // "hello/world"
pathCase("HELLO WORLD"); // "hello/world"

// From other cases
pathCase("camelCase"); // "camel/case"
pathCase("PascalCase"); // "pascal/case"
pathCase("snake_case"); // "snake/case"
pathCase("kebab-case"); // "kebab/case"
pathCase("dot.case"); // "dot/case"

// Complex examples
pathCase("XMLHttpRequest"); // "xml/http/request"
pathCase("iPhone"); // "i/phone"
pathCase("version 1.2.3"); // "version/1/2/3"
```

### Advanced Usage with Options

```javascript
import { pathCase } from "text-path-case";

// Custom transform function
pathCase("hello world", {
  transform: (word, index, words) => {
    // Custom transformation logic
    return word.toLowerCase();
  },
}); // "hello/world"

// Custom split regex
pathCase("hello-world_test", {
  splitRegexp: /[-_\s]+/,
}); // "hello/world/test"

// Strip specific characters
pathCase("hello@world#test", {
  stripRegexp: /[@#]/g,
}); // "hello/world/test"
```

## 🌍 Real-World Examples

### URL Path Generation

```javascript
import { pathCase } from "text-path-case";

// Generate URL paths from titles
pathCase("User Profile Settings"); // "user/profile/settings"
pathCase("API Documentation"); // "api/documentation"
pathCase("Getting Started Guide"); // "getting/started/guide"
pathCase("FAQ Section"); // "faq/section"
```

### File Path Construction

```javascript
import { pathCase } from "text-path-case";

function createFilePath(category, subcategory, filename) {
  const categoryPath = pathCase(category);
  const subcategoryPath = pathCase(subcategory);
  const filePath = pathCase(filename);

  return `${categoryPath}/${subcategoryPath}/${filePath}`;
}

console.log(createFilePath("User Data", "Profile Images", "Avatar Photo"));
// "user/data/profile/images/avatar/photo"

console.log(createFilePath("API Docs", "Authentication", "OAuth Setup"));
// "api/docs/authentication/o/auth/setup"
```

### Navigation Menu Structure

```javascript
import { pathCase } from "text-path-case";

function createMenuStructure(menuItems) {
  return menuItems.map((item) => ({
    ...item,
    path: pathCase(item.title),
    children: item.children ? createMenuStructure(item.children) : undefined,
  }));
}

const menuItems = [
  {
    title: "User Management",
    children: [
      { title: "User Profiles" },
      { title: "Account Settings" },
      { title: "Security Options" },
    ],
  },
  {
    title: "Content Management",
    children: [
      { title: "Blog Posts" },
      { title: "Media Library" },
      { title: "SEO Settings" },
    ],
  },
];

console.log(createMenuStructure(menuItems));
// [
//   {
//     title: "User Management",
//     path: "user/management",
//     children: [
//       { title: "User Profiles", path: "user/profiles" },
//       { title: "Account Settings", path: "account/settings" },
//       { title: "Security Options", path: "security/options" }
//     ]
//   },
//   {
//     title: "Content Management",
//     path: "content/management",
//     children: [
//       { title: "Blog Posts", path: "blog/posts" },
//       { title: "Media Library", path: "media/library" },
//       { title: "SEO Settings", path: "seo/settings" }
//     ]
//   }
// ]
```

### API Endpoint Generation

```javascript
import { pathCase } from "text-path-case";

class ApiEndpointBuilder {
  constructor(baseUrl = "/api") {
    this.baseUrl = baseUrl;
  }

  buildEndpoint(resource, action = null, id = null) {
    const resourcePath = pathCase(resource);
    let endpoint = `${this.baseUrl}/${resourcePath}`;

    if (id) {
      endpoint += `/${id}`;
    }

    if (action) {
      const actionPath = pathCase(action);
      endpoint += `/${actionPath}`;
    }

    return endpoint;
  }

  buildNestedEndpoint(parentResource, parentId, childResource, childId = null) {
    const parentPath = pathCase(parentResource);
    const childPath = pathCase(childResource);

    let endpoint = `${this.baseUrl}/${parentPath}/${parentId}/${childPath}`;

    if (childId) {
      endpoint += `/${childId}`;
    }

    return endpoint;
  }
}

const api = new ApiEndpointBuilder();

console.log(api.buildEndpoint("User Profiles"));
// "/api/user/profiles"

console.log(api.buildEndpoint("Blog Posts", "Published Articles"));
// "/api/blog/posts/published/articles"

console.log(api.buildNestedEndpoint("User Accounts", 123, "Profile Settings"));
// "/api/user/accounts/123/profile/settings"
```

### Breadcrumb Generation

```javascript
import { pathCase } from "text-path-case";

function generateBreadcrumbs(pathSegments) {
  const breadcrumbs = [];
  let currentPath = "";

  pathSegments.forEach((segment, index) => {
    const pathSegment = pathCase(segment);
    currentPath += (index === 0 ? "" : "/") + pathSegment;

    breadcrumbs.push({
      label: segment,
      path: currentPath,
      isLast: index === pathSegments.length - 1,
    });
  });

  return breadcrumbs;
}

const pathSegments = [
  "Home",
  "User Management",
  "Profile Settings",
  "Security Options",
];
console.log(generateBreadcrumbs(pathSegments));
// [
//   { label: "Home", path: "home", isLast: false },
//   { label: "User Management", path: "home/user/management", isLast: false },
//   { label: "Profile Settings", path: "home/user/management/profile/settings", isLast: false },
//   { label: "Security Options", path: "home/user/management/profile/settings/security/options", isLast: true }
// ]
```

### Static Site Generator

```javascript
import { pathCase } from "text-path-case";

class StaticSiteGenerator {
  constructor() {
    this.pages = [];
  }

  addPage(title, content, category = null) {
    const slug = pathCase(title);
    const categoryPath = category ? pathCase(category) : null;
    const fullPath = categoryPath ? `${categoryPath}/${slug}` : slug;

    this.pages.push({
      title,
      slug,
      category,
      categoryPath,
      fullPath,
      content,
      url: `/${fullPath}`,
    });
  }

  generateSitemap() {
    return this.pages.map((page) => ({
      url: page.url,
      title: page.title,
      category: page.category,
    }));
  }
}

const ssg = new StaticSiteGenerator();

ssg.addPage("Getting Started Guide", "Content here", "Documentation");
ssg.addPage("API Reference", "API content", "Documentation");
ssg.addPage("User Authentication", "Auth content", "Tutorials");
ssg.addPage("About Us", "About content");

console.log(ssg.generateSitemap());
// [
//   { url: "/documentation/getting/started/guide", title: "Getting Started Guide", category: "Documentation" },
//   { url: "/documentation/api/reference", title: "API Reference", category: "Documentation" },
//   { url: "/tutorials/user/authentication", title: "User Authentication", category: "Tutorials" },
//   { url: "/about/us", title: "About Us", category: null }
// ]
```

### Content Management System

```javascript
import { pathCase } from "text-path-case";

class ContentManager {
  constructor() {
    this.content = new Map();
  }

  createContent(title, type, parentPath = null) {
    const slug = pathCase(title);
    const fullPath = parentPath ? `${parentPath}/${slug}` : slug;

    const content = {
      id: Date.now(),
      title,
      slug,
      type,
      path: fullPath,
      createdAt: new Date(),
      children: [],
    };

    this.content.set(fullPath, content);
    return content;
  }

  createHierarchy(structure, parentPath = null) {
    const result = [];

    structure.forEach((item) => {
      const content = this.createContent(item.title, item.type, parentPath);

      if (item.children) {
        content.children = this.createHierarchy(item.children, content.path);
      }

      result.push(content);
    });

    return result;
  }
}

const cms = new ContentManager();

const siteStructure = [
  {
    title: "Blog Section",
    type: "category",
    children: [
      { title: "Technology Posts", type: "category" },
      { title: "Design Articles", type: "category" },
      { title: "Tutorial Content", type: "category" },
    ],
  },
  {
    title: "Documentation",
    type: "category",
    children: [
      { title: "Getting Started", type: "page" },
      { title: "API Reference", type: "page" },
      { title: "Best Practices", type: "page" },
    ],
  },
];

console.log(cms.createHierarchy(siteStructure));
// Creates a hierarchical structure with paths like:
// - "blog/section"
// - "blog/section/technology/posts"
// - "blog/section/design/articles"
// - "documentation"
// - "documentation/getting/started"
// etc.
```

## 📖 API Reference

### `pathCase(input, options?)`

Transforms text to path/case format.

#### Parameters

- **`input`** (`string`): The string to transform
- **`options`** (`object`, optional): Configuration options
  - **`transform`** (`function`): Custom transform function for each word
  - **`splitRegexp`** (`RegExp`): Custom regex for splitting words
  - **`stripRegexp`** (`RegExp`): Custom regex for stripping characters

#### Returns

- **`string`**: The path/case formatted string

#### Options Interface

```typescript
interface Options {
  transform?: (word: string, index: number, words: string[]) => string;
  splitRegexp?: RegExp;
  stripRegexp?: RegExp;
}
```

## 📊 Bundle Size

This package is optimized for minimal bundle size:

- **Minified**: ~450B
- **Gzipped**: ~300B
- **Tree-shakeable**: Yes
- **Side effects**: None

## 🌍 Browser Support

- **Modern browsers**: ES2015+ (Chrome 51+, Firefox 54+, Safari 10+)
- **Node.js**: 12+
- **TypeScript**: 4.0+
- **Bundle formats**: UMD, ESM, CommonJS

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage

# Type checking
pnpm typecheck

# Linting
pnpm lint
```

## 🔗 Related Packages

- [`text-kebab-case`](../kebab-case) - Convert to kebab-case
- [`text-dot-case`](../dot-case) - Convert to dot.case
- [`text-snake-case`](../snake-case) - Convert to snake_case
- [`text-case`](../text-case) - All case transformations in one package

## 📜 License

[MIT](LICENSE) © [Dmitry Selikhov](https://github.com/idimetrix)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Support

- 📧 **Email**: [selikhov.dmitrey@gmail.com](mailto:selikhov.dmitrey@gmail.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/idimetrix/text-case/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/idimetrix/text-case/discussions)
- 📖 **Documentation**: [Full Documentation](https://github.com/idimetrix/text-case#readme)

---

**Made with ❤️ by [Dmitry Selikhov](https://github.com/idimetrix)**

[npm-image]: https://img.shields.io/npm/v/text-path-case.svg?style=flat
[npm-url]: https://npmjs.org/package/text-path-case
[downloads-image]: https://img.shields.io/npm/dm/text-path-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/text-path-case
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/text-path-case.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=text-path-case
