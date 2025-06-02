import { isUpperCase } from ".";

const TEST_CASES: [string, boolean][] = [
  // Basic transformations
  ["", false],
  ["A", true],
  ["a", false],
  ["Z", true],
  ["z", false],
  ["HELLO", true],
  ["hello", false],
  ["Hello", false],
  ["HELLO WORLD", true],
  ["Hello World", false],
  ["hello world", false],

  // Numbers and special characters
  ["123", false],
  ["A123", true],
  ["a123", false],
  ["123A", true],
  ["123a", false],
  ["A123B", true],
  ["a123b", false],
  ["A_B", true],
  ["a_b", false],
  ["A-B", true],
  ["a-b", false],

  // Mixed case scenarios
  ["ABC", true],
  ["abc", false],
  ["AbC", false],
  ["aBC", false],
  ["ABc", false],
  ["aBc", false],
  ["ABC123", true],
  ["abc123", false],
  ["ABC_DEF", true],
  ["abc_def", false],
  ["ABC-DEF", true],
  ["abc-def", false],

  // Edge cases with whitespace
  [" ", false],
  ["  ", false],
  ["   ", false],
  [" A ", true],
  [" a ", false],
  [" AB ", true],
  [" ab ", false],
  [" ABC ", true],
  [" abc ", false],
  ["A B", true],
  ["a b", false],

  // Special characters only
  ["_", false],
  ["__", false],
  ["-", false],
  ["--", false],
  [".", false],
  ["..", false],
  ["/", false],
  ["//", false],
  ["@", false],
  ["#", false],
  ["$", false],
  ["%", false],

  // Mixed alphanumeric
  ["A1", true],
  ["a1", false],
  ["A1B", true],
  ["a1b", false],
  ["A1B2", true],
  ["a1b2", false],
  ["A1B2C", true],
  ["a1b2c", false],
  ["ABC123DEF", true],
  ["abc123def", false],

  // Acronyms and abbreviations
  ["API", true],
  ["api", false],
  ["URL", true],
  ["url", false],
  ["HTML", true],
  ["html", false],
  ["CSS", true],
  ["css", false],
  ["JSON", true],
  ["json", false],
  ["XML", true],
  ["xml", false],

  // Unicode and international characters
  ["Á", true],
  ["á", false],
  ["É", true],
  ["é", false],
  ["Ñ", true],
  ["ñ", false],
  ["Ü", true],
  ["ü", false],
  ["CAFÉ", true],
  ["café", false],
  ["Café", false],
  ["MÜNCHEN", true],
  ["münchen", false],
  ["München", false],

  // Programming terms
  ["CLASS", true],
  ["class", false],
  ["Class", false],
  ["FUNCTION", true],
  ["function", false],
  ["Function", false],
  ["VARIABLE", true],
  ["variable", false],
  ["Variable", false],

  // Company and brand names
  ["IBM", true],
  ["ibm", false],
  ["NASA", true],
  ["nasa", false],
  ["FBI", true],
  ["fbi", false],
  ["CIA", true],
  ["cia", false],
  ["USA", true],
  ["usa", false],

  // File extensions
  ["TXT", true],
  ["txt", false],
  ["PDF", true],
  ["pdf", false],
  ["DOC", true],
  ["doc", false],
  ["XLS", true],
  ["xls", false],

  // Protocol names
  ["HTTP", true],
  ["http", false],
  ["HTTPS", true],
  ["https", false],
  ["FTP", true],
  ["ftp", false],
  ["SSH", true],
  ["ssh", false],

  // Status codes and responses
  ["OK", true],
  ["ok", false],
  ["ERROR", true],
  ["error", false],
  ["SUCCESS", true],
  ["success", false],
  ["FAILED", true],
  ["failed", false],

  // Database terms
  ["SELECT", true],
  ["select", false],
  ["INSERT", true],
  ["insert", false],
  ["UPDATE", true],
  ["update", false],
  ["DELETE", true],
  ["delete", false],

  // Configuration values
  ["TRUE", true],
  ["true", false],
  ["FALSE", true],
  ["false", false],
  ["NULL", true],
  ["null", false],
  ["UNDEFINED", true],
  ["undefined", false],

  // Constants
  ["PI", true],
  ["pi", false],
  ["MAX_VALUE", true],
  ["max_value", false],
  ["MIN_VALUE", true],
  ["min_value", false],
  ["DEFAULT_TIMEOUT", true],
  ["default_timeout", false],

  // Environment variables
  ["NODE_ENV", true],
  ["node_env", false],
  ["API_KEY", true],
  ["api_key", false],
  ["DATABASE_URL", true],
  ["database_url", false],
  ["SECRET_KEY", true],
  ["secret_key", false],

  // Error codes
  ["E404", true],
  ["e404", false],
  ["E500", true],
  ["e500", false],
  ["ERR001", true],
  ["err001", false],
  ["WARN001", true],
  ["warn001", false],

  // Version identifiers
  ["V1", true],
  ["v1", false],
  ["V2_0", true],
  ["v2_0", false],
  ["VERSION_1_0", true],
  ["version_1_0", false],
  ["RELEASE_CANDIDATE", true],
  ["release_candidate", false],

  // Operating system terms
  ["WINDOWS", true],
  ["windows", false],
  ["LINUX", true],
  ["linux", false],
  ["MACOS", true],
  ["macos", false],
  ["UBUNTU", true],
  ["ubuntu", false],

  // Security levels
  ["PUBLIC", true],
  ["public", false],
  ["PRIVATE", true],
  ["private", false],
  ["PROTECTED", true],
  ["protected", false],
  ["CONFIDENTIAL", true],
  ["confidential", false],
];

describe("is upper case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(isUpperCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => isUpperCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => isUpperCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "A".repeat(10000);
      const result = isUpperCase(longString);
      expect(result).toBe(true);
    });

    it("should handle very long mixed case strings", () => {
      const longString = "A".repeat(5000) + "a".repeat(5000);
      const result = isUpperCase(longString);
      expect(result).toBe(false);
    });
  });
});
