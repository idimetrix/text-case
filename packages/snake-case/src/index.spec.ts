import { snakeCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["test", "test"],
  ["test string", "test_string"],
  ["Test String", "test_string"],
  ["TestV2", "test_v2"],
  ["version 1.2.10", "version_1_2_10"],
  ["version 1.21.0", "version_1_21_0"],

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
  ["XMLHttpRequest", "xml_http_request"],
  ["HTTPSConnection", "https_connection"],
  ["iPhone", "i_phone"],
  ["macOS", "mac_os"],
  ["iOS", "i_os"],
  ["API", "api"],
  ["URL", "url"],
  ["HTML", "html"],
  ["CSS", "css"],
  ["JSON", "json"],

  // Numbers and special characters
  ["test123", "test123"],
  ["test_123", "test_123"],
  ["test-123", "test_123"],
  ["test.123", "test_123"],
  ["test 123", "test_123"],
  ["123test", "123_test"],
  ["123_test", "123_test"],
  ["version2.0", "version2_0"],
  ["v2.0.1", "v2_0_1"],

  // Camel case inputs
  ["camelCase", "camel_case"],
  ["camelCaseString", "camel_case_string"],
  ["alreadyCamelCase", "already_camel_case"],

  // Pascal case inputs
  ["PascalCase", "pascal_case"],
  ["PascalCaseString", "pascal_case_string"],

  // Snake case inputs (should remain unchanged mostly)
  ["snake_case", "snake_case"],
  ["snake_case_string", "snake_case_string"],
  ["SCREAMING_SNAKE_CASE", "screaming_snake_case"],

  // Kebab case inputs
  ["kebab-case", "kebab_case"],
  ["kebab-case-string", "kebab_case_string"],

  // Dot notation
  ["dot.case", "dot_case"],
  ["dot.case.string", "dot_case_string"],
  ["config.api.url", "config_api_url"],

  // Path notation
  ["path/case", "path_case"],
  ["path/case/string", "path_case_string"],
  ["src/components/Button", "src_components_button"],

  // Mixed delimiters
  ["mixed_case-string.example", "mixed_case_string_example"],
  [
    "test_string-with.multiple/delimiters",
    "test_string_with_multiple_delimiters",
  ],

  // Unicode and international characters
  ["café", "café"],
  ["naïve", "naïve"],
  ["test café", "test_café"],
  ["münchen", "münchen"],
  ["test münchen", "test_münchen"],

  // Whitespace variations
  ["\n\ntest\n\n", "test"],
  ["\t\ttest\t\t", "test"],
  ["test\nstring", "test_string"],
  ["test\tstring", "test_string"],

  // Punctuation
  ['"quotes"', "quotes"],
  ["'single quotes'", "single_quotes"],
  ["(parentheses)", "parentheses"],
  ["[brackets]", "brackets"],
  ["{braces}", "braces"],
  ["test@example.com", "test_example_com"],
  ["user+tag@example.com", "user_tag_example_com"],

  // Extreme edge cases
  ["a1bStar", "a1_b_star"],
  ["ID123String", "id123_string"],
  ["Id123String", "id123_string"],
  ["XMLParser2", "xml_parser2"],
  ["parseHTML5Document", "parse_html5_document"],

  // Business/technical terms
  ["firstName", "first_name"],
  ["lastName", "last_name"],
  ["emailAddress", "email_address"],
  ["phoneNumber", "phone_number"],
  ["streetAddress", "street_address"],
  ["zipCode", "zip_code"],
  ["countryCode", "country_code"],
  ["currencyCode", "currency_code"],

  // Programming terms
  ["getUserData", "get_user_data"],
  ["setUserPreferences", "set_user_preferences"],
  ["calculateTotalAmount", "calculate_total_amount"],
  ["validateEmailFormat", "validate_email_format"],
  ["processPaymentData", "process_payment_data"],
  ["generateReportFile", "generate_report_file"],

  // Database/SQL style
  ["tableName", "table_name"],
  ["columnName", "column_name"],
  ["foreignKey", "foreign_key"],
  ["primaryKey", "primary_key"],
  ["indexName", "index_name"],
];

describe("snake case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(snakeCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => snakeCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => snakeCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "very ".repeat(1000) + "long string";
      const result = snakeCase(longString);
      expect(result).toBe("very_".repeat(1000) + "long_string");
    });
  });
});
