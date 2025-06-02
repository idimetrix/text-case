import { capitalCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["test", "Test"],
  ["test string", "Test String"],
  ["Test String", "Test String"],
  ["HELLO WORLD", "Hello World"],
  ["hello world", "Hello World"],
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

  // Menu items and navigation
  ["home page", "Home Page"],
  ["about us", "About Us"],
  ["contact information", "Contact Information"],
  ["products and services", "Products And Services"],
  ["frequently asked questions", "Frequently Asked Questions"],

  // Form labels
  ["personal information", "Personal Information"],
  ["billing address", "Billing Address"],
  ["shipping details", "Shipping Details"],
  ["payment method", "Payment Method"],
  ["account settings", "Account Settings"],

  // Status and notifications
  ["order confirmed", "Order Confirmed"],
  ["payment successful", "Payment Successful"],
  ["account verified", "Account Verified"],
  ["profile updated", "Profile Updated"],
  ["message sent", "Message Sent"],

  // Product categories
  ["electronics and gadgets", "Electronics And Gadgets"],
  ["books and media", "Books And Media"],
  ["clothing and accessories", "Clothing And Accessories"],
  ["home and garden", "Home And Garden"],
  ["sports and outdoors", "Sports And Outdoors"],

  // Professional titles
  ["software engineer", "Software Engineer"],
  ["project manager", "Project Manager"],
  ["data scientist", "Data Scientist"],
  ["product designer", "Product Designer"],
  ["marketing specialist", "Marketing Specialist"],

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

  // Business terms
  ["firstName", "First Name"],
  ["lastName", "Last Name"],
  ["emailAddress", "Email Address"],
  ["phoneNumber", "Phone Number"],
  ["streetAddress", "Street Address"],
  ["zipCode", "Zip Code"],
  ["countryCode", "Country Code"],
  ["currencyCode", "Currency Code"],

  // Document types
  ["user manual", "User Manual"],
  ["technical specification", "Technical Specification"],
  ["installation guide", "Installation Guide"],
  ["release notes", "Release Notes"],
  ["privacy policy", "Privacy Policy"],

  // Event names
  ["annual conference", "Annual Conference"],
  ["product launch", "Product Launch"],
  ["quarterly review", "Quarterly Review"],
  ["team meeting", "Team Meeting"],
  ["training session", "Training Session"],

  // Academic terms
  ["computer science", "Computer Science"],
  ["machine learning", "Machine Learning"],
  ["artificial intelligence", "Artificial Intelligence"],
  ["software engineering", "Software Engineering"],
  ["data structures", "Data Structures"],

  // Department names
  ["human resources", "Human Resources"],
  ["customer service", "Customer Service"],
  ["information technology", "Information Technology"],
  ["research and development", "Research And Development"],
  ["quality assurance", "Quality Assurance"],
];

describe("capital case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(capitalCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => capitalCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => capitalCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "very ".repeat(1000) + "long string";
      const result = capitalCase(longString);
      expect(result).toBe("Very ".repeat(1000) + "Long String");
    });
  });
});
