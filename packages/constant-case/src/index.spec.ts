import { constantCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["test", "TEST"],
  ["test string", "TEST_STRING"],
  ["Test String", "TEST_STRING"],
  ["dot.case", "DOT_CASE"],
  ["path/case", "PATH_CASE"],
  ["TestV2", "TEST_V2"],
  ["version 1.2.10", "VERSION_1_2_10"],
  ["version 1.21.0", "VERSION_1_21_0"],

  // Edge cases
  ["a", "A"],
  ["A", "A"],
  ["1", "1"],
  ["_", ""],
  [" ", ""],
  ["  ", ""],
  ["   test   ", "TEST"],
  ["_test_", "TEST"],
  ["__test__", "TEST"],

  // Complex mixed cases
  ["XMLHttpRequest", "XML_HTTP_REQUEST"],
  ["HTTPSConnection", "HTTPS_CONNECTION"],
  ["iPhone", "I_PHONE"],
  ["macOS", "MAC_OS"],
  ["iOS", "I_OS"],
  ["API", "API"],
  ["URL", "URL"],
  ["HTML", "HTML"],
  ["CSS", "CSS"],
  ["JSON", "JSON"],

  // Numbers and special characters
  ["test123", "TEST123"],
  ["test_123", "TEST_123"],
  ["test-123", "TEST_123"],
  ["test.123", "TEST_123"],
  ["test 123", "TEST_123"],
  ["123test", "123TEST"],
  ["123_test", "123_TEST"],
  ["version2.0", "VERSION2_0"],
  ["v2.0.1", "V2_0_1"],

  // Camel case inputs
  ["camelCase", "CAMEL_CASE"],
  ["camelCaseString", "CAMEL_CASE_STRING"],
  ["alreadyCamelCase", "ALREADY_CAMEL_CASE"],

  // Pascal case inputs
  ["PascalCase", "PASCAL_CASE"],
  ["PascalCaseString", "PASCAL_CASE_STRING"],

  // Snake case inputs
  ["snake_case", "SNAKE_CASE"],
  ["snake_case_string", "SNAKE_CASE_STRING"],
  ["SCREAMING_SNAKE_CASE", "SCREAMING_SNAKE_CASE"],

  // Kebab case inputs
  ["kebab-case", "KEBAB_CASE"],
  ["kebab-case-string", "KEBAB_CASE_STRING"],

  // Dot notation
  ["dot.case", "DOT_CASE"],
  ["dot.case.string", "DOT_CASE_STRING"],
  ["config.api.url", "CONFIG_API_URL"],

  // Path notation
  ["path/case", "PATH_CASE"],
  ["path/case/string", "PATH_CASE_STRING"],
  ["src/components/Button", "SRC_COMPONENTS_BUTTON"],

  // Mixed delimiters
  ["mixed_case-string.example", "MIXED_CASE_STRING_EXAMPLE"],
  [
    "test_string-with.multiple/delimiters",
    "TEST_STRING_WITH_MULTIPLE_DELIMITERS",
  ],

  // Unicode and international characters
  ["café", "CAFÉ"],
  ["naïve", "NAÏVE"],
  ["test café", "TEST_CAFÉ"],
  ["münchen", "MÜNCHEN"],
  ["test münchen", "TEST_MÜNCHEN"],

  // Whitespace variations
  ["\n\ntest\n\n", "TEST"],
  ["\t\ttest\t\t", "TEST"],
  ["test\nstring", "TEST_STRING"],
  ["test\tstring", "TEST_STRING"],

  // Punctuation
  ['"quotes"', "QUOTES"],
  ["'single quotes'", "SINGLE_QUOTES"],
  ["(parentheses)", "PARENTHESES"],
  ["[brackets]", "BRACKETS"],
  ["{braces}", "BRACES"],
  ["test@example.com", "TEST_EXAMPLE_COM"],
  ["user+tag@example.com", "USER_TAG_EXAMPLE_COM"],

  // Extreme edge cases
  ["a1bStar", "A1B_STAR"],
  ["ID123String", "ID123_STRING"],
  ["Id123String", "ID123_STRING"],
  ["XMLParser2", "XML_PARSER2"],
  ["parseHTML5Document", "PARSE_HTML5_DOCUMENT"],

  // Configuration constants
  ["apiBaseUrl", "API_BASE_URL"],
  ["databaseConnectionString", "DATABASE_CONNECTION_STRING"],
  ["maxRetryAttempts", "MAX_RETRY_ATTEMPTS"],
  ["defaultTimeout", "DEFAULT_TIMEOUT"],
  ["cacheExpirationTime", "CACHE_EXPIRATION_TIME"],

  // Environment variables style
  ["NODE_ENV", "NODE_ENV"],
  ["process.env.PORT", "PROCESS_ENV_PORT"],
  ["DATABASE_URL", "DATABASE_URL"],
  ["JWT_SECRET", "JWT_SECRET"],
  ["REDIS_HOST", "REDIS_HOST"],

  // Business/technical terms
  ["firstName", "FIRST_NAME"],
  ["lastName", "LAST_NAME"],
  ["emailAddress", "EMAIL_ADDRESS"],
  ["phoneNumber", "PHONE_NUMBER"],
  ["streetAddress", "STREET_ADDRESS"],
  ["zipCode", "ZIP_CODE"],
  ["countryCode", "COUNTRY_CODE"],
  ["currencyCode", "CURRENCY_CODE"],

  // Programming constants
  ["MAX_BUFFER_SIZE", "MAX_BUFFER_SIZE"],
  ["MIN_PASSWORD_LENGTH", "MIN_PASSWORD_LENGTH"],
  ["DEFAULT_PAGE_SIZE", "DEFAULT_PAGE_SIZE"],
  ["HTTP_STATUS_OK", "HTTP_STATUS_OK"],
  ["ERROR_CODES", "ERROR_CODES"],
];

describe("constant case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(constantCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => constantCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => constantCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "very ".repeat(1000) + "long string";
      const result = constantCase(longString);
      expect(result).toBe("VERY_".repeat(1000) + "LONG_STRING");
    });
  });
});
