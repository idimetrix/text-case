import { sentenceCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["test", "Test"],
  ["test string", "Test string"],
  ["Test String", "Test string"],
  ["HELLO WORLD", "Hello world"],
  ["hello world", "Hello world"],
  ["TestV2", "Test v2"],
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
  ["XMLHttpRequest", "Xml http request"],
  ["HTTPSConnection", "Https connection"],
  ["iPhone", "I phone"],
  ["macOS", "Mac os"],
  ["iOS", "I os"],
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
  ["123test", "123 test"],
  ["123_test", "123 test"],
  ["version2.0", "Version2 0"],
  ["v2.0.1", "V2 0 1"],

  // Camel case inputs
  ["camelCase", "Camel case"],
  ["camelCaseString", "Camel case string"],
  ["alreadyCamelCase", "Already camel case"],

  // Pascal case inputs
  ["PascalCase", "Pascal case"],
  ["PascalCaseString", "Pascal case string"],

  // Snake case inputs
  ["snake_case", "Snake case"],
  ["snake_case_string", "Snake case string"],
  ["SCREAMING_SNAKE_CASE", "Screaming snake case"],

  // Kebab case inputs
  ["kebab-case", "Kebab case"],
  ["kebab-case-string", "Kebab case string"],

  // Dot notation
  ["dot.case", "Dot case"],
  ["dot.case.string", "Dot case string"],
  ["config.api.url", "Config api url"],

  // Path notation
  ["path/case", "Path case"],
  ["path/case/string", "Path case string"],
  ["src/components/Button", "Src components button"],

  // Mixed delimiters
  ["mixed_case-string.example", "Mixed case string example"],
  ["test_string-with.multiple/delimiters", "Test string with multiple delimiters"],

  // Unicode and international characters
  ["café", "Café"],
  ["naïve", "Naïve"],
  ["test café", "Test café"],
  ["münchen", "München"],
  ["test münchen", "Test münchen"],

  // Whitespace variations
  ["\n\ntest\n\n", "Test"],
  ["\t\ttest\t\t", "Test"],
  ["test\nstring", "Test string"],
  ["test\tstring", "Test string"],

  // Punctuation
  ['"quotes"', "Quotes"],
  ["'single quotes'", "Single quotes"],
  ["(parentheses)", "Parentheses"],
  ["[brackets]", "Brackets"],
  ["{braces}", "Braces"],
  ["test@example.com", "Test example com"],
  ["user+tag@example.com", "User tag example com"],

  // Extreme edge cases
  ["a1bStar", "A1 b star"],
  ["ID123String", "Id123 string"],
  ["Id123String", "Id123 string"],
  ["XMLParser2", "Xml parser2"],
  ["parseHTML5Document", "Parse html5 document"],

  // Complete sentences
  ["this is a sentence", "This is a sentence"],
  ["this is another sentence", "This is another sentence"],
  ["welcome to our website", "Welcome to our website"],
  ["please enter your information", "Please enter your information"],
  ["thank you for your purchase", "Thank you for your purchase"],

  // Error messages and notifications
  ["invalid email address", "Invalid email address"],
  ["password must be at least 8 characters", "Password must be at least 8 characters"],
  ["file uploaded successfully", "File uploaded successfully"],
  ["connection failed", "Connection failed"],
  ["operation completed", "Operation completed"],

  // Form field descriptions
  ["enter your first name", "Enter your first name"],
  ["select your country", "Select your country"],
  ["choose a secure password", "Choose a secure password"],
  ["provide additional details", "Provide additional details"],
  ["confirm your email address", "Confirm your email address"],

  // Button labels and actions
  ["click here to continue", "Click here to continue"],
  ["save and exit", "Save and exit"],
  ["cancel operation", "Cancel operation"],
  ["download file", "Download file"],
  ["submit form", "Submit form"],

  // Instructions and help text
  ["follow these steps", "Follow these steps"],
  ["read the instructions carefully", "Read the instructions carefully"],
  ["contact support if needed", "Contact support if needed"],
  ["review your information", "Review your information"],
  ["verify your account", "Verify your account"],

  // Status messages
  ["processing your request", "Processing your request"],
  ["loading data", "Loading data"],
  ["saving changes", "Saving changes"],
  ["updating profile", "Updating profile"],
  ["synchronizing files", "Synchronizing files"],

  // Configuration properties
  ["apiBaseUrl", "Api base url"],
  ["databaseConnectionString", "Database connection string"],
  ["maxRetryAttempts", "Max retry attempts"],
  ["defaultTimeout", "Default timeout"],
  ["cacheExpirationTime", "Cache expiration time"],

  // Programming terms
  ["getUserInfo", "Get user info"],
  ["setPassword", "Set password"],
  ["isValidEmail", "Is valid email"],
  ["hasPermission", "Has permission"],
  ["canAccessResource", "Can access resource"],

  // Business terms
  ["firstName", "First name"],
  ["lastName", "Last name"],
  ["emailAddress", "Email address"],
  ["phoneNumber", "Phone number"],
  ["streetAddress", "Street address"],
  ["zipCode", "Zip code"],
  ["countryCode", "Country code"],
  ["currencyCode", "Currency code"],

  // Event descriptions
  ["button was clicked", "Button was clicked"],
  ["form was submitted", "Form was submitted"],
  ["page finished loading", "Page finished loading"],
  ["user logged in", "User logged in"],
  ["data was received", "Data was received"],

  // Descriptions and explanations
  ["this feature allows you to", "This feature allows you to"],
  ["the system will automatically", "The system will automatically"],
  ["users can easily manage", "Users can easily manage"],
  ["the application provides", "The application provides"],
  ["customers will receive", "Customers will receive"],
];

describe("sentence case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(sentenceCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => sentenceCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => sentenceCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "very ".repeat(1000) + "long string";
      const result = sentenceCase(longString);
      expect(result).toBe("Very " + "very ".repeat(999) + "long string");
    });
  });
});
