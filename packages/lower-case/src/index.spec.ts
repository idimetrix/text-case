import { lowerCase, localeLowerCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["test", "test"],
  ["test string", "test string"],
  ["Test String", "test string"],
  ["HELLO WORLD", "hello world"],
  ["hello world", "hello world"],
  ["TestV2", "testv2"],
  ["version 1.2.10", "version 1.2.10"],
  ["version 1.21.0", "version 1.21.0"],

  // Edge cases
  ["a", "a"],
  ["A", "a"],
  ["1", "1"],
  ["_", "_"],
  [" ", " "],
  ["  ", "  "],
  ["   test   ", "   test   "],
  ["_test_", "_test_"],
  ["__test__", "__test__"],

  // Complex mixed cases
  ["XMLHttpRequest", "xmlhttprequest"],
  ["HTTPSConnection", "httpsconnection"],
  ["iPhone", "iphone"],
  ["macOS", "macos"],
  ["iOS", "ios"],
  ["API", "api"],
  ["URL", "url"],
  ["HTML", "html"],
  ["CSS", "css"],
  ["JSON", "json"],

  // Numbers and special characters
  ["test123", "test123"],
  ["test_123", "test_123"],
  ["test-123", "test-123"],
  ["test.123", "test.123"],
  ["test 123", "test 123"],
  ["123test", "123test"],
  ["123_test", "123_test"],
  ["version2.0", "version2.0"],
  ["v2.0.1", "v2.0.1"],

  // Camel case inputs
  ["camelCase", "camelcase"],
  ["camelCaseString", "camelcasestring"],
  ["alreadyCamelCase", "alreadycamelcase"],

  // Pascal case inputs
  ["PascalCase", "pascalcase"],
  ["PascalCaseString", "pascalcasestring"],

  // Snake case inputs
  ["snake_case", "snake_case"],
  ["snake_case_string", "snake_case_string"],
  ["SCREAMING_SNAKE_CASE", "screaming_snake_case"],

  // Kebab case inputs
  ["kebab-case", "kebab-case"],
  ["kebab-case-string", "kebab-case-string"],

  // Dot notation
  ["dot.case", "dot.case"],
  ["dot.case.string", "dot.case.string"],
  ["config.api.url", "config.api.url"],

  // Path notation
  ["path/case", "path/case"],
  ["path/case/string", "path/case/string"],
  ["src/components/Button", "src/components/button"],

  // Mixed delimiters
  ["mixed_case-string.example", "mixed_case-string.example"],
  [
    "test_string-with.multiple/delimiters",
    "test_string-with.multiple/delimiters",
  ],

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
  ["\n\ntest\n\n", "\n\ntest\n\n"],
  ["\t\ttest\t\t", "\t\ttest\t\t"],
  ["test\nstring", "test\nstring"],
  ["test\tstring", "test\tstring"],

  // Punctuation
  ['"quotes"', '"quotes"'],
  ["'single quotes'", "'single quotes'"],
  ["(parentheses)", "(parentheses)"],
  ["[brackets]", "[brackets]"],
  ["{braces}", "{braces}"],
  ["test@example.com", "test@example.com"],
  ["user+tag@example.com", "user+tag@example.com"],

  // Extreme edge cases
  ["a1bStar", "a1bstar"],
  ["ID123String", "id123string"],
  ["Id123String", "id123string"],
  ["XMLParser2", "xmlparser2"],
  ["parseHTML5Document", "parsehtml5document"],

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
  ["apiBaseUrl", "apibaseurl"],
  ["databaseConnectionString", "databaseconnectionstring"],
  ["maxRetryAttempts", "maxretryattempts"],
  ["defaultTimeout", "defaulttimeout"],
  ["cacheExpirationTime", "cacheexpirationtime"],

  // Programming terms
  ["getUserInfo", "getuserinfo"],
  ["setPassword", "setpassword"],
  ["isValidEmail", "isvalidemail"],
  ["hasPermission", "haspermission"],
  ["canAccessResource", "canaccessresource"],

  // Business terms
  ["firstName", "firstname"],
  ["lastName", "lastname"],
  ["emailAddress", "emailaddress"],
  ["phoneNumber", "phonenumber"],
  ["streetAddress", "streetaddress"],
  ["zipCode", "zipcode"],
  ["countryCode", "countrycode"],
  ["currencyCode", "currencycode"],

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

  // Platform names
  ["WINDOWS", "windows"],
  ["LINUX", "linux"],
  ["MACOS", "macos"],
  ["ANDROID", "android"],
  ["IOS", "ios"],

  // Programming languages
  ["JAVASCRIPT", "javascript"],
  ["TYPESCRIPT", "typescript"],
  ["PYTHON", "python"],
  ["JAVA", "java"],
  ["CSHARP", "csharp"],

  // Database systems
  ["MYSQL", "mysql"],
  ["POSTGRESQL", "postgresql"],
  ["MONGODB", "mongodb"],
  ["REDIS", "redis"],
  ["SQLITE", "sqlite"],

  // Cloud providers
  ["AWS", "aws"],
  ["AZURE", "azure"],
  ["GCP", "gcp"],
  ["HEROKU", "heroku"],
  ["DIGITAL_OCEAN", "digital_ocean"],

  // Framework names
  ["REACT", "react"],
  ["ANGULAR", "angular"],
  ["VUE", "vue"],
  ["EXPRESS", "express"],
  ["DJANGO", "django"],

  // Testing frameworks
  ["JEST", "jest"],
  ["MOCHA", "mocha"],
  ["JASMINE", "jasmine"],
  ["CYPRESS", "cypress"],
  ["SELENIUM", "selenium"],

  // Build tools
  ["WEBPACK", "webpack"],
  ["ROLLUP", "rollup"],
  ["VITE", "vite"],
  ["PARCEL", "parcel"],
  ["GULP", "gulp"],

  // Version control
  ["GIT", "git"],
  ["SVN", "svn"],
  ["MERCURIAL", "mercurial"],
  ["PERFORCE", "perforce"],
  ["BAZAAR", "bazaar"],

  // Error codes
  ["E404", "e404"],
  ["E500", "e500"],
  ["ERR001", "err001"],
  ["WARN001", "warn001"],
  ["V1", "v1"],
  ["V2_0", "v2_0"],
  ["VERSION_1_0", "version_1_0"],
  ["RELEASE_CANDIDATE", "release_candidate"],

  // Operating systems
  ["Windows", "windows"],
  ["WINDOWS", "windows"],
  ["Linux", "linux"],
  ["LINUX", "linux"],
  ["MacOS", "macos"],
  ["MACOS", "macos"],
  ["Ubuntu", "ubuntu"],
  ["UBUNTU", "ubuntu"],

  // Visibility modifiers
  ["Public", "public"],
  ["PUBLIC", "public"],
  ["Private", "private"],
  ["PRIVATE", "private"],
  ["Protected", "protected"],
  ["PROTECTED", "protected"],
  ["Confidential", "confidential"],
  ["CONFIDENTIAL", "confidential"],

  // DOM methods
  ["GetElementById", "getelementbyid"],
  ["QuerySelector", "queryselector"],
  ["AddEventListener", "addeventlistener"],
  ["CreateElement", "createelement"],
  ["AppendChild", "appendchild"],
  ["RemoveChild", "removechild"],
  ["InnerHTML", "innerhtml"],
  ["OuterHTML", "outerhtml"],
  ["TextContent", "textcontent"],
  ["ClassName", "classname"],

  // Libraries and tools
  ["Lodash", "lodash"],
  ["Express", "express"],
  ["React", "react"],
  ["Webpack", "webpack"],
  ["Babel", "babel"],
  ["ESLint", "eslint"],
  ["Prettier", "prettier"],
  ["TypeScript", "typescript"],
  ["Nodemon", "nodemon"],
  ["Jest", "jest"],

  // Infrastructure terms
  ["Database", "database"],
  ["Server", "server"],
  ["Client", "client"],
  ["Frontend", "frontend"],
  ["Backend", "backend"],
  ["Middleware", "middleware"],
  ["Authentication", "authentication"],
  ["Authorization", "authorization"],
  ["Encryption", "encryption"],
  ["Decryption", "decryption"],

  // Whitespace handling
  [" Hello ", " hello "],
  ["   World   ", "   world   "],
  ["    Test    ", "    test    "],
  ["\t\tTab\t\t", "\t\ttab\t\t"],
  ["\n\nNewline\n\n", "\n\nnewline\n\n"],
  [" A ", " a "],
  ["   B   ", "   b   "],

  // Complex acronyms
  ["XMLParser", "xmlparser"],
  ["HTMLDocument", "htmldocument"],
  ["CSSStyleSheet", "cssstylesheet"],
  ["JSONData", "jsondata"],
  ["APIKey", "apikey"],
  ["URLPath", "urlpath"],
  ["WebAPI", "webapi"],
  ["DataJSON", "datajson"],
  ["FileHTML", "filehtml"],

  // Punctuation preservation
  ["Hello!", "hello!"],
  ["WORLD?", "world?"],
  ["Test.", "test."],
  ["Data,", "data,"],
  ["Value;", "value;"],
  ["Key:", "key:"],
  ["Name=", "name="],
  ["Id+", "id+"],
  ["Code*", "code*"],
  ["Path&", "path&"],
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
      expect(lowerCase(null as any)).toEqual("");
    });

    it("should handle undefined input gracefully", () => {
      expect(lowerCase(undefined as any)).toEqual("");
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "A".repeat(10000);
      const result = lowerCase(longString);
      expect(result).toEqual("a".repeat(10000));
    });

    it("should handle very long strings starting with lowercase", () => {
      const longString = "a".repeat(10000);
      const result = lowerCase(longString);
      expect(result).toEqual("a".repeat(10000));
    });
  });
});

describe("locale lower case", () => {
  for (const [input, result, locale] of LOCALE_TEST_CASES) {
    it(`${locale}: ${input} -> ${result}`, () => {
      expect(localeLowerCase(input, locale)).toEqual(result);
    });
  }

  it("should handle Turkish locale", () => {
    expect(localeLowerCase("İSTANBUL", "tr")).toEqual("istanbul");
  });

  it("should handle Lithuanian locale", () => {
    expect(localeLowerCase("ĮĖČĘUŲ", "lt")).toEqual("į̇ėčęuų");
  });

  it("should handle null input gracefully", () => {
    expect(localeLowerCase(null as any, "tr")).toEqual("");
  });

  it("should handle undefined input gracefully", () => {
    expect(localeLowerCase(undefined as any, "tr")).toEqual("");
  });

  it("should handle unsupported locale by falling back to regular lowerCase", () => {
    expect(localeLowerCase("HELLO WORLD", "en")).toEqual("hello world");
    expect(localeLowerCase("TEST STRING", "fr")).toEqual("test string");
    expect(localeLowerCase("UPPERCASE", "de")).toEqual("uppercase");
  });

  it("should handle locale case insensitively", () => {
    expect(localeLowerCase("İSTANBUL", "TR")).toEqual("istanbul");
    expect(localeLowerCase("İSTANBUL", "Tr")).toEqual("istanbul");
    expect(localeLowerCase("İSTANBUL", "tR")).toEqual("istanbul");
  });

  it("should handle az locale", () => {
    expect(localeLowerCase("İSTANBUL", "az")).toEqual("istanbul");
  });
});
