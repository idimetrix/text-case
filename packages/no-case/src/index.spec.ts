import { noCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["test", "test"],
  ["test string", "test string"],
  ["Test String", "test string"],
  ["HELLO WORLD", "hello world"],
  ["hello world", "hello world"],
  ["TestV2", "test v2"],
  ["version 1.2.10", "version 1 2 10"],
  ["version 1.21.0", "version 1 21 0"],

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
  ["XMLHttpRequest", "xml http request"],
  ["HTTPSConnection", "https connection"],
  ["iPhone", "i phone"],
  ["macOS", "mac os"],
  ["iOS", "i os"],
  ["API", "api"],
  ["URL", "url"],
  ["HTML", "html"],
  ["CSS", "css"],
  ["JSON", "json"],

  // Numbers and special characters
  ["test123", "test123"],
  ["test_123", "test 123"],
  ["test-123", "test 123"],
  ["test.123", "test 123"],
  ["test 123", "test 123"],
  ["123test", "123 test"],
  ["123_test", "123 test"],
  ["version2.0", "version2 0"],
  ["v2.0.1", "v2 0 1"],

  // Camel case inputs
  ["camelCase", "camel case"],
  ["camelCaseString", "camel case string"],
  ["alreadyCamelCase", "already camel case"],

  // Pascal case inputs
  ["PascalCase", "pascal case"],
  ["PascalCaseString", "pascal case string"],

  // Snake case inputs
  ["snake_case", "snake case"],
  ["snake_case_string", "snake case string"],
  ["SCREAMING_SNAKE_CASE", "screaming snake case"],

  // Kebab case inputs
  ["kebab-case", "kebab case"],
  ["kebab-case-string", "kebab case string"],

  // Dot notation
  ["dot.case", "dot case"],
  ["dot.case.string", "dot case string"],
  ["config.api.url", "config api url"],

  // Path notation
  ["path/case", "path case"],
  ["path/case/string", "path case string"],
  ["src/components/Button", "src components button"],

  // Mixed delimiters
  ["mixed_case-string.example", "mixed case string example"],
  ["test_string-with.multiple/delimiters", "test string with multiple delimiters"],

  // Unicode and international characters
  ["café", "café"],
  ["naïve", "naïve"],
  ["test café", "test café"],
  ["münchen", "münchen"],
  ["test münchen", "test münchen"],

  // Whitespace variations
  ["\n\ntest\n\n", "test"],
  ["\t\ttest\t\t", "test"],
  ["test\nstring", "test string"],
  ["test\tstring", "test string"],

  // Punctuation
  ['"quotes"', "quotes"],
  ["'single quotes'", "single quotes"],
  ["(parentheses)", "parentheses"],
  ["[brackets]", "brackets"],
  ["{braces}", "braces"],
  ["test@example.com", "test example com"],
  ["user+tag@example.com", "user tag example com"],

  // Extreme edge cases
  ["a1bStar", "a1 b star"],
  ["ID123String", "id123 string"],
  ["Id123String", "id123 string"],
  ["XMLParser2", "xml parser2"],
  ["parseHTML5Document", "parse html5 document"],

  // Menu items and navigation
  ["home page", "home page"],
  ["about us", "about us"],
  ["contact information", "contact information"],
  ["products and services", "products and services"],
  ["frequently asked questions", "frequently asked questions"],

  // Form labels
  ["personal information", "personal information"],
  ["billing address", "billing address"],
  ["shipping details", "shipping details"],
  ["payment method", "payment method"],
  ["account settings", "account settings"],

  // Status and notifications
  ["order confirmed", "order confirmed"],
  ["payment successful", "payment successful"],
  ["account verified", "account verified"],
  ["profile updated", "profile updated"],
  ["message sent", "message sent"],

  // Product categories
  ["electronics and gadgets", "electronics and gadgets"],
  ["books and media", "books and media"],
  ["clothing and accessories", "clothing and accessories"],
  ["home and garden", "home and garden"],
  ["sports and outdoors", "sports and outdoors"],

  // Professional titles
  ["software engineer", "software engineer"],
  ["project manager", "project manager"],
  ["data scientist", "data scientist"],
  ["product designer", "product designer"],
  ["marketing specialist", "marketing specialist"],

  // Configuration properties
  ["apiBaseUrl", "api base url"],
  ["databaseConnectionString", "database connection string"],
  ["maxRetryAttempts", "max retry attempts"],
  ["defaultTimeout", "default timeout"],
  ["cacheExpirationTime", "cache expiration time"],

  // Programming terms
  ["getUserInfo", "get user info"],
  ["setPassword", "set password"],
  ["isValidEmail", "is valid email"],
  ["hasPermission", "has permission"],
  ["canAccessResource", "can access resource"],

  // Business terms
  ["firstName", "first name"],
  ["lastName", "last name"],
  ["emailAddress", "email address"],
  ["phoneNumber", "phone number"],
  ["streetAddress", "street address"],
  ["zipCode", "zip code"],
  ["countryCode", "country code"],
  ["currencyCode", "currency code"],

  // Document types
  ["user manual", "user manual"],
  ["technical specification", "technical specification"],
  ["installation guide", "installation guide"],
  ["release notes", "release notes"],
  ["privacy policy", "privacy policy"],

  // Event names
  ["annual conference", "annual conference"],
  ["product launch", "product launch"],
  ["quarterly review", "quarterly review"],
  ["team meeting", "team meeting"],
  ["training session", "training session"],

  // Academic terms
  ["computer science", "computer science"],
  ["machine learning", "machine learning"],
  ["artificial intelligence", "artificial intelligence"],
  ["software engineering", "software engineering"],
  ["data structures", "data structures"],

  // Department names
  ["human resources", "human resources"],
  ["customer service", "customer service"],
  ["information technology", "information technology"],
  ["research and development", "research and development"],
  ["quality assurance", "quality assurance"],

  // Special characters and symbols
  ["test@#$%", "test"],
  ["test!@#$%^&*()", "test"],
  ["test()[]{}", "test"],
  ["test<>?:\"{}|", "test"],
  ["test,./;'[]\\", "test"],

  // URLs and paths
  ["https://example.com", "https example com"],
  ["www.example.com", "www example com"],
  ["example.com/path/to/resource", "example com path to resource"],
  ["file:///path/to/file", "file path to file"],
  ["C:\\Users\\Username", "c users username"],

  // File extensions
  ["index.html", "index html"],
  ["style.css", "style css"],
  ["script.js", "script js"],
  ["data.json", "data json"],
  ["image.png", "image png"],

  // Version numbers
  ["v1.0.0", "v1 0 0"],
  ["version-2.3.1", "version 2 3 1"],
  ["release_3.0.0-beta", "release 3 0 0 beta"],
  ["build-1.2.3-alpha.1", "build 1 2 3 alpha 1"],
  ["stable-4.5.6", "stable 4 5 6"],

  // Package names
  ["@scope/package-name", "scope package name"],
  ["@angular/core", "angular core"],
  ["react-router-dom", "react router dom"],
  ["lodash.merge", "lodash merge"],
  ["express-session", "express session"],
];

describe("no case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(noCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => noCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => noCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "very ".repeat(1000) + "long string";
      const result = noCase(longString);
      expect(result).toBe("very ".repeat(1000) + "long string");
    });
  });
});
