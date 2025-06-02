import { paramCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["test", "test"],
  ["test string", "test-string"],
  ["Test String", "test-string"],
  ["HELLO WORLD", "hello-world"],
  ["hello world", "hello-world"],
  ["TestV2", "test-v2"],
  ["version 1.2.10", "version-1-2-10"],
  ["version 1.21.0", "version-1-21-0"],

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
  ["XMLHttpRequest", "xml-http-request"],
  ["HTTPSConnection", "https-connection"],
  ["iPhone", "i-phone"],
  ["macOS", "mac-os"],
  ["iOS", "i-os"],
  ["API", "api"],
  ["URL", "url"],
  ["HTML", "html"],
  ["CSS", "css"],
  ["JSON", "json"],

  // Numbers and special characters
  ["test123", "test123"],
  ["test_123", "test-123"],
  ["test-123", "test-123"],
  ["test.123", "test-123"],
  ["test 123", "test-123"],
  ["123test", "123-test"],
  ["123_test", "123-test"],
  ["version2.0", "version2-0"],
  ["v2.0.1", "v2-0-1"],

  // Camel case inputs
  ["camelCase", "camel-case"],
  ["camelCaseString", "camel-case-string"],
  ["alreadyCamelCase", "already-camel-case"],

  // Pascal case inputs
  ["PascalCase", "pascal-case"],
  ["PascalCaseString", "pascal-case-string"],

  // Snake case inputs
  ["snake_case", "snake-case"],
  ["snake_case_string", "snake-case-string"],
  ["SCREAMING_SNAKE_CASE", "screaming-snake-case"],

  // Kebab case inputs (already param case)
  ["kebab-case", "kebab-case"],
  ["kebab-case-string", "kebab-case-string"],

  // Dot notation
  ["dot.case", "dot-case"],
  ["dot.case.string", "dot-case-string"],
  ["config.api.url", "config-api-url"],

  // Path notation
  ["path/case", "path-case"],
  ["path/case/string", "path-case-string"],
  ["src/components/Button", "src-components-button"],

  // Mixed delimiters
  ["mixed_case-string.example", "mixed-case-string-example"],
  [
    "test_string-with.multiple/delimiters",
    "test-string-with-multiple-delimiters",
  ],

  // Unicode and international characters
  ["café", "café"],
  ["naïve", "naïve"],
  ["test café", "test-café"],
  ["münchen", "münchen"],
  ["test münchen", "test-münchen"],

  // Whitespace variations
  ["\n\ntest\n\n", "test"],
  ["\t\ttest\t\t", "test"],
  ["test\nstring", "test-string"],
  ["test\tstring", "test-string"],

  // Punctuation
  ['"quotes"', "quotes"],
  ["'single quotes'", "single-quotes"],
  ["(parentheses)", "parentheses"],
  ["[brackets]", "brackets"],
  ["{braces}", "braces"],
  ["test@example.com", "test-example-com"],
  ["user+tag@example.com", "user-tag-example-com"],

  // Extreme edge cases
  ["a1bStar", "a1-b-star"],
  ["ID123String", "id123-string"],
  ["Id123String", "id123-string"],
  ["XMLParser2", "xml-parser2"],
  ["parseHTML5Document", "parse-html5-document"],

  // URL and HTTP parameters
  ["queryParam", "query-param"],
  ["sortBy", "sort-by"],
  ["orderBy", "order-by"],
  ["filterBy", "filter-by"],
  ["groupBy", "group-by"],
  ["pageSize", "page-size"],
  ["pageNumber", "page-number"],
  ["maxResults", "max-results"],
  ["minValue", "min-value"],
  ["maxValue", "max-value"],

  // API endpoints
  ["getUserInfo", "get-user-info"],
  ["setUserPassword", "set-user-password"],
  ["isValidEmail", "is-valid-email"],
  ["hasPermission", "has-permission"],
  ["canAccessResource", "can-access-resource"],
  ["createNewUser", "create-new-user"],
  ["updateUserProfile", "update-user-profile"],
  ["deleteUserAccount", "delete-user-account"],

  // Route parameters
  ["userId", "user-id"],
  ["postId", "post-id"],
  ["categoryId", "category-id"],
  ["productId", "product-id"],
  ["orderId", "order-id"],
  ["sessionId", "session-id"],
  ["requestId", "request-id"],
  ["transactionId", "transaction-id"],

  // Query string parameters
  ["startDate", "start-date"],
  ["endDate", "end-date"],
  ["createdAt", "created-at"],
  ["updatedAt", "updated-at"],
  ["sortOrder", "sort-order"],
  ["includeDeleted", "include-deleted"],
  ["searchTerm", "search-term"],
  ["filterType", "filter-type"],

  // Form field names
  ["firstName", "first-name"],
  ["lastName", "last-name"],
  ["emailAddress", "email-address"],
  ["phoneNumber", "phone-number"],
  ["streetAddress", "street-address"],
  ["zipCode", "zip-code"],
  ["countryCode", "country-code"],
  ["currencyCode", "currency-code"],

  // Configuration parameters
  ["apiBaseUrl", "api-base-url"],
  ["databaseConnectionString", "database-connection-string"],
  ["maxRetryAttempts", "max-retry-attempts"],
  ["defaultTimeout", "default-timeout"],
  ["cacheExpirationTime", "cache-expiration-time"],
  ["enableLogging", "enable-logging"],
  ["debugMode", "debug-mode"],
  ["productionMode", "production-mode"],

  // Event parameters
  ["eventType", "event-type"],
  ["eventData", "event-data"],
  ["eventTimestamp", "event-timestamp"],
  ["eventSource", "event-source"],
  ["eventTarget", "event-target"],
  ["eventHandler", "event-handler"],
  ["eventListener", "event-listener"],
  ["customEvent", "custom-event"],

  // Validation parameters
  ["isRequired", "is-required"],
  ["minLength", "min-length"],
  ["maxLength", "max-length"],
  ["allowEmpty", "allow-empty"],
  ["validateEmail", "validate-email"],
  ["validatePhone", "validate-phone"],
  ["validateUrl", "validate-url"],
  ["validateDate", "validate-date"],

  // Security parameters
  ["authToken", "auth-token"],
  ["accessToken", "access-token"],
  ["refreshToken", "refresh-token"],
  ["apiKey", "api-key"],
  ["secretKey", "secret-key"],
  ["publicKey", "public-key"],
  ["privateKey", "private-key"],
  ["encryptionKey", "encryption-key"],

  // File and path parameters
  ["filePath", "file-path"],
  ["fileName", "file-name"],
  ["fileSize", "file-size"],
  ["fileType", "file-type"],
  ["mimeType", "mime-type"],
  ["uploadDir", "upload-dir"],
  ["downloadUrl", "download-url"],
  ["fileExtension", "file-extension"],

  // Database parameters
  ["tableName", "table-name"],
  ["columnName", "column-name"],
  ["indexName", "index-name"],
  ["foreignKey", "foreign-key"],
  ["primaryKey", "primary-key"],
  ["databaseName", "database-name"],
  ["schemaName", "schema-name"],
  ["viewName", "view-name"],

  // Performance parameters
  ["loadTime", "load-time"],
  ["responseTime", "response-time"],
  ["executionTime", "execution-time"],
  ["cacheHitRate", "cache-hit-rate"],
  ["memoryUsage", "memory-usage"],
  ["cpuUsage", "cpu-usage"],
  ["diskUsage", "disk-usage"],
  ["networkLatency", "network-latency"],

  // Monitoring parameters
  ["healthCheck", "health-check"],
  ["statusCode", "status-code"],
  ["errorMessage", "error-message"],
  ["warningLevel", "warning-level"],
  ["logLevel", "log-level"],
  ["alertType", "alert-type"],
  ["metricName", "metric-name"],
  ["thresholdValue", "threshold-value"],
];

describe("param case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(paramCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => paramCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => paramCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "very ".repeat(1000) + "long string";
      const result = paramCase(longString);
      expect(result).toBe("very-".repeat(1000) + "long-string");
    });
  });
});
