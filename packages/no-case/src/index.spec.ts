import { noCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["a", "a"],
  ["A", "a"],
  ["z", "z"],
  ["Z", "z"],
  ["hello", "hello"],
  ["HELLO", "hello"],
  ["Hello", "hello"],
  ["hello world", "hello world"],
  ["Hello World", "hello world"],
  ["HELLO WORLD", "hello world"],

  // Mixed case scenarios
  ["abc", "abc"],
  ["ABC", "abc"],
  ["AbC", "ab c"],
  ["aBC", "a bc"],
  ["ABc", "a bc"],
  ["aBc", "a bc"],
  ["abc123", "abc123"],
  ["ABC123", "abc123"],
  ["abc_def", "abc def"],
  ["ABC_DEF", "abc def"],
  ["abc-def", "abc def"],
  ["ABC-DEF", "abc def"],

  // Numbers and special characters
  ["123", "123"],
  ["a123", "a123"],
  ["A123", "a123"],
  ["123a", "123a"],
  ["123A", "123 a"],
  ["a123b", "a123b"],
  ["A123B", "a123 b"],
  ["a_b", "a b"],
  ["A_B", "a b"],
  ["a-b", "a b"],
  ["A-B", "a b"],

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
  ["a b", "a b"],
  ["A B", "a b"],

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

  // Camel case inputs
  ["camelCase", "camel case"],
  ["PascalCase", "pascal case"],
  ["mixedCASE", "mixed case"],
  ["XMLHttpRequest", "xml http request"],
  ["iPhone", "i phone"],
  ["iPad", "i pad"],
  ["macOS", "mac os"],

  // Snake case inputs
  ["snake_case", "snake case"],
  ["SNAKE_CASE", "snake case"],
  ["Snake_Case", "snake case"],
  ["test_case", "test case"],
  ["TEST_CASE", "test case"],
  ["Test_Case", "test case"],

  // Kebab case inputs
  ["kebab-case", "kebab case"],
  ["KEBAB-CASE", "kebab case"],
  ["Kebab-Case", "kebab case"],
  ["test-case", "test case"],
  ["TEST-CASE", "test case"],
  ["Test-Case", "test case"],

  // Constants
  ["CONSTANT_VALUE", "constant value"],
  ["constant_value", "constant value"],
  ["Constant_Value", "constant value"],
  ["MAX_VALUE", "max value"],
  ["max_value", "max value"],
  ["Max_Value", "max value"],

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
  ["JavaScript", "java script"],
  ["JAVASCRIPT", "javascript"],
  ["javascript", "javascript"],
  ["TypeScript", "type script"],
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
  ["MySQL", "my sql"],
  ["MYSQL", "mysql"],
  ["mysql", "mysql"],
  ["PostgreSQL", "postgre sql"],
  ["POSTGRESQL", "postgresql"],
  ["postgresql", "postgresql"],
  ["MongoDB", "mongo db"],
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
  ["XMLHttpRequest", "xml http request"],
  ["htmlParser", "html parser"],
  ["cssLoader", "css loader"],
  ["jsonData", "json data"],
  ["apiKey", "api key"],
  ["urlPath", "url path"],
  ["webAPI", "web api"],
  ["dataJSON", "data json"],
  ["fileHTML", "file html"],
  ["cssStyleSheet", "css style sheet"],

  // Real world examples
  ["getElementById", "get element by id"],
  ["querySelector", "query selector"],
  ["addEventListener", "add event listener"],
  ["createElement", "create element"],
  ["appendChild", "append child"],
  ["removeChild", "remove child"],
  ["innerHTML", "inner html"],
  ["outerHTML", "outer html"],
  ["textContent", "text content"],
  ["className", "class name"],

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
  ["V2_0", "v2 0"],
  ["v2_0", "v2 0"],
  ["VERSION_1_0", "version 1 0"],
  ["version_1_0", "version 1 0"],
  ["Version_1_0", "version 1 0"],
  ["RELEASE_CANDIDATE", "release candidate"],
  ["release_candidate", "release candidate"],
  ["Release_Candidate", "release candidate"],

  // Operating system terms
  ["WINDOWS", "windows"],
  ["windows", "windows"],
  ["Windows", "windows"],
  ["LINUX", "linux"],
  ["linux", "linux"],
  ["Linux", "linux"],
  ["MACOS", "macos"],
  ["macos", "macos"],
  ["MacOS", "mac os"],
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

  // Dot notation
  ["dot.case", "dot case"],
  ["DOT.CASE", "dot case"],
  ["Dot.Case", "dot case"],
  ["config.api.url", "config api url"],
  ["CONFIG.API.URL", "config api url"],
  ["Config.Api.Url", "config api url"],

  // Path notation
  ["path/case", "path case"],
  ["PATH/CASE", "path case"],
  ["Path/Case", "path case"],
  ["src/components/Button", "src components button"],
  ["SRC/COMPONENTS/BUTTON", "src components button"],
  ["Src/Components/Button", "src components button"],

  // Mixed delimiters
  ["mixed_case-string.example", "mixed case string example"],
  ["MIXED_CASE-STRING.EXAMPLE", "mixed case string example"],
  ["Mixed_Case-String.Example", "mixed case string example"],
  [
    "test_string-with.multiple/delimiters",
    "test string with multiple delimiters",
  ],
  [
    "TEST_STRING-WITH.MULTIPLE/DELIMITERS",
    "test string with multiple delimiters",
  ],
  [
    "Test_String-With.Multiple/Delimiters",
    "test string with multiple delimiters",
  ],

  // Extreme edge cases
  ["", ""],
  ["a", "a"],
  ["A", "a"],
  ["aB", "a b"],
  ["AB", "ab"],
  ["ABC", "abc"],
  ["ABc", "a bc"],
  ["AbC", "ab c"],
  ["aBc", "a bc"],
  ["abc", "abc"],

  // Numbers with letters
  ["test123", "test123"],
  ["Test123", "test123"],
  ["TEST123", "test123"],
  ["123test", "123test"],
  ["123Test", "123 test"],
  ["123TEST", "123 test"],
  ["test123Test", "test123 test"],
  ["Test123Test", "test123 test"],
  ["TEST123TEST", "test123 test"],

  // Special character combinations
  ["test_123", "test 123"],
  ["test-123", "test 123"],
  ["test.123", "test 123"],
  ["test 123", "test 123"],
  ["test@123", "test 123"],
  ["test#123", "test 123"],
  ["test$123", "test 123"],
  ["test%123", "test 123"],
  ["test&123", "test 123"],
  ["test*123", "test 123"],

  // Multiple consecutive delimiters
  ["test__case", "test case"],
  ["test--case", "test case"],
  ["test..case", "test case"],
  ["test  case", "test case"],
  ["test___case", "test case"],
  ["test---case", "test case"],
  ["test...case", "test case"],
  ["test   case", "test case"],

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
];

describe("no case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(noCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => noCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => noCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "a".repeat(10000);
      const result = noCase(longString);
      expect(result).toBe(longString);
    });

    it("should handle very long camelCase strings", () => {
      const longCamelString = "a" + "B".repeat(5000) + "c" + "D".repeat(4999);
      const result = noCase(longCamelString);
      expect(result.length).toBeGreaterThan(0);
    });
  });
});
