import { camelCase, camelCaseTransformMerge, Options } from ".";

const TEST_CASES: [string, string, Options?][] = [
  // Basic transformations
  ["", ""],
  ["a", "a"],
  ["A", "a"],
  ["z", "z"],
  ["Z", "z"],
  ["hello", "hello"],
  ["HELLO", "hello"],
  ["Hello", "hello"],
  ["hello world", "helloWorld"],
  ["Hello World", "helloWorld"],
  ["HELLO WORLD", "helloWorld"],

  // Mixed case scenarios
  ["abc", "abc"],
  ["ABC", "abc"],
  ["AbC", "abC"],
  ["aBC", "aBC"],
  ["ABc", "aBc"],
  ["aBc", "aBc"],
  ["abc123", "abc123"],
  ["ABC123", "abc123"],
  ["abc_def", "abcDef"],
  ["ABC_DEF", "abcDef"],
  ["abc-def", "abcDef"],
  ["ABC-DEF", "abcDef"],

  // Numbers and special characters
  ["123", "123"],
  ["a123", "a123"],
  ["A123", "a123"],
  ["123a", "123A"],
  ["123A", "123A"],
  ["a123b", "a123B"],
  ["A123B", "a123B"],
  ["a_b", "aB"],
  ["A_B", "aB"],
  ["a-b", "aB"],
  ["A-B", "aB"],

  // Edge cases with whitespace
  [" ", ""],
  ["  ", ""],
  ["   ", ""],
  [" a ", "a"],
  [" A ", "a"],
  [" ab ", "ab"],
  [" AB ", "ab"],
  [" abc ", "abc"],
  [" ABC ", "abc"],
  ["a b", "aB"],
  ["A B", "aB"],

  // Special characters only
  ["_", ""],
  ["__", ""],
  ["-", ""],
  ["--", ""],
  [".", ""],
  ["..", ""],
  ["/", ""],
  ["//", ""],
  ["@", ""],
  ["#", ""],
  ["$", ""],
  ["%", ""],

  // PascalCase inputs (should become camelCase)
  ["PascalCase", "pascalCase"],
  ["AlreadyPascalCase", "alreadyPascalCase"],
  ["MixedCASE", "mixedCase"],
  ["XMLHttpRequest", "xmlHttpRequest"],
  ["iPhone", "iPhone"],
  ["iPad", "iPad"],
  ["macOS", "macOs"],

  // Snake case inputs
  ["snake_case", "snakeCase"],
  ["SNAKE_CASE", "snakeCase"],
  ["Snake_Case", "snakeCase"],
  ["test_case", "testCase"],
  ["TEST_CASE", "testCase"],
  ["Test_Case", "testCase"],

  // Kebab case inputs
  ["kebab-case", "kebabCase"],
  ["KEBAB-CASE", "kebabCase"],
  ["Kebab-Case", "kebabCase"],
  ["test-case", "testCase"],
  ["TEST-CASE", "testCase"],
  ["Test-Case", "testCase"],

  // Constants
  ["CONSTANT_VALUE", "constantValue"],
  ["constant_value", "constantValue"],
  ["Constant_Value", "constantValue"],
  ["MAX_VALUE", "maxValue"],
  ["max_value", "maxValue"],
  ["Max_Value", "maxValue"],

  // Acronyms and abbreviations
  ["API", "api"],
  ["api", "api"],
  ["Api", "api"],
  ["URL", "url"],
  ["url", "url"],
  ["Url", "url"],
  ["HTML", "html"],
  ["html", "html"],
  ["Html", "html"],
  ["CSS", "css"],
  ["css", "css"],
  ["Css", "css"],
  ["JSON", "json"],
  ["json", "json"],
  ["Json", "json"],
  ["XML", "xml"],
  ["xml", "xml"],
  ["Xml", "xml"],

  // Unicode and international characters
  ["á", "á"],
  ["Á", "á"],
  ["é", "é"],
  ["É", "é"],
  ["ñ", "ñ"],
  ["Ñ", "ñ"],
  ["ü", "ü"],
  ["Ü", "ü"],
  ["café", "café"],
  ["CAFÉ", "café"],
  ["Café", "café"],
  ["münchen", "münchen"],
  ["MÜNCHEN", "münchen"],
  ["München", "münchen"],

  // Programming terms
  ["class", "class"],
  ["CLASS", "class"],
  ["Class", "class"],
  ["function", "function"],
  ["FUNCTION", "function"],
  ["Function", "function"],
  ["variable", "variable"],
  ["VARIABLE", "variable"],
  ["Variable", "variable"],

  // Company and brand names
  ["IBM", "ibm"],
  ["ibm", "ibm"],
  ["Ibm", "ibm"],
  ["NASA", "nasa"],
  ["nasa", "nasa"],
  ["Nasa", "nasa"],
  ["FBI", "fbi"],
  ["fbi", "fbi"],
  ["Fbi", "fbi"],
  ["CIA", "cia"],
  ["cia", "cia"],
  ["Cia", "cia"],
  ["USA", "usa"],
  ["usa", "usa"],
  ["Usa", "usa"],

  // File extensions
  ["TXT", "txt"],
  ["txt", "txt"],
  ["Txt", "txt"],
  ["PDF", "pdf"],
  ["pdf", "pdf"],
  ["Pdf", "pdf"],
  ["DOC", "doc"],
  ["doc", "doc"],
  ["Doc", "doc"],
  ["XLS", "xls"],
  ["xls", "xls"],
  ["Xls", "xls"],

  // Protocol names
  ["HTTP", "http"],
  ["http", "http"],
  ["Http", "http"],
  ["HTTPS", "https"],
  ["https", "https"],
  ["Https", "https"],
  ["FTP", "ftp"],
  ["ftp", "ftp"],
  ["Ftp", "ftp"],
  ["SSH", "ssh"],
  ["ssh", "ssh"],
  ["Ssh", "ssh"],

  // Status codes and responses
  ["OK", "ok"],
  ["ok", "ok"],
  ["Ok", "ok"],
  ["ERROR", "error"],
  ["error", "error"],
  ["Error", "error"],
  ["SUCCESS", "success"],
  ["success", "success"],
  ["Success", "success"],
  ["FAILED", "failed"],
  ["failed", "failed"],
  ["Failed", "failed"],

  // Database terms
  ["SELECT", "select"],
  ["select", "select"],
  ["Select", "select"],
  ["INSERT", "insert"],
  ["insert", "insert"],
  ["Insert", "insert"],
  ["UPDATE", "update"],
  ["update", "update"],
  ["Update", "update"],
  ["DELETE", "delete"],
  ["delete", "delete"],
  ["Delete", "delete"],

  // Configuration values
  ["TRUE", "true"],
  ["true", "true"],
  ["True", "true"],
  ["FALSE", "false"],
  ["false", "false"],
  ["False", "false"],
  ["NULL", "null"],
  ["null", "null"],
  ["Null", "null"],
  ["UNDEFINED", "undefined"],
  ["undefined", "undefined"],
  ["Undefined", "undefined"],

  // Programming languages
  ["JavaScript", "javaScript"],
  ["JAVASCRIPT", "javascript"],
  ["javascript", "javascript"],
  ["TypeScript", "typeScript"],
  ["TYPESCRIPT", "typescript"],
  ["typescript", "typescript"],
  ["Python", "python"],
  ["PYTHON", "python"],
  ["python", "python"],
  ["Java", "java"],
  ["JAVA", "java"],
  ["java", "java"],

  // Framework names
  ["React", "react"],
  ["REACT", "react"],
  ["react", "react"],
  ["Angular", "angular"],
  ["ANGULAR", "angular"],
  ["angular", "angular"],
  ["Vue", "vue"],
  ["VUE", "vue"],
  ["vue", "vue"],
  ["Express", "express"],
  ["EXPRESS", "express"],
  ["express", "express"],

  // Database names
  ["MySQL", "mySql"],
  ["MYSQL", "mysql"],
  ["mysql", "mysql"],
  ["PostgreSQL", "postgreSql"],
  ["POSTGRESQL", "postgresql"],
  ["postgresql", "postgresql"],
  ["MongoDB", "mongoDb"],
  ["MONGODB", "mongodb"],
  ["mongodb", "mongodb"],
  ["Redis", "redis"],
  ["REDIS", "redis"],
  ["redis", "redis"],

  // Cloud providers
  ["AWS", "aws"],
  ["aws", "aws"],
  ["Aws", "aws"],
  ["Azure", "azure"],
  ["AZURE", "azure"],
  ["azure", "azure"],
  ["GCP", "gcp"],
  ["gcp", "gcp"],
  ["Gcp", "gcp"],
  ["Heroku", "heroku"],
  ["HEROKU", "heroku"],
  ["heroku", "heroku"],

  // Complex mixed cases
  ["XMLHttpRequest", "xmlHttpRequest"],
  ["htmlParser", "htmlParser"],
  ["cssLoader", "cssLoader"],
  ["jsonData", "jsonData"],
  ["apiKey", "apiKey"],
  ["urlPath", "urlPath"],
  ["webAPI", "webApi"],
  ["dataJSON", "dataJson"],
  ["fileHTML", "fileHtml"],
  ["cssStyleSheet", "cssStyleSheet"],

  // Real world examples
  ["getElementById", "getElementById"],
  ["querySelector", "querySelector"],
  ["addEventListener", "addEventListener"],
  ["createElement", "createElement"],
  ["appendChild", "appendChild"],
  ["removeChild", "removeChild"],
  ["innerHTML", "innerHtml"],
  ["outerHTML", "outerHtml"],
  ["textContent", "textContent"],
  ["className", "className"],

  // Package names
  ["lodash", "lodash"],
  ["express", "express"],
  ["react", "react"],
  ["webpack", "webpack"],
  ["babel", "babel"],
  ["eslint", "eslint"],
  ["prettier", "prettier"],
  ["typescript", "typescript"],
  ["nodemon", "nodemon"],
  ["jest", "jest"],

  // Technical terms
  ["database", "database"],
  ["server", "server"],
  ["client", "client"],
  ["frontend", "frontend"],
  ["backend", "backend"],
  ["middleware", "middleware"],
  ["authentication", "authentication"],
  ["authorization", "authorization"],
  ["encryption", "encryption"],
  ["decryption", "decryption"],

  // Error codes
  ["E404", "e404"],
  ["e404", "e404"],
  ["E500", "e500"],
  ["e500", "e500"],
  ["ERR001", "err001"],
  ["err001", "err001"],
  ["Err001", "err001"],
  ["WARN001", "warn001"],
  ["warn001", "warn001"],
  ["Warn001", "warn001"],

  // Version identifiers
  ["V1", "v1"],
  ["v1", "v1"],
  ["V2_0", "v20"],
  ["v2_0", "v20"],
  ["VERSION_1_0", "version10"],
  ["version_1_0", "version10"],
  ["Version_1_0", "version10"],
  ["RELEASE_CANDIDATE", "releaseCandidate"],
  ["release_candidate", "releaseCandidate"],
  ["Release_Candidate", "releaseCandidate"],

  // Operating system terms
  ["WINDOWS", "windows"],
  ["windows", "windows"],
  ["Windows", "windows"],
  ["LINUX", "linux"],
  ["linux", "linux"],
  ["Linux", "linux"],
  ["MACOS", "macos"],
  ["macos", "macos"],
  ["MacOS", "macOs"],
  ["UBUNTU", "ubuntu"],
  ["ubuntu", "ubuntu"],
  ["Ubuntu", "ubuntu"],

  // Security levels
  ["PUBLIC", "public"],
  ["public", "public"],
  ["Public", "public"],
  ["PRIVATE", "private"],
  ["private", "private"],
  ["Private", "private"],
  ["PROTECTED", "protected"],
  ["protected", "protected"],
  ["Protected", "protected"],
  ["CONFIDENTIAL", "confidential"],
  ["confidential", "confidential"],
  ["Confidential", "confidential"],

  // Mixed delimiters
  ["mixed_case-string.example", "mixedCaseStringExample"],
  ["MIXED_CASE-STRING.EXAMPLE", "mixedCaseStringExample"],
  ["Mixed_Case-String.Example", "mixedCaseStringExample"],
  ["test_string-with.multiple/delimiters", "testStringWithMultipleDelimiters"],
  ["TEST_STRING-WITH.MULTIPLE/DELIMITERS", "testStringWithMultipleDelimiters"],
  ["Test_String-With.Multiple/Delimiters", "testStringWithMultipleDelimiters"],

  // Numbers with letters
  ["test123", "test123"],
  ["Test123", "test123"],
  ["TEST123", "test123"],
  ["123test", "123Test"],
  ["123Test", "123Test"],
  ["123TEST", "123Test"],
  ["test123Test", "test123Test"],
  ["Test123Test", "test123Test"],
  ["TEST123TEST", "test123Test"],

  // Special character combinations
  ["test_123", "test123"],
  ["test-123", "test123"],
  ["test 123", "test123"],
  ["test@123", "test123"],
  ["test#123", "test123"],
  ["test$123", "test123"],
  ["test%123", "test123"],
  ["test&123", "test123"],
  ["test*123", "test123"],

  // Multiple consecutive delimiters
  ["test__case", "testCase"],
  ["test--case", "testCase"],
  ["test..case", "testCase"],
  ["test  case", "testCase"],
  ["test___case", "testCase"],
  ["test---case", "testCase"],
  ["test...case", "testCase"],
  ["test   case", "testCase"],

  // Leading and trailing delimiters
  ["_test", "test"],
  ["-test", "test"],
  [".test", "test"],
  [" test", "test"],
  ["test_", "test"],
  ["test-", "test"],
  ["test.", "test"],
  ["test ", "test"],
  ["_test_", "test"],
  ["-test-", "test"],
  [".test.", "test"],
  [" test ", "test"],

  // Options testing with transform
  ["version 1.21.0", "version1210", { transform: camelCaseTransformMerge }],
  ["test string", "teststring", { transform: camelCaseTransformMerge }],
  ["Test String", "teststring", { transform: camelCaseTransformMerge }],

  // Custom split regexp
  ["camel2019", "camel2019"],
  ["camel2019", "camel2019", { splitRegexp: /([a-z])([A-Z0-9])/g }],
  ["minifyURLs", "minifyUrls"],
  ["minifyURLs", "minifyUrls", { splitRegexp: /([a-z])([A-Z0-9])/g }],

  // Whitespace variations
  ["\n\ntest\n\n", "test"],
  ["\t\ttest\t\t", "test"],
  ["test\nstring", "testString"],
  ["test\tstring", "testString"],

  // Punctuation
  ['"quotes"', "quotes"],
  ["'single quotes'", "singleQuotes"],
  ["(parentheses)", "parentheses"],
  ["[brackets]", "brackets"],
  ["{braces}", "braces"],
  ["test@example.com", "testExampleCom"],
  ["user+tag@example.com", "userTagExampleCom"],

  // Business/technical terms
  ["firstName", "firstName"],
  ["lastName", "lastName"],
  ["emailAddress", "emailAddress"],
  ["phoneNumber", "phoneNumber"],
  ["streetAddress", "streetAddress"],
  ["zipCode", "zipCode"],
  ["countryCode", "countryCode"],
  ["currencyCode", "currencyCode"],
];

describe("camel case", () => {
  for (const [input, result, options] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(camelCase(input, options)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => camelCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => camelCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "a".repeat(10000);
      const result = camelCase(longString);
      expect(result).toBe(longString);
    });

    it("should handle very long PascalCase strings", () => {
      const longPascalString = "A" + "b".repeat(5000) + "C" + "d".repeat(4999);
      const result = camelCase(longPascalString);
      expect(result.length).toBeGreaterThan(0);
    });
  });
});
