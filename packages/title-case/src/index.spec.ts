import { titleCase } from ".";

/**
 * Based on https://github.com/gouch/to-title-case/blob/master/test/tests.json.
 */
const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["test", "Test"],
  ["test string", "Test String"],
  ["Test String", "Test String"],
  ["HELLO WORLD", "Hello World"],
  ["hello world", "hello world"],
  ["TestV2", "Test V2"],
  ["version 1.2.10", "Version 1 2 10"],
  ["version 1.21.0", "Version 1 21 0"],

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
  ["XMLHttpRequest", "Xml Http Request"],
  ["HTTPSConnection", "Https Connection"],
  ["iPhone", "I Phone"],
  ["macOS", "Mac Os"],
  ["iOS", "I Os"],
  ["API", "Api"],
  ["URL", "Url"],
  ["HTML", "Html"],
  ["CSS", "Css"],
  ["JSON", "Json"],

  // Numbers and special characters
  ["test123", "Test123"],
  ["test_123", "Test 123"],
  ["test-123", "Test 123"],
  ["test.123", "Test 123"],
  ["test 123", "Test 123"],
  ["123test", "123 Test"],
  ["123_test", "123 Test"],
  ["version2.0", "Version2 0"],
  ["v2.0.1", "V2 0 1"],

  // Camel case inputs
  ["camelCase", "Camel Case"],
  ["camelCaseString", "Camel Case String"],
  ["alreadyCamelCase", "Already Camel Case"],

  // Pascal case inputs
  ["PascalCase", "Pascal Case"],
  ["PascalCaseString", "Pascal Case String"],

  // Snake case inputs
  ["snake_case", "Snake Case"],
  ["snake_case_string", "Snake Case String"],
  ["SCREAMING_SNAKE_CASE", "Screaming Snake Case"],

  // Kebab case inputs
  ["kebab-case", "Kebab Case"],
  ["kebab-case-string", "Kebab Case String"],

  // Dot notation
  ["dot.case", "Dot Case"],
  ["dot.case.string", "Dot Case String"],
  ["config.api.url", "Config Api Url"],

  // Path notation
  ["path/case", "Path Case"],
  ["path/case/string", "Path Case String"],
  ["src/components/Button", "Src Components Button"],

  // Mixed delimiters
  ["mixed_case-string.example", "Mixed Case String Example"],
  [
    "test_string-with.multiple/delimiters",
    "Test String With Multiple Delimiters",
  ],

  // Unicode and international characters
  ["café", "Café"],
  ["naïve", "Naïve"],
  ["test café", "Test Café"],
  ["münchen", "München"],
  ["test münchen", "Test München"],

  // Whitespace variations
  ["\n\ntest\n\n", "Test"],
  ["\t\ttest\t\t", "Test"],
  ["test\nstring", "Test String"],
  ["test\tstring", "Test String"],

  // Punctuation
  ['"quotes"', "Quotes"],
  ["'single quotes'", "Single Quotes"],
  ["(parentheses)", "Parentheses"],
  ["[brackets]", "Brackets"],
  ["{braces}", "Braces"],
  ["test@example.com", "Test Example Com"],
  ["user+tag@example.com", "User Tag Example Com"],

  // Extreme edge cases
  ["a1bStar", "A1 B Star"],
  ["ID123String", "Id123 String"],
  ["Id123String", "Id123 String"],
  ["XMLParser2", "Xml Parser2"],
  ["parseHTML5Document", "Parse Html5 Document"],

  // Book and article titles
  ["the great gatsby", "The Great Gatsby"],
  ["war and peace", "War And Peace"],
  ["to kill a mockingbird", "To Kill A Mockingbird"],
  ["one flew over the cuckoo's nest", "One Flew Over The Cuckoo's Nest"],
  ["the lord of the rings", "The Lord Of The Rings"],

  // Movie titles
  ["the dark knight", "The Dark Knight"],
  ["pulp fiction", "Pulp Fiction"],
  ["the shawshank redemption", "The Shawshank Redemption"],
  ["inception", "Inception"],
  ["the matrix", "The Matrix"],

  // Technical documentation
  ["getting started guide", "Getting Started Guide"],
  ["user manual", "User Manual"],
  ["installation instructions", "Installation Instructions"],
  ["troubleshooting guide", "Troubleshooting Guide"],
  ["api reference", "Api Reference"],

  // Business terms
  ["customer relationship management", "Customer Relationship Management"],
  ["human resources", "Human Resources"],
  ["project management", "Project Management"],
  ["quality assurance", "Quality Assurance"],
  ["business intelligence", "Business Intelligence"],

  // Configuration properties
  ["apiBaseUrl", "Api Base Url"],
  ["databaseConnectionString", "Database Connection String"],
  ["maxRetryAttempts", "Max Retry Attempts"],
  ["defaultTimeout", "Default Timeout"],
  ["cacheExpirationTime", "Cache Expiration Time"],

  // Programming terms
  ["getUserInfo", "Get User Info"],
  ["setPassword", "Set Password"],
  ["isValidEmail", "Is Valid Email"],
  ["hasPermission", "Has Permission"],
  ["canAccessResource", "Can Access Resource"],

  // Form labels and UI text
  ["first name", "First Name"],
  ["last name", "Last Name"],
  ["email address", "Email Address"],
  ["phone number", "Phone Number"],
  ["street address", "Street Address"],
  ["zip code", "Zip Code"],
  ["country code", "Country Code"],
  ["currency code", "Currency Code"],

  // Event names
  ["button click", "Button Click"],
  ["form submit", "Form Submit"],
  ["page load", "Page Load"],
  ["user login", "User Login"],
  ["data received", "Data Received"],

  // Academic subjects
  ["computer science", "Computer Science"],
  ["machine learning", "Machine Learning"],
  ["artificial intelligence", "Artificial Intelligence"],
  ["software engineering", "Software Engineering"],
  ["data structures", "Data Structures"],
];

describe("title case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(titleCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => titleCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => titleCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "very ".repeat(1000) + "long string";
      const result = titleCase(longString);
      expect(result).toBe("Very ".repeat(1000) + "Long String");
    });
  });
});
