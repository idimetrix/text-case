import { isLowerCase } from ".";

const TEST_CASES: [string, boolean][] = [
  // Basic transformations
  ["", false],
  ["a", true],
  ["A", false],
  ["z", true],
  ["Z", false],
  ["hello", true],
  ["HELLO", false],
  ["Hello", false],
  ["hello world", true],
  ["Hello World", false],
  ["HELLO WORLD", false],

  // Numbers and special characters
  ["123", false],
  ["a123", true],
  ["A123", false],
  ["123a", true],
  ["123A", false],
  ["a123b", true],
  ["A123B", false],
  ["a_b", true],
  ["A_B", false],
  ["a-b", true],
  ["A-B", false],

  // Mixed case scenarios
  ["abc", true],
  ["ABC", false],
  ["AbC", false],
  ["aBC", false],
  ["ABc", false],
  ["aBc", false],
  ["abc123", true],
  ["ABC123", false],
  ["abc_def", true],
  ["ABC_DEF", false],
  ["abc-def", true],
  ["ABC-DEF", false],

  // Edge cases with whitespace
  [" ", false],
  ["  ", false],
  ["   ", false],
  [" a ", true],
  [" A ", false],
  [" ab ", true],
  [" AB ", false],
  [" abc ", true],
  [" ABC ", false],
  ["a b", true],
  ["A B", false],

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
  ["a1", true],
  ["A1", false],
  ["a1b", true],
  ["A1B", false],
  ["a1b2", true],
  ["A1B2", false],
  ["a1b2c", true],
  ["A1B2C", false],
  ["abc123def", true],
  ["ABC123DEF", false],

  // Acronyms and abbreviations
  ["api", true],
  ["API", false],
  ["url", true],
  ["URL", false],
  ["html", true],
  ["HTML", false],
  ["css", true],
  ["CSS", false],
  ["json", true],
  ["JSON", false],
  ["xml", true],
  ["XML", false],

  // Unicode and international characters
  ["á", true],
  ["Á", false],
  ["é", true],
  ["É", false],
  ["ñ", true],
  ["Ñ", false],
  ["ü", true],
  ["Ü", false],
  ["café", true],
  ["CAFÉ", false],
  ["Café", false],
  ["münchen", true],
  ["MÜNCHEN", false],
  ["München", false],

  // Programming terms
  ["class", true],
  ["CLASS", false],
  ["Class", false],
  ["function", true],
  ["FUNCTION", false],
  ["Function", false],
  ["variable", true],
  ["VARIABLE", false],
  ["Variable", false],

  // Company and brand names
  ["ibm", true],
  ["IBM", false],
  ["nasa", true],
  ["NASA", false],
  ["fbi", true],
  ["FBI", false],
  ["cia", true],
  ["CIA", false],
  ["usa", true],
  ["USA", false],

  // File extensions
  ["txt", true],
  ["TXT", false],
  ["pdf", true],
  ["PDF", false],
  ["doc", true],
  ["DOC", false],
  ["xls", true],
  ["XLS", false],

  // Protocol names
  ["http", true],
  ["HTTP", false],
  ["https", true],
  ["HTTPS", false],
  ["ftp", true],
  ["FTP", false],
  ["ssh", true],
  ["SSH", false],

  // Status codes and responses
  ["ok", true],
  ["OK", false],
  ["error", true],
  ["ERROR", false],
  ["success", true],
  ["SUCCESS", false],
  ["failed", true],
  ["FAILED", false],

  // Database terms
  ["select", true],
  ["SELECT", false],
  ["insert", true],
  ["INSERT", false],
  ["update", true],
  ["UPDATE", false],
  ["delete", true],
  ["DELETE", false],

  // Configuration values
  ["true", true],
  ["TRUE", false],
  ["false", true],
  ["FALSE", false],
  ["null", true],
  ["NULL", false],
  ["undefined", true],
  ["UNDEFINED", false],

  // Constants
  ["pi", true],
  ["PI", false],
  ["max_value", true],
  ["MAX_VALUE", false],
  ["min_value", true],
  ["MIN_VALUE", false],
  ["default_timeout", true],
  ["DEFAULT_TIMEOUT", false],

  // Environment variables
  ["node_env", true],
  ["NODE_ENV", false],
  ["api_key", true],
  ["API_KEY", false],
  ["database_url", true],
  ["DATABASE_URL", false],
  ["secret_key", true],
  ["SECRET_KEY", false],

  // Error codes
  ["e404", true],
  ["E404", false],
  ["e500", true],
  ["E500", false],
  ["err001", true],
  ["ERR001", false],
  ["warn001", true],
  ["WARN001", false],

  // Version identifiers
  ["v1", true],
  ["V1", false],
  ["v2_0", true],
  ["V2_0", false],
  ["version_1_0", true],
  ["VERSION_1_0", false],
  ["release_candidate", true],
  ["RELEASE_CANDIDATE", false],

  // Operating system terms
  ["windows", true],
  ["WINDOWS", false],
  ["linux", true],
  ["LINUX", false],
  ["macos", true],
  ["MACOS", false],
  ["ubuntu", true],
  ["UBUNTU", false],

  // Security levels
  ["public", true],
  ["PUBLIC", false],
  ["private", true],
  ["PRIVATE", false],
  ["protected", true],
  ["PROTECTED", false],
  ["confidential", true],
  ["CONFIDENTIAL", false],

  // Programming languages
  ["javascript", true],
  ["JAVASCRIPT", false],
  ["typescript", true],
  ["TYPESCRIPT", false],
  ["python", true],
  ["PYTHON", false],
  ["java", true],
  ["JAVA", false],

  // Framework names
  ["react", true],
  ["REACT", false],
  ["angular", true],
  ["ANGULAR", false],
  ["vue", true],
  ["VUE", false],
  ["express", true],
  ["EXPRESS", false],

  // Database names
  ["mysql", true],
  ["MYSQL", false],
  ["postgresql", true],
  ["POSTGRESQL", false],
  ["mongodb", true],
  ["MONGODB", false],
  ["redis", true],
  ["REDIS", false],

  // Cloud providers
  ["aws", true],
  ["AWS", false],
  ["azure", true],
  ["AZURE", false],
  ["gcp", true],
  ["GCP", false],
  ["heroku", true],
  ["HEROKU", false],

  // HTTP methods
  ["get", true],
  ["GET", false],
  ["post", true],
  ["POST", false],
  ["put", true],
  ["PUT", false],
  ["delete", true],
  ["DELETE", false],

  // Data formats
  ["json", true],
  ["JSON", false],
  ["xml", true],
  ["XML", false],
  ["yaml", true],
  ["YAML", false],
  ["csv", true],
  ["CSV", false],

  // Package managers
  ["npm", true],
  ["NPM", false],
  ["yarn", true],
  ["YARN", false],
  ["pip", true],
  ["PIP", false],
  ["composer", true],
  ["COMPOSER", false],

  // Development tools
  ["git", true],
  ["GIT", false],
  ["docker", true],
  ["DOCKER", false],
  ["webpack", true],
  ["WEBPACK", false],
  ["babel", true],
  ["BABEL", false],
];

describe("is lower case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(isLowerCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => isLowerCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => isLowerCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "a".repeat(10000);
      const result = isLowerCase(longString);
      expect(result).toBe(true);
    });

    it("should handle very long mixed case strings", () => {
      const longString = "a".repeat(5000) + "A".repeat(5000);
      const result = isLowerCase(longString);
      expect(result).toBe(false);
    });
  });
});
