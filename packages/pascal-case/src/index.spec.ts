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

  // Single characters
  ["a", "A"],
  ["A", "A"],
  ["z", "Z"],
  ["Z", "Z"],
  ["1", "1"],
  ["9", "9"],

  // Edge cases
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

  // Pascal case inputs (should remain unchanged)
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
  ["áéíóú", "Áéíóú"],
  ["ÁÉÍÓÚ", "Áéíóú"],
  ["niño", "Niño"],
  ["NIÑO", "Niño"],
  ["josé maría", "JoséMaría"],

  // Programming terms
  ["class", "Class"],
  ["CLASS", "Class"],
  ["function", "Function"],
  ["FUNCTION", "Function"],
  ["variable", "Variable"],
  ["VARIABLE", "Variable"],
  ["constant", "Constant"],
  ["CONSTANT", "Constant"],
  ["method", "Method"],
  ["METHOD", "Method"],

  // Framework names
  ["react", "React"],
  ["REACT", "React"],
  ["angular", "Angular"],
  ["ANGULAR", "Angular"],
  ["vue", "Vue"],
  ["VUE", "Vue"],
  ["express", "Express"],
  ["EXPRESS", "Express"],
  ["next", "Next"],
  ["NEXT", "Next"],

  // Database names
  ["mysql", "Mysql"],
  ["MYSQL", "Mysql"],
  ["postgresql", "Postgresql"],
  ["POSTGRESQL", "Postgresql"],
  ["mongodb", "Mongodb"],
  ["MONGODB", "Mongodb"],
  ["redis", "Redis"],
  ["REDIS", "Redis"],

  // Cloud providers
  ["aws", "Aws"],
  ["AWS", "Aws"],
  ["azure", "Azure"],
  ["AZURE", "Azure"],
  ["gcp", "Gcp"],
  ["GCP", "Gcp"],
  ["heroku", "Heroku"],
  ["HEROKU", "Heroku"],

  // Error codes and status
  ["e404", "E404"],
  ["E404", "E404"],
  ["e500", "E500"],
  ["E500", "E500"],
  ["ok", "Ok"],
  ["OK", "Ok"],
  ["error", "Error"],
  ["ERROR", "Error"],

  // Version identifiers
  ["v1", "V1"],
  ["V1", "V1"],
  ["v2_0", "V20"],
  ["V2_0", "V20"],
  ["version_1_0", "Version10"],
  ["VERSION_1_0", "Version10"],

  // Operating systems
  ["windows", "Windows"],
  ["WINDOWS", "Windows"],
  ["linux", "Linux"],
  ["LINUX", "Linux"],
  ["macos", "Macos"],
  ["MACOS", "Macos"],
  ["ubuntu", "Ubuntu"],
  ["UBUNTU", "Ubuntu"],

  // HTTP methods
  ["get", "Get"],
  ["GET", "Get"],
  ["post", "Post"],
  ["POST", "Post"],
  ["put", "Put"],
  ["PUT", "Put"],
  ["delete", "Delete"],
  ["DELETE", "Delete"],
  ["patch", "Patch"],
  ["PATCH", "Patch"],

  // Data formats
  ["json", "Json"],
  ["JSON", "Json"],
  ["xml", "Xml"],
  ["XML", "Xml"],
  ["yaml", "Yaml"],
  ["YAML", "Yaml"],
  ["csv", "Csv"],
  ["CSV", "Csv"],

  // Package managers
  ["npm", "Npm"],
  ["NPM", "Npm"],
  ["yarn", "Yarn"],
  ["YARN", "Yarn"],
  ["pnpm", "Pnpm"],
  ["PNPM", "Pnpm"],

  // Development tools
  ["webpack", "Webpack"],
  ["WEBPACK", "Webpack"],
  ["babel", "Babel"],
  ["BABEL", "Babel"],
  ["eslint", "Eslint"],
  ["ESLINT", "Eslint"],
  ["prettier", "Prettier"],
  ["PRETTIER", "Prettier"],

  // Component names
  ["button", "Button"],
  ["BUTTON", "Button"],
  ["nav_bar", "NavBar"],
  ["NAV_BAR", "NavBar"],
  ["side_bar", "SideBar"],
  ["SIDE_BAR", "SideBar"],
  ["header", "Header"],
  ["HEADER", "Header"],
  ["footer", "Footer"],
  ["FOOTER", "Footer"],

  // Multiple consecutive delimiters
  ["test__case", "TestCase"],
  ["test--case", "TestCase"],
  ["test..case", "TestCase"],
  ["test  case", "TestCase"],
  ["test___case", "TestCase"],
  ["test---case", "TestCase"],
  ["test...case", "TestCase"],
  ["test   case", "TestCase"],

  // Leading and trailing delimiters
  ["_test", "Test"],
  ["-test", "Test"],
  [".test", "Test"],
  [" test", "Test"],
  ["test_", "Test"],
  ["test-", "Test"],
  ["test.", "Test"],
  ["test ", "Test"],

  // Real world method names
  ["getElementById", "GetElementById"],
  ["querySelector", "QuerySelector"],
  ["addEventListener", "AddEventListener"],
  ["createElement", "CreateElement"],
  ["appendChild", "AppendChild"],
  ["removeChild", "RemoveChild"],
  ["innerHTML", "InnerHtml"],
  ["outerHTML", "OuterHtml"],
  ["textContent", "TextContent"],
  ["className", "ClassName"],

  // Configuration properties
  ["apiBaseUrl", "ApiBaseUrl"],
  ["databaseConnectionString", "DatabaseConnectionString"],
  ["maxRetryAttempts", "MaxRetryAttempts"],
  ["defaultTimeout", "DefaultTimeout"],
  ["cacheExpirationTime", "CacheExpirationTime"],

  // Security levels
  ["public", "Public"],
  ["PUBLIC", "Public"],
  ["private", "Private"],
  ["PRIVATE", "Private"],
  ["protected", "Protected"],
  ["PROTECTED", "Protected"],
  ["confidential", "Confidential"],
  ["CONFIDENTIAL", "Confidential"],

  // File extensions
  ["txt", "Txt"],
  ["TXT", "Txt"],
  ["pdf", "Pdf"],
  ["PDF", "Pdf"],
  ["doc", "Doc"],
  ["DOC", "Doc"],
  ["xls", "Xls"],
  ["XLS", "Xls"],

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

  // Numbers with mixed cases
  ["test123Test", "Test123Test"],
  ["Test123Test", "Test123Test"],
  ["TEST123TEST", "Test123Test"],
  ["123Test123", "123Test123"],
  ["test123test", "Test123Test"],

  // Special character combinations
  ["test@123", "Test123"],
  ["test#123", "Test123"],
  ["test$123", "Test123"],
  ["test%123", "Test123"],
  ["test&123", "Test123"],
  ["test*123", "Test123"],

  // Technical acronyms
  ["http", "Http"],
  ["HTTP", "Http"],
  ["https", "Https"],
  ["HTTPS", "Https"],
  ["ftp", "Ftp"],
  ["FTP", "Ftp"],
  ["ssh", "Ssh"],
  ["SSH", "Ssh"],
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

    it("should handle very long camelCase strings", () => {
      const longCamelString = "a" + "B".repeat(5000) + "c" + "D".repeat(4999);
      const result = pascalCase(longCamelString);
      expect(result.length).toBeGreaterThan(0);
    });
  });
});
