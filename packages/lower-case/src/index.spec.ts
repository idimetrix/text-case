import { lowerCase, localeLowerCase } from ".";

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
  ["CAFÉ", "café"],
  ["NAÏVE", "naïve"],
  ["TEST CAFÉ", "test café"],
  ["MÜNCHEN", "münchen"],
  ["TEST MÜNCHEN", "test münchen"],

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
  ["HOME PAGE", "home page"],
  ["ABOUT US", "about us"],
  ["CONTACT INFORMATION", "contact information"],
  ["PRODUCTS AND SERVICES", "products and services"],
  ["FREQUENTLY ASKED QUESTIONS", "frequently asked questions"],

  // Form labels
  ["PERSONAL INFORMATION", "personal information"],
  ["BILLING ADDRESS", "billing address"],
  ["SHIPPING DETAILS", "shipping details"],
  ["PAYMENT METHOD", "payment method"],
  ["ACCOUNT SETTINGS", "account settings"],

  // Status and notifications
  ["ORDER CONFIRMED", "order confirmed"],
  ["PAYMENT SUCCESSFUL", "payment successful"],
  ["ACCOUNT VERIFIED", "account verified"],
  ["PROFILE UPDATED", "profile updated"],
  ["MESSAGE SENT", "message sent"],

  // Product categories
  ["ELECTRONICS AND GADGETS", "electronics and gadgets"],
  ["BOOKS AND MEDIA", "books and media"],
  ["CLOTHING AND ACCESSORIES", "clothing and accessories"],
  ["HOME AND GARDEN", "home and garden"],
  ["SPORTS AND OUTDOORS", "sports and outdoors"],

  // Professional titles
  ["SOFTWARE ENGINEER", "software engineer"],
  ["PROJECT MANAGER", "project manager"],
  ["DATA SCIENTIST", "data scientist"],
  ["PRODUCT DESIGNER", "product designer"],
  ["MARKETING SPECIALIST", "marketing specialist"],

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
  ["USER MANUAL", "user manual"],
  ["TECHNICAL SPECIFICATION", "technical specification"],
  ["INSTALLATION GUIDE", "installation guide"],
  ["RELEASE NOTES", "release notes"],
  ["PRIVACY POLICY", "privacy policy"],

  // Event names
  ["ANNUAL CONFERENCE", "annual conference"],
  ["PRODUCT LAUNCH", "product launch"],
  ["QUARTERLY REVIEW", "quarterly review"],
  ["TEAM MEETING", "team meeting"],
  ["TRAINING SESSION", "training session"],

  // Academic terms
  ["COMPUTER SCIENCE", "computer science"],
  ["MACHINE LEARNING", "machine learning"],
  ["ARTIFICIAL INTELLIGENCE", "artificial intelligence"],
  ["SOFTWARE ENGINEERING", "software engineering"],
  ["DATA STRUCTURES", "data structures"],

  // Department names
  ["HUMAN RESOURCES", "human resources"],
  ["CUSTOMER SERVICE", "customer service"],
  ["INFORMATION TECHNOLOGY", "information technology"],
  ["RESEARCH AND DEVELOPMENT", "research and development"],
  ["QUALITY ASSURANCE", "quality assurance"],

  // Acronyms and abbreviations
  ["FBI", "fbi"],
  ["NASA", "nasa"],
  ["CEO", "ceo"],
  ["CFO", "cfo"],
  ["CTO", "cto"],
  ["USA", "usa"],
  ["UK", "uk"],
  ["EU", "eu"],
  ["UN", "un"],
  ["WHO", "who"],

  // Database and server terms
  ["DATABASE SERVER", "database server"],
  ["WEB SERVER", "web server"],
  ["APPLICATION SERVER", "application server"],
  ["CACHE SERVER", "cache server"],
  ["MAIL SERVER", "mail server"],

  // Operating systems
  ["WINDOWS", "windows"],
  ["LINUX", "linux"],
  ["UBUNTU", "ubuntu"],
  ["CENTOS", "centos"],
  ["DEBIAN", "debian"],

  // Programming languages
  ["JAVASCRIPT", "javascript"],
  ["TYPESCRIPT", "typescript"],
  ["PYTHON", "python"],
  ["JAVA", "java"],
  ["CSHARP", "csharp"],

  // File formats
  ["PDF FILE", "pdf file"],
  ["CSV FILE", "csv file"],
  ["XML DOCUMENT", "xml document"],
  ["JSON DATA", "json data"],
  ["YAML CONFIG", "yaml config"],

  // Network protocols
  ["HTTP PROTOCOL", "http protocol"],
  ["HTTPS SECURE", "https secure"],
  ["FTP TRANSFER", "ftp transfer"],
  ["SMTP MAIL", "smtp mail"],
  ["POP3 EMAIL", "pop3 email"],

  // Security terms
  ["PASSWORD HASH", "password hash"],
  ["ENCRYPTION KEY", "encryption key"],
  ["DIGITAL CERTIFICATE", "digital certificate"],
  ["SECURITY TOKEN", "security token"],
  ["ACCESS CONTROL", "access control"],

  // Cloud services
  ["AMAZON AWS", "amazon aws"],
  ["GOOGLE CLOUD", "google cloud"],
  ["MICROSOFT AZURE", "microsoft azure"],
  ["DIGITAL OCEAN", "digital ocean"],
  ["HEROKU PLATFORM", "heroku platform"],

  // Mixed case combinations
  ["CamelCase_snake_case", "camel case snake case"],
  ["kebab-case.dot.notation", "kebab case dot notation"],
  ["path/case_mixed-delimiters", "path case mixed delimiters"],
  ["PascalCase-kebab_snake.dot", "pascal case kebab snake dot"],
  ["CONSTANT_camelCase-kebab", "constant camel case kebab"],
];

const LOCALE_TEST_CASES: [string, string, string][] = [
  ["STRING", "strıng", "tr"],
];

describe("lower case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(lowerCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => lowerCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => lowerCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "VERY ".repeat(1000) + "LONG STRING";
      const result = lowerCase(longString);
      expect(result).toBe("very ".repeat(1000) + "long string");
    });
  });
});

describe("locale lower case", () => {
  for (const [input, result, locale] of LOCALE_TEST_CASES) {
    it(`${locale}: ${input} -> ${result}`, () => {
      expect(localeLowerCase(input, locale)).toEqual(result);
    });
  }
});
