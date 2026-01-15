import { upperCase, localeUpperCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["test", "TEST"],
  ["test string", "TEST STRING"],
  ["Test String", "TEST STRING"],
  ["HELLO WORLD", "HELLO WORLD"],
  ["hello world", "HELLO WORLD"],
  ["TestV2", "TESTV2"],
  ["version 1.2.10", "VERSION 1.2.10"],
  ["version 1.21.0", "VERSION 1.21.0"],

  // Edge cases
  ["a", "A"],
  ["A", "A"],
  ["1", "1"],
  ["_", "_"],
  [" ", " "],
  ["  ", "  "],
  ["   test   ", "   TEST   "],
  ["_test_", "_TEST_"],
  ["__test__", "__TEST__"],

  // Complex mixed cases
  ["XMLHttpRequest", "XMLHTTPREQUEST"],
  ["HTTPSConnection", "HTTPSCONNECTION"],
  ["iPhone", "IPHONE"],
  ["macOS", "MACOS"],
  ["iOS", "IOS"],
  ["API", "API"],
  ["URL", "URL"],
  ["HTML", "HTML"],
  ["CSS", "CSS"],
  ["JSON", "JSON"],

  // Numbers and special characters
  ["test123", "TEST123"],
  ["test_123", "TEST_123"],
  ["test-123", "TEST-123"],
  ["test.123", "TEST.123"],
  ["test 123", "TEST 123"],
  ["123test", "123TEST"],
  ["123_test", "123_TEST"],
  ["version2.0", "VERSION2.0"],
  ["v2.0.1", "V2.0.1"],

  // Camel case inputs
  ["camelCase", "CAMELCASE"],
  ["camelCaseString", "CAMELCASESTRING"],
  ["alreadyCamelCase", "ALREADYCAMELCASE"],

  // Pascal case inputs
  ["PascalCase", "PASCALCASE"],
  ["PascalCaseString", "PASCALCASESTRING"],

  // Snake case inputs
  ["snake_case", "SNAKE_CASE"],
  ["snake_case_string", "SNAKE_CASE_STRING"],
  ["SCREAMING_SNAKE_CASE", "SCREAMING_SNAKE_CASE"],

  // Kebab case inputs
  ["kebab-case", "KEBAB-CASE"],
  ["kebab-case-string", "KEBAB-CASE-STRING"],

  // Dot notation
  ["dot.case", "DOT.CASE"],
  ["dot.case.string", "DOT.CASE.STRING"],
  ["config.api.url", "CONFIG.API.URL"],

  // Path notation
  ["path/case", "PATH/CASE"],
  ["path/case/string", "PATH/CASE/STRING"],
  ["src/components/Button", "SRC/COMPONENTS/BUTTON"],

  // Mixed delimiters
  ["mixed_case-string.example", "MIXED_CASE-STRING.EXAMPLE"],
  [
    "test_string-with.multiple/delimiters",
    "TEST_STRING-WITH.MULTIPLE/DELIMITERS",
  ],

  // Unicode and international characters
  ["café", "CAFÉ"],
  ["naïve", "NAÏVE"],
  ["test café", "TEST CAFÉ"],
  ["münchen", "MÜNCHEN"],
  ["test münchen", "TEST MÜNCHEN"],
  ["CAFÉ", "CAFÉ"],
  ["NAÏVE", "NAÏVE"],
  ["TEST CAFÉ", "TEST CAFÉ"],
  ["MÜNCHEN", "MÜNCHEN"],
  ["TEST MÜNCHEN", "TEST MÜNCHEN"],

  // Whitespace variations
  ["\n\ntest\n\n", "\n\nTEST\n\n"],
  ["\t\ttest\t\t", "\t\tTEST\t\t"],
  ["test\nstring", "TEST\nSTRING"],
  ["test\tstring", "TEST\tSTRING"],

  // Punctuation
  ['"quotes"', '"QUOTES"'],
  ["'single quotes'", "'SINGLE QUOTES'"],
  ["(parentheses)", "(PARENTHESES)"],
  ["[brackets]", "[BRACKETS]"],
  ["{braces}", "{BRACES}"],
  ["test@example.com", "TEST@EXAMPLE.COM"],
  ["user+tag@example.com", "USER+TAG@EXAMPLE.COM"],

  // Extreme edge cases
  ["a1bStar", "A1BSTAR"],
  ["ID123String", "ID123STRING"],
  ["Id123String", "ID123STRING"],
  ["XMLParser2", "XMLPARSER2"],
  ["parseHTML5Document", "PARSEHTML5DOCUMENT"],

  // Menu items and navigation
  ["HOME PAGE", "HOME PAGE"],
  ["ABOUT US", "ABOUT US"],
  ["CONTACT INFORMATION", "CONTACT INFORMATION"],
  ["PRODUCTS AND SERVICES", "PRODUCTS AND SERVICES"],
  ["FREQUENTLY ASKED QUESTIONS", "FREQUENTLY ASKED QUESTIONS"],

  // Form labels
  ["PERSONAL INFORMATION", "PERSONAL INFORMATION"],
  ["BILLING ADDRESS", "BILLING ADDRESS"],
  ["SHIPPING DETAILS", "SHIPPING DETAILS"],
  ["PAYMENT METHOD", "PAYMENT METHOD"],
  ["ACCOUNT SETTINGS", "ACCOUNT SETTINGS"],

  // Status and notifications
  ["ORDER CONFIRMED", "ORDER CONFIRMED"],
  ["PAYMENT SUCCESSFUL", "PAYMENT SUCCESSFUL"],
  ["ACCOUNT VERIFIED", "ACCOUNT VERIFIED"],
  ["PROFILE UPDATED", "PROFILE UPDATED"],
  ["MESSAGE SENT", "MESSAGE SENT"],

  // Product categories
  ["ELECTRONICS AND GADGETS", "ELECTRONICS AND GADGETS"],
  ["BOOKS AND MEDIA", "BOOKS AND MEDIA"],
  ["CLOTHING AND ACCESSORIES", "CLOTHING AND ACCESSORIES"],
  ["HOME AND GARDEN", "HOME AND GARDEN"],
  ["SPORTS AND OUTDOORS", "SPORTS AND OUTDOORS"],

  // Professional titles
  ["SOFTWARE ENGINEER", "SOFTWARE ENGINEER"],
  ["PROJECT MANAGER", "PROJECT MANAGER"],
  ["DATA SCIENTIST", "DATA SCIENTIST"],
  ["PRODUCT DESIGNER", "PRODUCT DESIGNER"],
  ["MARKETING SPECIALIST", "MARKETING SPECIALIST"],

  // Configuration properties
  ["apiBaseUrl", "APIBASEURL"],
  ["databaseConnectionString", "DATABASECONNECTIONSTRING"],
  ["maxRetryAttempts", "MAXRETRYATTEMPTS"],
  ["defaultTimeout", "DEFAULTTIMEOUT"],
  ["cacheExpirationTime", "CACHEEXPIRATIONTIME"],

  // Programming terms
  ["getUserInfo", "GETUSERINFO"],
  ["setPassword", "SETPASSWORD"],
  ["isValidEmail", "ISVALIDEMAIL"],
  ["hasPermission", "HASPERMISSION"],
  ["canAccessResource", "CANACCESSRESOURCE"],

  // Business terms
  ["firstName", "FIRSTNAME"],
  ["lastName", "LASTNAME"],
  ["emailAddress", "EMAILADDRESS"],
  ["phoneNumber", "PHONENUMBER"],
  ["streetAddress", "STREETADDRESS"],
  ["zipCode", "ZIPCODE"],
  ["countryCode", "COUNTRYCODE"],
  ["currencyCode", "CURRENCYCODE"],

  // Document types
  ["USER MANUAL", "USER MANUAL"],
  ["TECHNICAL SPECIFICATION", "TECHNICAL SPECIFICATION"],
  ["INSTALLATION GUIDE", "INSTALLATION GUIDE"],
  ["RELEASE NOTES", "RELEASE NOTES"],
  ["PRIVACY POLICY", "PRIVACY POLICY"],

  // Event names
  ["ANNUAL CONFERENCE", "ANNUAL CONFERENCE"],
  ["PRODUCT LAUNCH", "PRODUCT LAUNCH"],
  ["QUARTERLY REVIEW", "QUARTERLY REVIEW"],
  ["TEAM MEETING", "TEAM MEETING"],
  ["TRAINING SESSION", "TRAINING SESSION"],

  // Academic terms
  ["COMPUTER SCIENCE", "COMPUTER SCIENCE"],
  ["MACHINE LEARNING", "MACHINE LEARNING"],
  ["ARTIFICIAL INTELLIGENCE", "ARTIFICIAL INTELLIGENCE"],
  ["SOFTWARE ENGINEERING", "SOFTWARE ENGINEERING"],
  ["DATA STRUCTURES", "DATA STRUCTURES"],

  // Department names
  ["HUMAN RESOURCES", "HUMAN RESOURCES"],
  ["CUSTOMER SERVICE", "CUSTOMER SERVICE"],
  ["INFORMATION TECHNOLOGY", "INFORMATION TECHNOLOGY"],
  ["RESEARCH AND DEVELOPMENT", "RESEARCH AND DEVELOPMENT"],
  ["QUALITY ASSURANCE", "QUALITY ASSURANCE"],

  // Platform names
  ["windows", "WINDOWS"],
  ["linux", "LINUX"],
  ["macos", "MACOS"],
  ["android", "ANDROID"],
  ["ios", "IOS"],

  // Programming languages
  ["javascript", "JAVASCRIPT"],
  ["typescript", "TYPESCRIPT"],
  ["python", "PYTHON"],
  ["java", "JAVA"],
  ["csharp", "CSHARP"],

  // Database systems
  ["mysql", "MYSQL"],
  ["postgresql", "POSTGRESQL"],
  ["mongodb", "MONGODB"],
  ["redis", "REDIS"],
  ["sqlite", "SQLITE"],

  // Cloud providers
  ["aws", "AWS"],
  ["azure", "AZURE"],
  ["gcp", "GCP"],
  ["heroku", "HEROKU"],
  ["digital_ocean", "DIGITAL_OCEAN"],

  // Framework names
  ["react", "REACT"],
  ["angular", "ANGULAR"],
  ["vue", "VUE"],
  ["express", "EXPRESS"],
  ["django", "DJANGO"],

  // Testing frameworks
  ["jest", "JEST"],
  ["mocha", "MOCHA"],
  ["jasmine", "JASMINE"],
  ["cypress", "CYPRESS"],
  ["selenium", "SELENIUM"],

  // Build tools
  ["webpack", "WEBPACK"],
  ["rollup", "ROLLUP"],
  ["vite", "VITE"],
  ["parcel", "PARCEL"],
  ["gulp", "GULP"],

  // Version control
  ["git", "GIT"],
  ["svn", "SVN"],
  ["mercurial", "MERCURIAL"],
  ["perforce", "PERFORCE"],
  ["bazaar", "BAZAAR"],

  // Error codes
  ["e404", "E404"],
  ["e500", "E500"],
  ["err001", "ERR001"],
  ["warn001", "WARN001"],
  ["v1", "V1"],
  ["v2_0", "V2_0"],
  ["version_1_0", "VERSION_1_0"],
  ["release_candidate", "RELEASE_CANDIDATE"],

  // Operating systems
  ["Windows", "WINDOWS"],
  ["windows", "WINDOWS"],
  ["Linux", "LINUX"],
  ["linux", "LINUX"],
  ["MacOS", "MACOS"],
  ["macos", "MACOS"],
  ["Ubuntu", "UBUNTU"],
  ["ubuntu", "UBUNTU"],

  // Visibility modifiers
  ["Public", "PUBLIC"],
  ["public", "PUBLIC"],
  ["Private", "PRIVATE"],
  ["private", "PRIVATE"],
  ["Protected", "PROTECTED"],
  ["protected", "PROTECTED"],
  ["Confidential", "CONFIDENTIAL"],
  ["confidential", "CONFIDENTIAL"],

  // DOM methods
  ["GetElementById", "GETELEMENTBYID"],
  ["QuerySelector", "QUERYSELECTOR"],
  ["AddEventListener", "ADDEVENTLISTENER"],
  ["CreateElement", "CREATEELEMENT"],
  ["AppendChild", "APPENDCHILD"],
  ["RemoveChild", "REMOVECHILD"],
  ["InnerHTML", "INNERHTML"],
  ["OuterHTML", "OUTERHTML"],
  ["TextContent", "TEXTCONTENT"],
  ["ClassName", "CLASSNAME"],

  // Libraries and tools
  ["Lodash", "LODASH"],
  ["Express", "EXPRESS"],
  ["React", "REACT"],
  ["Webpack", "WEBPACK"],
  ["Babel", "BABEL"],
  ["ESLint", "ESLINT"],
  ["Prettier", "PRETTIER"],
  ["TypeScript", "TYPESCRIPT"],
  ["Nodemon", "NODEMON"],
  ["Jest", "JEST"],

  // Infrastructure terms
  ["Database", "DATABASE"],
  ["Server", "SERVER"],
  ["Client", "CLIENT"],
  ["Frontend", "FRONTEND"],
  ["Backend", "BACKEND"],
  ["Middleware", "MIDDLEWARE"],
  ["Authentication", "AUTHENTICATION"],
  ["Authorization", "AUTHORIZATION"],
  ["Encryption", "ENCRYPTION"],
  ["Decryption", "DECRYPTION"],

  // Whitespace handling
  [" Hello ", " HELLO "],
  ["   World   ", "   WORLD   "],
  ["    Test    ", "    TEST    "],
  ["\t\tTab\t\t", "\t\tTAB\t\t"],
  ["\n\nNewline\n\n", "\n\nNEWLINE\n\n"],
  [" a ", " A "],
  ["   b   ", "   B   "],

  // Complex acronyms
  ["XMLParser", "XMLPARSER"],
  ["HTMLDocument", "HTMLDOCUMENT"],
  ["CSSStyleSheet", "CSSSTYLESHEET"],
  ["JSONData", "JSONDATA"],
  ["APIKey", "APIKEY"],
  ["URLPath", "URLPATH"],
  ["WebAPI", "WEBAPI"],
  ["DataJSON", "DATAJSON"],
  ["FileHTML", "FILEHTML"],

  // Punctuation preservation
  ["hello!", "HELLO!"],
  ["world?", "WORLD?"],
  ["test.", "TEST."],
  ["data,", "DATA,"],
  ["value;", "VALUE;"],
  ["key:", "KEY:"],
  ["name=", "NAME="],
  ["id+", "ID+"],
  ["code*", "CODE*"],
  ["path&", "PATH&"],
];

const LOCALE_TEST_CASES: [string, string, string][] = [["i", "\u0130", "tr"]];

describe("upper case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(upperCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(upperCase(null as any)).toEqual("");
    });

    it("should handle undefined input gracefully", () => {
      expect(upperCase(undefined as any)).toEqual("");
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "a".repeat(10000);
      const result = upperCase(longString);
      expect(result).toEqual("A".repeat(10000));
    });

    it("should handle very long strings starting with uppercase", () => {
      const longString = "A".repeat(10000);
      const result = upperCase(longString);
      expect(result).toEqual("A".repeat(10000));
    });
  });
});

describe("locale upper case", () => {
  for (const [input, result, locale] of LOCALE_TEST_CASES) {
    it(`${locale}: ${input} -> ${result}`, () => {
      expect(localeUpperCase(input, locale)).toEqual(result);
    });
  }

  it("should handle Turkish locale", () => {
    expect(localeUpperCase("istanbul", "tr")).toEqual("İSTANBUL");
  });

  it("should handle Lithuanian locale", () => {
    expect(localeUpperCase("įėčęuų", "lt")).toEqual("ĮĖČĘUŲ");
  });

  it("should handle null input gracefully", () => {
    expect(localeUpperCase(null as any, "tr")).toEqual("");
  });

  it("should handle undefined input gracefully", () => {
    expect(localeUpperCase(undefined as any, "tr")).toEqual("");
  });

  it("should handle unsupported locale by falling back to regular upperCase", () => {
    expect(localeUpperCase("hello world", "en")).toEqual("HELLO WORLD");
    expect(localeUpperCase("test string", "fr")).toEqual("TEST STRING");
    expect(localeUpperCase("lowercase", "de")).toEqual("LOWERCASE");
  });

  it("should handle locale case insensitively", () => {
    expect(localeUpperCase("istanbul", "TR")).toEqual("İSTANBUL");
    expect(localeUpperCase("istanbul", "Tr")).toEqual("İSTANBUL");
    expect(localeUpperCase("istanbul", "tR")).toEqual("İSTANBUL");
  });

  it("should handle az locale", () => {
    expect(localeUpperCase("istanbul", "az")).toEqual("İSTANBUL");
  });
});
