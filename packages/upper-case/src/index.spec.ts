import { upperCase, localeUpperCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["a", "A"],
  ["A", "A"],
  ["z", "Z"],
  ["Z", "Z"],
  ["hello", "HELLO"],
  ["HELLO", "HELLO"],
  ["Hello", "HELLO"],
  ["hello world", "HELLO WORLD"],
  ["Hello World", "HELLO WORLD"],
  ["HELLO WORLD", "HELLO WORLD"],

  // Numbers and special characters
  ["123", "123"],
  ["a123", "A123"],
  ["A123", "A123"],
  ["123a", "123A"],
  ["123A", "123A"],
  ["a123b", "A123B"],
  ["A123B", "A123B"],
  ["a_b", "A_B"],
  ["A_B", "A_B"],
  ["a-b", "A-B"],
  ["A-B", "A-B"],

  // Mixed case scenarios
  ["abc", "ABC"],
  ["ABC", "ABC"],
  ["AbC", "ABC"],
  ["aBC", "ABC"],
  ["ABc", "ABC"],
  ["aBc", "ABC"],
  ["abc123", "ABC123"],
  ["ABC123", "ABC123"],
  ["abc_def", "ABC_DEF"],
  ["ABC_DEF", "ABC_DEF"],
  ["abc-def", "ABC-DEF"],
  ["ABC-DEF", "ABC-DEF"],

  // Edge cases with whitespace
  [" ", " "],
  ["  ", "  "],
  ["   ", "   "],
  [" a ", " A "],
  [" A ", " A "],
  [" ab ", " AB "],
  [" AB ", " AB "],
  [" abc ", " ABC "],
  [" ABC ", " ABC "],
  ["a b", "A B"],
  ["A B", "A B"],

  // Special characters only
  ["_", "_"],
  ["__", "__"],
  ["-", "-"],
  ["--", "--"],
  [".", "."],
  ["..", ".."],
  ["/", "/"],
  ["//", "//"],
  ["@", "@"],
  ["#", "#"],
  ["$", "$"],
  ["%", "%"],

  // Mixed alphanumeric
  ["a1", "A1"],
  ["A1", "A1"],
  ["a1b", "A1B"],
  ["A1B", "A1B"],
  ["a1b2", "A1B2"],
  ["A1B2", "A1B2"],
  ["a1b2c", "A1B2C"],
  ["A1B2C", "A1B2C"],
  ["abc123def", "ABC123DEF"],
  ["ABC123DEF", "ABC123DEF"],

  // Camel case inputs
  ["camelCase", "CAMELCASE"],
  ["PascalCase", "PASCALCASE"],
  ["mixedCASE", "MIXEDCASE"],
  ["XMLHttpRequest", "XMLHTTPREQUEST"],
  ["iPhone", "IPHONE"],
  ["iPad", "IPAD"],
  ["macOS", "MACOS"],

  // Snake case inputs
  ["snake_case", "SNAKE_CASE"],
  ["SNAKE_CASE", "SNAKE_CASE"],
  ["Snake_Case", "SNAKE_CASE"],
  ["test_case", "TEST_CASE"],
  ["TEST_CASE", "TEST_CASE"],
  ["Test_Case", "TEST_CASE"],

  // Kebab case inputs
  ["kebab-case", "KEBAB-CASE"],
  ["KEBAB-CASE", "KEBAB-CASE"],
  ["Kebab-Case", "KEBAB-CASE"],
  ["test-case", "TEST-CASE"],
  ["TEST-CASE", "TEST-CASE"],
  ["Test-Case", "TEST-CASE"],

  // Constants
  ["CONSTANT_VALUE", "CONSTANT_VALUE"],
  ["constant_value", "CONSTANT_VALUE"],
  ["Constant_Value", "CONSTANT_VALUE"],
  ["MAX_VALUE", "MAX_VALUE"],
  ["max_value", "MAX_VALUE"],
  ["Max_Value", "MAX_VALUE"],

  // Acronyms and abbreviations
  ["API", "API"],
  ["api", "API"],
  ["Api", "API"],
  ["URL", "URL"],
  ["url", "URL"],
  ["Url", "URL"],
  ["HTML", "HTML"],
  ["html", "HTML"],
  ["Html", "HTML"],
  ["CSS", "CSS"],
  ["css", "CSS"],
  ["Css", "CSS"],
  ["JSON", "JSON"],
  ["json", "JSON"],
  ["Json", "JSON"],
  ["XML", "XML"],
  ["xml", "XML"],
  ["Xml", "XML"],

  // Unicode and international characters
  ["á", "Á"],
  ["Á", "Á"],
  ["é", "É"],
  ["É", "É"],
  ["ñ", "Ñ"],
  ["Ñ", "Ñ"],
  ["ü", "Ü"],
  ["Ü", "Ü"],
  ["café", "CAFÉ"],
  ["CAFÉ", "CAFÉ"],
  ["Café", "CAFÉ"],
  ["münchen", "MÜNCHEN"],
  ["MÜNCHEN", "MÜNCHEN"],
  ["München", "MÜNCHEN"],

  // Programming terms
  ["class", "CLASS"],
  ["CLASS", "CLASS"],
  ["Class", "CLASS"],
  ["function", "FUNCTION"],
  ["FUNCTION", "FUNCTION"],
  ["Function", "FUNCTION"],
  ["variable", "VARIABLE"],
  ["VARIABLE", "VARIABLE"],
  ["Variable", "VARIABLE"],

  // Company and brand names
  ["IBM", "IBM"],
  ["ibm", "IBM"],
  ["Ibm", "IBM"],
  ["NASA", "NASA"],
  ["nasa", "NASA"],
  ["Nasa", "NASA"],
  ["FBI", "FBI"],
  ["fbi", "FBI"],
  ["Fbi", "FBI"],
  ["CIA", "CIA"],
  ["cia", "CIA"],
  ["Cia", "CIA"],
  ["USA", "USA"],
  ["usa", "USA"],
  ["Usa", "USA"],

  // File extensions
  ["TXT", "TXT"],
  ["txt", "TXT"],
  ["Txt", "TXT"],
  ["PDF", "PDF"],
  ["pdf", "PDF"],
  ["Pdf", "PDF"],
  ["DOC", "DOC"],
  ["doc", "DOC"],
  ["Doc", "DOC"],
  ["XLS", "XLS"],
  ["xls", "XLS"],
  ["Xls", "XLS"],

  // Protocol names
  ["HTTP", "HTTP"],
  ["http", "HTTP"],
  ["Http", "HTTP"],
  ["HTTPS", "HTTPS"],
  ["https", "HTTPS"],
  ["Https", "HTTPS"],
  ["FTP", "FTP"],
  ["ftp", "FTP"],
  ["Ftp", "FTP"],
  ["SSH", "SSH"],
  ["ssh", "SSH"],
  ["Ssh", "SSH"],

  // Status codes and responses
  ["OK", "OK"],
  ["ok", "OK"],
  ["Ok", "OK"],
  ["ERROR", "ERROR"],
  ["error", "ERROR"],
  ["Error", "ERROR"],
  ["SUCCESS", "SUCCESS"],
  ["success", "SUCCESS"],
  ["Success", "SUCCESS"],
  ["FAILED", "FAILED"],
  ["failed", "FAILED"],
  ["Failed", "FAILED"],

  // Database terms
  ["SELECT", "SELECT"],
  ["select", "SELECT"],
  ["Select", "SELECT"],
  ["INSERT", "INSERT"],
  ["insert", "INSERT"],
  ["Insert", "INSERT"],
  ["UPDATE", "UPDATE"],
  ["update", "UPDATE"],
  ["Update", "UPDATE"],
  ["DELETE", "DELETE"],
  ["delete", "DELETE"],
  ["Delete", "DELETE"],

  // Configuration values
  ["TRUE", "TRUE"],
  ["true", "TRUE"],
  ["True", "TRUE"],
  ["FALSE", "FALSE"],
  ["false", "FALSE"],
  ["False", "FALSE"],
  ["NULL", "NULL"],
  ["null", "NULL"],
  ["Null", "NULL"],
  ["UNDEFINED", "UNDEFINED"],
  ["undefined", "UNDEFINED"],
  ["Undefined", "UNDEFINED"],

  // Constants
  ["PI", "PI"],
  ["pi", "PI"],
  ["Pi", "PI"],
  ["MAX_VALUE", "MAX_VALUE"],
  ["max_value", "MAX_VALUE"],
  ["Max_Value", "MAX_VALUE"],
  ["MIN_VALUE", "MIN_VALUE"],
  ["min_value", "MIN_VALUE"],
  ["Min_Value", "MIN_VALUE"],
  ["DEFAULT_TIMEOUT", "DEFAULT_TIMEOUT"],
  ["default_timeout", "DEFAULT_TIMEOUT"],
  ["Default_Timeout", "DEFAULT_TIMEOUT"],

  // Environment variables
  ["NODE_ENV", "NODE_ENV"],
  ["node_env", "NODE_ENV"],
  ["Node_Env", "NODE_ENV"],
  ["API_KEY", "API_KEY"],
  ["api_key", "API_KEY"],
  ["Api_Key", "API_KEY"],
  ["DATABASE_URL", "DATABASE_URL"],
  ["database_url", "DATABASE_URL"],
  ["Database_Url", "DATABASE_URL"],
  ["SECRET_KEY", "SECRET_KEY"],
  ["secret_key", "SECRET_KEY"],
  ["Secret_Key", "SECRET_KEY"],

  // Error codes
  ["E404", "E404"],
  ["e404", "E404"],
  ["E500", "E500"],
  ["e500", "E500"],
  ["ERR001", "ERR001"],
  ["err001", "ERR001"],
  ["Err001", "ERR001"],
  ["WARN001", "WARN001"],
  ["warn001", "WARN001"],
  ["Warn001", "WARN001"],

  // Version identifiers
  ["V1", "V1"],
  ["v1", "V1"],
  ["V2_0", "V2_0"],
  ["v2_0", "V2_0"],
  ["VERSION_1_0", "VERSION_1_0"],
  ["version_1_0", "VERSION_1_0"],
  ["Version_1_0", "VERSION_1_0"],
  ["RELEASE_CANDIDATE", "RELEASE_CANDIDATE"],
  ["release_candidate", "RELEASE_CANDIDATE"],
  ["Release_Candidate", "RELEASE_CANDIDATE"],

  // Operating system terms
  ["WINDOWS", "WINDOWS"],
  ["windows", "WINDOWS"],
  ["Windows", "WINDOWS"],
  ["LINUX", "LINUX"],
  ["linux", "LINUX"],
  ["Linux", "LINUX"],
  ["MACOS", "MACOS"],
  ["macos", "MACOS"],
  ["MacOS", "MACOS"],
  ["UBUNTU", "UBUNTU"],
  ["ubuntu", "UBUNTU"],
  ["Ubuntu", "UBUNTU"],

  // Security levels
  ["PUBLIC", "PUBLIC"],
  ["public", "PUBLIC"],
  ["Public", "PUBLIC"],
  ["PRIVATE", "PRIVATE"],
  ["private", "PRIVATE"],
  ["Private", "PRIVATE"],
  ["PROTECTED", "PROTECTED"],
  ["protected", "PROTECTED"],
  ["Protected", "PROTECTED"],
  ["CONFIDENTIAL", "CONFIDENTIAL"],
  ["confidential", "CONFIDENTIAL"],
  ["Confidential", "CONFIDENTIAL"],

  // Programming languages
  ["JAVASCRIPT", "JAVASCRIPT"],
  ["javascript", "JAVASCRIPT"],
  ["JavaScript", "JAVASCRIPT"],
  ["TYPESCRIPT", "TYPESCRIPT"],
  ["typescript", "TYPESCRIPT"],
  ["TypeScript", "TYPESCRIPT"],
  ["PYTHON", "PYTHON"],
  ["python", "PYTHON"],
  ["Python", "PYTHON"],
  ["JAVA", "JAVA"],
  ["java", "JAVA"],
  ["Java", "JAVA"],

  // Framework names
  ["REACT", "REACT"],
  ["react", "REACT"],
  ["React", "REACT"],
  ["ANGULAR", "ANGULAR"],
  ["angular", "ANGULAR"],
  ["Angular", "ANGULAR"],
  ["VUE", "VUE"],
  ["vue", "VUE"],
  ["Vue", "VUE"],
  ["EXPRESS", "EXPRESS"],
  ["express", "EXPRESS"],
  ["Express", "EXPRESS"],

  // Database names
  ["MYSQL", "MYSQL"],
  ["mysql", "MYSQL"],
  ["MySQL", "MYSQL"],
  ["POSTGRESQL", "POSTGRESQL"],
  ["postgresql", "POSTGRESQL"],
  ["PostgreSQL", "POSTGRESQL"],
  ["MONGODB", "MONGODB"],
  ["mongodb", "MONGODB"],
  ["MongoDB", "MONGODB"],
  ["REDIS", "REDIS"],
  ["redis", "REDIS"],
  ["Redis", "REDIS"],

  // Cloud providers
  ["AWS", "AWS"],
  ["aws", "AWS"],
  ["Aws", "AWS"],
  ["AZURE", "AZURE"],
  ["azure", "AZURE"],
  ["Azure", "AZURE"],
  ["GCP", "GCP"],
  ["gcp", "GCP"],
  ["Gcp", "GCP"],
  ["HEROKU", "HEROKU"],
  ["heroku", "HEROKU"],
  ["Heroku", "HEROKU"],

  // Complex mixed cases
  ["XMLHttpRequest", "XMLHTTPREQUEST"],
  ["htmlParser", "HTMLPARSER"],
  ["cssLoader", "CSSLOADER"],
  ["jsonData", "JSONDATA"],
  ["apiKey", "APIKEY"],
  ["urlPath", "URLPATH"],
  ["webAPI", "WEBAPI"],
  ["dataJSON", "DATAJSON"],
  ["fileHTML", "FILEHTML"],
  ["cssStyleSheet", "CSSSTYLESHEET"],

  // Real world examples
  ["getElementById", "GETELEMENTBYID"],
  ["querySelector", "QUERYSELECTOR"],
  ["addEventListener", "ADDEVENTLISTENER"],
  ["createElement", "CREATEELEMENT"],
  ["appendChild", "APPENDCHILD"],
  ["removeChild", "REMOVECHILD"],
  ["innerHTML", "INNERHTML"],
  ["outerHTML", "OUTERHTML"],
  ["textContent", "TEXTCONTENT"],
  ["className", "CLASSNAME"],

  // Package names
  ["lodash", "LODASH"],
  ["express", "EXPRESS"],
  ["react", "REACT"],
  ["webpack", "WEBPACK"],
  ["babel", "BABEL"],
  ["eslint", "ESLINT"],
  ["prettier", "PRETTIER"],
  ["typescript", "TYPESCRIPT"],
  ["nodemon", "NODEMON"],
  ["jest", "JEST"],

  // Technical terms
  ["database", "DATABASE"],
  ["server", "SERVER"],
  ["client", "CLIENT"],
  ["frontend", "FRONTEND"],
  ["backend", "BACKEND"],
  ["middleware", "MIDDLEWARE"],
  ["authentication", "AUTHENTICATION"],
  ["authorization", "AUTHORIZATION"],
  ["encryption", "ENCRYPTION"],
  ["decryption", "DECRYPTION"],
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
      expect(() => upperCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => upperCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "a".repeat(10000);
      const result = upperCase(longString);
      expect(result).toBe("A".repeat(10000));
    });

    it("should handle very long mixed case strings", () => {
      const longString = "aA".repeat(5000);
      const result = upperCase(longString);
      expect(result).toBe("AA".repeat(5000));
    });
  });
});

describe("locale upper case", () => {
  for (const [input, result, locale] of LOCALE_TEST_CASES) {
    it(`${locale}: ${input} -> ${result}`, () => {
      expect(localeUpperCase(input, locale)).toEqual(result);
    });
  }
});
