import { camelCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["test", "test"],
  ["test string", "testString"],
  ["Test String", "testString"],
  ["dot.case", "dotCase"],
  ["path/case", "pathCase"],
  ["TestV2", "testV2"],
  ["version 1.2.10", "version1210"],
  ["version 1.21.0", "version1210"],

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
  ["XMLHttpRequest", "xmlHttpRequest"],
  ["HTTPSConnection", "httpsConnection"],
  ["iPhone", "iPhone"],
  ["macOS", "macOs"],
  ["iOS", "iOs"],
  ["API", "api"],
  ["URL", "url"],
  ["HTML", "html"],
  ["CSS", "css"],
  ["JSON", "json"],

  // Numbers and special characters
  ["test123", "test123"],
  ["test_123", "test123"],
  ["test-123", "test123"],
  ["test.123", "test123"],
  ["test 123", "test123"],
  ["123test", "123Test"],
  ["123_test", "123Test"],
  ["version2.0", "version20"],
  ["v2.0.1", "v201"],

  // Pascal case inputs
  ["PascalCase", "pascalCase"],
  ["PascalCaseString", "pascalCaseString"],
  ["AlreadyPascalCase", "alreadyPascalCase"],

  // Snake case inputs
  ["snake_case", "snakeCase"],
  ["snake_case_string", "snakeCaseString"],
  ["SCREAMING_SNAKE_CASE", "screamingSnakeCase"],

  // Kebab case inputs
  ["kebab-case", "kebabCase"],
  ["kebab-case-string", "kebabCaseString"],
  ["multi-word-kebab-case", "multiWordKebabCase"],

  // Constant case inputs
  ["CONSTANT_CASE", "constantCase"],
  ["CONSTANT_CASE_STRING", "constantCaseString"],

  // Dot notation
  ["dot.case", "dotCase"],
  ["dot.case.string", "dotCaseString"],
  ["config.api.url", "configApiUrl"],

  // Path notation
  ["path/case", "pathCase"],
  ["path/case/string", "pathCaseString"],
  ["src/components/Button", "srcComponentsButton"],

  // Mixed delimiters
  ["mixed_case-string.example", "mixedCaseStringExample"],
  ["test_string-with.multiple/delimiters", "testStringWithMultipleDelimiters"],

  // Unicode and international characters
  ["café", "café"],
  ["naïve", "naïve"],
  ["test café", "testCafé"],
  ["münchen", "münchen"],
  ["test münchen", "testMünchen"],

  // Whitespace variations
  ["\n\ntest\n\n", "test"],
  ["\t\ttest\t\t", "test"],
  ["test\nstring", "testString"],
  ["test\tstring", "testString"],

  // Punctuation
  ['"quotes"', "quotes"],
  ["'single quotes'", "singleQuotes"],
  ["(parentheses)", "parentheses"],
  ["[brackets]", "brackets"],
  ["{braces}", "braces"],
  ["test@example.com", "testExampleCom"],
  ["user+tag@example.com", "userTagExampleCom"],

  // Extreme edge cases
  ["a1bStar", "a1BStar"],
  ["ID123String", "id123String"],
  ["Id123String", "id123String"],
  ["XMLParser2", "xmlParser2"],
  ["parseHTML5Document", "parseHtml5Document"],

  // Method names and programming terms
  ["get user info", "getUserInfo"],
  ["set password", "setPassword"],
  ["is valid email", "isValidEmail"],
  ["has permission", "hasPermission"],
  ["can access resource", "canAccessResource"],

  // Database field names
  ["user_id", "userId"],
  ["created_at", "createdAt"],
  ["updated_at", "updatedAt"],
  ["first_name", "firstName"],
  ["last_name", "lastName"],
  ["email_address", "emailAddress"],
  ["phone_number", "phoneNumber"],

  // Configuration properties
  ["api_base_url", "apiBaseUrl"],
  ["database_connection_string", "databaseConnectionString"],
  ["max_retry_attempts", "maxRetryAttempts"],
  ["default_timeout", "defaultTimeout"],
  ["cache_expiration_time", "cacheExpirationTime"],

  // Event names
  ["button-click", "buttonClick"],
  ["form-submit", "formSubmit"],
  ["page-load", "pageLoad"],
  ["user-login", "userLogin"],
  ["data-received", "dataReceived"],

  // CSS class names to properties
  ["background-color", "backgroundColor"],
  ["font-size", "fontSize"],
  ["margin-top", "marginTop"],
  ["border-radius", "borderRadius"],
  ["z-index", "zIndex"],

  // Business terms
  ["order status", "orderStatus"],
  ["payment method", "paymentMethod"],
  ["shipping address", "shippingAddress"],
  ["billing info", "billingInfo"],
  ["customer support", "customerSupport"],
];

describe("camel case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(camelCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => camelCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => camelCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "very ".repeat(1000) + "long string";
      const result = camelCase(longString);
      expect(result).toBe("very".repeat(1000) + "LongString");
    });
  });
});
