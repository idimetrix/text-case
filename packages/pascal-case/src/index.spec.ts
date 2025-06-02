import { pascalCase, pascalCaseTransformMerge, Options } from ".";

const TEST_CASES: [string, string, Options?][] = [
  // Basic transformations
  ["", ""],
  ["test", "Test"],
  ["test string", "TestString"],
  ["Test String", "TestString"],
  ["TestV2", "TestV2"],
  ["version 1.2.10", "Version1210"],
  ["version 1.21.0", "Version1210"],

  // Edge cases
  ["a", "A"],
  ["A", "A"],
  ["1", "1"],
  ["_", ""],
  [" ", ""],
  ["  ", ""],
  ["   test   ", "Test"],
  ["_test_", "Test"],
  ["__test__", "Test"],

  // Complex mixed cases
  ["XMLHttpRequest", "XmlHttpRequest"],
  ["HTTPSConnection", "HttpsConnection"],
  ["iPhone", "IPhone"],
  ["macOS", "MacOs"],
  ["iOS", "IOs"],
  ["API", "Api"],
  ["URL", "Url"],
  ["HTML", "Html"],
  ["CSS", "Css"],
  ["JSON", "Json"],

  // Numbers and special characters
  ["test123", "Test123"],
  ["test_123", "Test123"],
  ["test-123", "Test123"],
  ["test.123", "Test123"],
  ["test 123", "Test123"],
  ["123test", "123Test"],
  ["123_test", "123Test"],
  ["version2.0", "Version20"],
  ["v2.0.1", "V201"],

  // Camel case inputs
  ["camelCase", "CamelCase"],
  ["camelCaseString", "CamelCaseString"],
  ["alreadyCamelCase", "AlreadyCamelCase"],

  // Pascal case inputs
  ["PascalCase", "PascalCase"],
  ["PascalCaseString", "PascalCaseString"],

  // Snake case inputs
  ["snake_case", "SnakeCase"],
  ["snake_case_string", "SnakeCaseString"],
  ["SCREAMING_SNAKE_CASE", "ScreamingSnakeCase"],

  // Kebab case inputs
  ["kebab-case", "KebabCase"],
  ["kebab-case-string", "KebabCaseString"],

  // Dot notation
  ["dot.case", "DotCase"],
  ["dot.case.string", "DotCaseString"],
  ["config.api.url", "ConfigApiUrl"],

  // Path notation
  ["path/case", "PathCase"],
  ["path/case/string", "PathCaseString"],
  ["src/components/Button", "SrcComponentsButton"],

  // Mixed delimiters
  ["mixed_case-string.example", "MixedCaseStringExample"],
  ["test_string-with.multiple/delimiters", "TestStringWithMultipleDelimiters"],

  // Unicode and international characters
  ["café", "Café"],
  ["naïve", "Naïve"],
  ["test café", "TestCafé"],
  ["münchen", "München"],
  ["test münchen", "TestMünchen"],

  // Options testing with transform
  ["version 1.21.0", "Version1210", { transform: pascalCaseTransformMerge }],
  ["test string", "Teststring", { transform: pascalCaseTransformMerge }],
  ["Test String", "Teststring", { transform: pascalCaseTransformMerge }],

  // Custom split regexp
  ["camel2019", "Camel2019"],
  ["camel2019", "Camel2019", { splitRegexp: /([a-z])([A-Z0-9])/g }],
  ["minifyURLs", "MinifyUrls"],
  ["minifyURLs", "MinifyUrls", { splitRegexp: /([a-z])([A-Z0-9])/g }],

  // Whitespace variations
  ["\n\ntest\n\n", "Test"],
  ["\t\ttest\t\t", "Test"],
  ["test\nstring", "TestString"],
  ["test\tstring", "TestString"],

  // Punctuation
  ['"quotes"', "Quotes"],
  ["'single quotes'", "SingleQuotes"],
  ["(parentheses)", "Parentheses"],
  ["[brackets]", "Brackets"],
  ["{braces}", "Braces"],
  ["test@example.com", "TestExampleCom"],
  ["user+tag@example.com", "UserTagExampleCom"],

  // Extreme edge cases
  ["a1bStar", "A1BStar"],
  ["ID123String", "Id123String"],
  ["Id123String", "Id123String"],
  ["XMLParser2", "XmlParser2"],
  ["parseHTML5Document", "ParseHtml5Document"],

  // Business/technical terms
  ["firstName", "FirstName"],
  ["lastName", "LastName"],
  ["emailAddress", "EmailAddress"],
  ["phoneNumber", "PhoneNumber"],
  ["streetAddress", "StreetAddress"],
  ["zipCode", "ZipCode"],
  ["countryCode", "CountryCode"],
  ["currencyCode", "CurrencyCode"],
];

describe("pascal case", () => {
  for (const [input, result, options] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(pascalCase(input, options)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => pascalCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => pascalCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "very ".repeat(1000) + "long string";
      const result = pascalCase(longString);
      expect(result).toBe("Very" + "Very".repeat(999) + "LongString");
    });
  });
});
