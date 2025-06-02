import { swapCase } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["a", "A"],
  ["A", "a"],
  ["z", "Z"],
  ["Z", "z"],
  ["hello", "HELLO"],
  ["HELLO", "hello"],
  ["Hello", "hELLO"],
  ["hello world", "HELLO WORLD"],
  ["Hello World", "hELLO wORLD"],
  ["HELLO WORLD", "hello world"],

  // Mixed case scenarios
  ["hELLo", "HellO"],
  ["HeLLo", "hElLO"],
  ["heLLo", "HEllO"],
  ["aBc", "AbC"],
  ["AbC", "aBc"],
  ["aBcD", "AbCd"],
  ["AbCd", "aBcD"],

  // Numbers and special characters (unchanged)
  ["123", "123"],
  ["a123", "A123"],
  ["A123", "a123"],
  ["123a", "123A"],
  ["123A", "123a"],
  ["a123b", "A123B"],
  ["A123B", "a123b"],
  ["a_b", "A_B"],
  ["A_B", "a_b"],
  ["a-b", "A-B"],
  ["A-B", "a-b"],

  // Special characters only (unchanged)
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

  // Whitespace variations
  [" ", " "],
  ["  ", "  "],
  ["   ", "   "],
  [" a ", " A "],
  [" A ", " a "],
  [" ab ", " AB "],
  [" AB ", " ab "],
  [" abc ", " ABC "],
  [" ABC ", " abc "],
  ["a b", "A B"],
  ["A B", "a b"],

  // Programming terms
  ["class", "CLASS"],
  ["CLASS", "class"],
  ["Class", "cLASS"],
  ["function", "FUNCTION"],
  ["FUNCTION", "function"],
  ["Function", "fUNCTION"],
  ["variable", "VARIABLE"],
  ["VARIABLE", "variable"],
  ["Variable", "vARIABLE"],

  // Camel case inputs
  ["camelCase", "CAMELcASE"],
  ["PascalCase", "pASCALcASE"],
  ["mixedCASE", "MIXEDcase"],
  ["XMLHttpRequest", "xmlhTTPrEQUEST"],
  ["iPhone", "IpHONE"],
  ["iPad", "IpAD"],
  ["macOS", "MACos"],

  // Snake case inputs
  ["snake_case", "SNAKE_CASE"],
  ["SNAKE_CASE", "snake_case"],
  ["Snake_Case", "sNAKE_cASE"],
  ["test_case", "TEST_CASE"],
  ["TEST_CASE", "test_case"],
  ["Test_Case", "tEST_cASE"],

  // Kebab case inputs
  ["kebab-case", "KEBAB-CASE"],
  ["KEBAB-CASE", "kebab-case"],
  ["Kebab-Case", "kEBAB-cASE"],
  ["test-case", "TEST-CASE"],
  ["TEST-CASE", "test-case"],
  ["Test-Case", "tEST-cASE"],

  // Constants
  ["CONSTANT_VALUE", "constant_value"],
  ["constant_value", "CONSTANT_VALUE"],
  ["Constant_Value", "cONSTANT_vALUE"],
  ["MAX_VALUE", "max_value"],
  ["max_value", "MAX_VALUE"],
  ["Max_Value", "mAX_vALUE"],

  // Acronyms and abbreviations
  ["API", "api"],
  ["api", "API"],
  ["Api", "aPi"],
  ["URL", "url"],
  ["url", "URL"],
  ["Url", "uRL"],
  ["HTML", "html"],
  ["html", "HTML"],
  ["Html", "hTML"],
  ["CSS", "css"],
  ["css", "CSS"],
  ["Css", "cSS"],
  ["JSON", "json"],
  ["json", "JSON"],
  ["Json", "jSON"],
  ["XML", "xml"],
  ["xml", "XML"],
  ["Xml", "xML"],

  // Unicode and international characters
  ["á", "Á"],
  ["Á", "á"],
  ["é", "É"],
  ["É", "é"],
  ["ñ", "Ñ"],
  ["Ñ", "ñ"],
  ["ü", "Ü"],
  ["Ü", "ü"],
  ["café", "CAFÉ"],
  ["CAFÉ", "café"],
  ["Café", "cAFÉ"],
  ["münchen", "MÜNCHEN"],
  ["MÜNCHEN", "münchen"],
  ["München", "mÜNCHEN"],

  // Company and brand names
  ["IBM", "ibm"],
  ["ibm", "IBM"],
  ["Ibm", "iBM"],
  ["NASA", "nasa"],
  ["nasa", "NASA"],
  ["Nasa", "nASA"],
  ["FBI", "fbi"],
  ["fbi", "FBI"],
  ["Fbi", "fBI"],
  ["CIA", "cia"],
  ["cia", "CIA"],
  ["Cia", "cIA"],
  ["USA", "usa"],
  ["usa", "USA"],
  ["Usa", "uSA"],

  // File extensions
  ["TXT", "txt"],
  ["txt", "TXT"],
  ["Txt", "tXT"],
  ["PDF", "pdf"],
  ["pdf", "PDF"],
  ["Pdf", "pDF"],
  ["DOC", "doc"],
  ["doc", "DOC"],
  ["Doc", "dOC"],
  ["XLS", "xls"],
  ["xls", "XLS"],
  ["Xls", "xLS"],

  // Protocol names
  ["HTTP", "http"],
  ["http", "HTTP"],
  ["Http", "hTTP"],
  ["HTTPS", "https"],
  ["https", "HTTPS"],
  ["Https", "hTTPS"],
  ["FTP", "ftp"],
  ["ftp", "FTP"],
  ["Ftp", "fTP"],
  ["SSH", "ssh"],
  ["ssh", "SSH"],
  ["Ssh", "sSH"],

  // Status codes and responses
  ["OK", "ok"],
  ["ok", "OK"],
  ["Ok", "oK"],
  ["ERROR", "error"],
  ["error", "ERROR"],
  ["Error", "eRROR"],
  ["SUCCESS", "success"],
  ["success", "SUCCESS"],
  ["Success", "sUCCESS"],
  ["FAILED", "failed"],
  ["failed", "FAILED"],
  ["Failed", "fAILED"],

  // Database terms
  ["SELECT", "select"],
  ["select", "SELECT"],
  ["Select", "sELECT"],
  ["INSERT", "insert"],
  ["insert", "INSERT"],
  ["Insert", "iNSERT"],
  ["UPDATE", "update"],
  ["update", "UPDATE"],
  ["Update", "uPDATE"],
  ["DELETE", "delete"],
  ["delete", "DELETE"],
  ["Delete", "dELETE"],

  // Configuration values
  ["TRUE", "true"],
  ["true", "TRUE"],
  ["True", "tRUE"],
  ["FALSE", "false"],
  ["false", "FALSE"],
  ["False", "fALSE"],
  ["NULL", "null"],
  ["null", "NULL"],
  ["Null", "nULL"],
  ["UNDEFINED", "undefined"],
  ["undefined", "UNDEFINED"],
  ["Undefined", "uNDEFINED"],

  // Programming languages
  ["JavaScript", "jAVAsCRIPT"],
  ["JAVASCRIPT", "javascript"],
  ["javascript", "JAVASCRIPT"],
  ["TypeScript", "tYPEsCRIPT"],
  ["TYPESCRIPT", "typescript"],
  ["typescript", "TYPESCRIPT"],
  ["Python", "pYTHON"],
  ["PYTHON", "python"],
  ["python", "PYTHON"],
  ["Java", "jAVA"],
  ["JAVA", "java"],
  ["java", "JAVA"],

  // Framework names
  ["React", "rEACT"],
  ["REACT", "react"],
  ["react", "REACT"],
  ["Angular", "aNGULAR"],
  ["ANGULAR", "angular"],
  ["angular", "ANGULAR"],
  ["Vue", "vUE"],
  ["VUE", "vue"],
  ["vue", "VUE"],
  ["Express", "eXPRESS"],
  ["EXPRESS", "express"],
  ["express", "EXPRESS"],

  // Database names
  ["MySQL", "mySQL"],
  ["MYSQL", "mysql"],
  ["mysql", "MYSQL"],
  ["PostgreSQL", "postgreSQL"],
  ["POSTGRESQL", "postgresql"],
  ["postgresql", "POSTGRESQL"],
  ["MongoDB", "mongoDb"],
  ["MONGODB", "mongodb"],
  ["mongodb", "MONGODB"],
  ["Redis", "rEDIS"],
  ["REDIS", "redis"],
  ["redis", "REDIS"],

  // Cloud providers
  ["AWS", "aws"],
  ["aws", "AWS"],
  ["Aws", "aWS"],
  ["Azure", "aZURE"],
  ["AZURE", "azure"],
  ["azure", "AZURE"],
  ["GCP", "gcp"],
  ["gcp", "GCP"],
  ["Gcp", "gCP"],
  ["Heroku", "hEROKU"],
  ["HEROKU", "heroku"],
  ["heroku", "HEROKU"],

  // Complex mixed cases
  ["XMLHttpRequest", "xmlhTTPrEQUEST"],
  ["htmlParser", "HTMLpARSER"],
  ["cssLoader", "CSSlOADER"],
  ["jsonData", "JSONdATA"],
  ["apiKey", "APIkEY"],
  ["urlPath", "URLpATH"],
  ["webAPI", "WEBapi"],
  ["dataJSON", "DATAjson"],
  ["fileHTML", "FILEhtml"],
  ["cssStyleSheet", "CSSsTYLEsHEET"],

  // Real world examples
  ["getElementById", "GETeLEMENTbYiD"],
  ["querySelector", "QUERYsELECTOR"],
  ["addEventListener", "ADDeVENTlISTENER"],
  ["createElement", "CREATEeLEMENT"],
  ["appendChild", "APPENDcHILD"],
  ["removeChild", "REMOVEcHILD"],
  ["innerHTML", "INNERhtml"],
  ["outerHTML", "OUTERhtml"],
  ["textContent", "TEXTcONTENT"],
  ["className", "CLASSnAME"],

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

describe("swap case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(swapCase(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => swapCase(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => swapCase(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "a".repeat(10000);
      const result = swapCase(longString);
      expect(result).toBe("A".repeat(10000));
    });

    it("should handle very long mixed case strings", () => {
      const longMixedString = "aA".repeat(5000);
      const expectedResult = "Aa".repeat(5000);
      const result = swapCase(longMixedString);
      expect(result).toBe(expectedResult);
    });
  });
});
