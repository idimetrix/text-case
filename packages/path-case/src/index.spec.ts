import { pathCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["test", "test"],
  ["test string", "test/string"],
  ["Test String", "test/string"],
  ["kebab-case", "kebab/case"],
  ["dot.case", "dot/case"],
  ["TestV2", "test/v2"],
  ["version 1.2.10", "version/1/2/10"],
  ["version 1.21.0", "version/1/21/0"],

  // Edge cases
  ["a", "a"],
  ["A", "a"],
  ["1", "1"],
  ["_", ""],
  [" ", ""],
  ["  ", ""],
  ["   test   ", "test"],
  ["_test_", "test"],
  ["__test__", "test"],

  // Complex mixed cases
  ["XMLHttpRequest", "xml/http/request"],
  ["HTTPSConnection", "https/connection"],
  ["iPhone", "i/phone"],
  ["macOS", "mac/os"],
  ["iOS", "i/os"],
  ["API", "api"],
  ["URL", "url"],
  ["HTML", "html"],
  ["CSS", "css"],
  ["JSON", "json"],

  // Numbers and special characters
  ["test123", "test123"],
  ["test_123", "test/123"],
  ["test-123", "test/123"],
  ["test.123", "test/123"],
  ["test 123", "test/123"],
  ["123test", "123/test"],
  ["123_test", "123/test"],
  ["version2.0", "version2/0"],
  ["v2.0.1", "v2/0/1"],

  // Camel case inputs
  ["camelCase", "camel/case"],
  ["camelCaseString", "camel/case/string"],
  ["alreadyCamelCase", "already/camel/case"],

  // Pascal case inputs
  ["PascalCase", "pascal/case"],
  ["PascalCaseString", "pascal/case/string"],

  // Snake case inputs
  ["snake_case", "snake/case"],
  ["snake_case_string", "snake/case/string"],
  ["SCREAMING_SNAKE_CASE", "screaming/snake/case"],

  // Kebab case inputs
  ["kebab-case", "kebab/case"],
  ["kebab-case-string", "kebab/case/string"],

  // Constant case inputs
  ["CONSTANT_CASE", "constant/case"],
  ["CONSTANT_CASE_STRING", "constant/case/string"],

  // Dot notation
  ["dot.case", "dot/case"],
  ["dot.case.string", "dot/case/string"],
  ["config.api.url", "config/api/url"],

  // Mixed delimiters
  ["mixed_case-string.example", "mixed/case/string/example"],
  ["test_string-with.multiple/delimiters", "test/string/with/multiple/delimiters"],

  // Unicode and international characters
  ["café", "café"],
  ["naïve", "naïve"],
  ["test café", "test/café"],
  ["münchen", "münchen"],
  ["test münchen", "test/münchen"],

  // Whitespace variations
  ["\n\ntest\n\n", "test"],
  ["\t\ttest\t\t", "test"],
  ["test\nstring", "test/string"],
  ["test\tstring", "test/string"],

  // Punctuation
  ['"quotes"', "quotes"],
  ["'single quotes'", "single/quotes"],
  ["(parentheses)", "parentheses"],
  ["[brackets]", "brackets"],
  ["{braces}", "braces"],
  ["test@example.com", "test/example/com"],
  ["user+tag@example.com", "user/tag/example/com"],

  // Extreme edge cases
  ["a1bStar", "a1/b/star"],
  ["ID123String", "id123/string"],
  ["Id123String", "id123/string"],
  ["XMLParser2", "xml/parser2"],
  ["parseHTML5Document", "parse/html5/document"],

  // File and directory paths
  ["src/components", "src/components"],
  ["src/components/Button", "src/components/button"],
  ["lib/utils", "lib/utils"],
  ["assets/images", "assets/images"],
  ["public/css", "public/css"],

  // Module paths
  ["react/dom", "react/dom"],
  ["lodash/get", "lodash/get"],
  ["@types/node", "types/node"],
  ["my-package/utils", "my/package/utils"],
  ["@company/shared", "company/shared"],

  // URL paths
  ["api/users", "api/users"],
  ["api/v1/users", "api/v1/users"],
  ["users/{id}/profile", "users/id/profile"],
  ["auth/login", "auth/login"],
  ["dashboard/settings", "dashboard/settings"],

  // Configuration properties
  ["apiBaseUrl", "api/base/url"],
  ["databaseConnectionString", "database/connection/string"],
  ["maxRetryAttempts", "max/retry/attempts"],
  ["defaultTimeout", "default/timeout"],
  ["cacheExpirationTime", "cache/expiration/time"],

  // Programming terms
  ["getUserInfo", "get/user/info"],
  ["setPassword", "set/password"],
  ["isValidEmail", "is/valid/email"],
  ["hasPermission", "has/permission"],
  ["canAccessResource", "can/access/resource"],

  // Business terms
  ["firstName", "first/name"],
  ["lastName", "last/name"],
  ["emailAddress", "email/address"],
  ["phoneNumber", "phone/number"],
  ["streetAddress", "street/address"],
  ["zipCode", "zip/code"],
  ["countryCode", "country/code"],
  ["currencyCode", "currency/code"],

  // File operations
  ["file.read", "file/read"],
  ["file.write", "file/write"],
  ["directory.create", "directory/create"],
  ["path.join", "path/join"],
  ["fs.readFile", "fs/read/file"],

  // Component hierarchies
  ["layout/header", "layout/header"],
  ["components/forms", "components/forms"],
  ["pages/home", "pages/home"],
  ["containers/app", "containers/app"],
  ["services/api", "services/api"],

  // Route patterns
  ["user profile", "user/profile"],
  ["admin dashboard", "admin/dashboard"],
  ["product detail", "product/detail"],
  ["shopping cart", "shopping/cart"],
  ["checkout process", "checkout/process"],

  // System paths
  ["system config", "system/config"],
  ["user settings", "user/settings"],
  ["app data", "app/data"],
  ["temp files", "temp/files"],
  ["cache storage", "cache/storage"],

  // Event names
  ["buttonClick", "button/click"],
  ["formSubmit", "form/submit"],
  ["pageLoad", "page/load"],
  ["userLogin", "user/login"],
  ["dataReceived", "data/received"],
];

describe("path case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(pathCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => pathCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => pathCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "very ".repeat(1000) + "long string";
      const result = pathCase(longString);
      expect(result).toBe("very/".repeat(1000) + "long/string");
    });
  });
});
