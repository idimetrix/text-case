import { lowerCaseFirst } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["A", "a"],
  ["a", "a"],
  ["Z", "z"],
  ["z", "z"],
  ["Hello", "hello"],
  ["HELLO", "hELLO"],
  ["hello", "hello"],
  ["Hello World", "hello World"],
  ["HELLO WORLD", "hELLO WORLD"],
  ["hello world", "hello world"],

  // Single characters
  ["A", "a"],
  ["B", "b"],
  ["C", "c"],
  ["X", "x"],
  ["Y", "y"],
  ["Z", "z"],
  ["a", "a"],
  ["b", "b"],
  ["c", "c"],

  // Numbers and special characters (first char unchanged if not letter)
  ["1", "1"],
  ["123", "123"],
  ["1Hello", "1Hello"],
  ["2WORLD", "2WORLD"],
  ["9test", "9test"],
  ["_Test", "_Test"],
  ["-Hello", "-Hello"],
  [".World", ".World"],
  ["/Path", "/Path"],
  ["@Email", "@Email"],
  ["#Tag", "#Tag"],
  ["$Money", "$Money"],
  ["%Percent", "%Percent"],

  // Mixed case scenarios
  ["ABC", "aBC"],
  ["AbC", "abC"],
  ["ABC123", "aBC123"],
  ["Test123", "test123"],
  ["XMLHttpRequest", "xMLHttpRequest"],
  ["iPhone", "iPhone"],
  ["iPad", "iPad"],
  ["macOS", "macOS"],

  // Camel case inputs
  ["camelCase", "camelCase"],
  ["PascalCase", "pascalCase"],
  ["mixedCASE", "mixedCASE"],
  ["testString", "testString"],
  ["TestString", "testString"],
  ["myVariable", "myVariable"],
  ["MyVariable", "myVariable"],

  // Snake case inputs
  ["snake_case", "snake_case"],
  ["SNAKE_CASE", "sNAKE_CASE"],
  ["Snake_Case", "snake_Case"],
  ["test_case", "test_case"],
  ["TEST_CASE", "tEST_CASE"],
  ["Test_Case", "test_Case"],

  // Kebab case inputs
  ["kebab-case", "kebab-case"],
  ["KEBAB-CASE", "kEBAB-CASE"],
  ["Kebab-Case", "kebab-Case"],
  ["test-case", "test-case"],
  ["TEST-CASE", "tEST-CASE"],
  ["Test-Case", "test-Case"],

  // Constants and environment variables
  ["CONSTANT_VALUE", "cONSTANT_VALUE"],
  ["MAX_VALUE", "mAX_VALUE"],
  ["MIN_VALUE", "mIN_VALUE"],
  ["NODE_ENV", "nODE_ENV"],
  ["API_KEY", "aPI_KEY"],
  ["DATABASE_URL", "dATABASE_URL"],
  ["SECRET_KEY", "sECRET_KEY"],

  // Acronyms and abbreviations
  ["API", "aPI"],
  ["URL", "uRL"],
  ["HTML", "hTML"],
  ["CSS", "cSS"],
  ["JSON", "jSON"],
  ["XML", "xML"],
  ["HTTP", "hTTP"],
  ["HTTPS", "hTTPS"],
  ["FTP", "fTP"],
  ["SSH", "sSH"],

  // Unicode and international characters
  ["Á", "á"],
  ["É", "é"],
  ["Ñ", "ñ"],
  ["Ü", "ü"],
  ["Café", "café"],
  ["CAFÉ", "cAFÉ"],
  ["München", "münchen"],
  ["MÜNCHEN", "mÜNCHEN"],
  ["Naïve", "naïve"],
  ["NAÏVE", "nAÏVE"],

  // Programming terms
  ["Class", "class"],
  ["CLASS", "cLASS"],
  ["Function", "function"],
  ["FUNCTION", "fUNCTION"],
  ["Variable", "variable"],
  ["VARIABLE", "vARIABLE"],
  ["Method", "method"],
  ["METHOD", "mETHOD"],
  ["Property", "property"],
  ["PROPERTY", "pROPERTY"],

  // Company and brand names
  ["IBM", "iBM"],
  ["NASA", "nASA"],
  ["FBI", "fBI"],
  ["CIA", "cIA"],
  ["USA", "uSA"],
  ["Microsoft", "microsoft"],
  ["Google", "google"],
  ["Apple", "apple"],
  ["Amazon", "amazon"],
  ["Facebook", "facebook"],

  // File extensions
  ["TXT", "tXT"],
  ["PDF", "pDF"],
  ["DOC", "dOC"],
  ["XLS", "xLS"],
  ["PPT", "pPT"],
  ["JPG", "jPG"],
  ["PNG", "pNG"],
  ["GIF", "gIF"],
  ["MP3", "mP3"],
  ["MP4", "mP4"],

  // Status codes and responses
  ["OK", "oK"],
  ["ERROR", "eRROR"],
  ["SUCCESS", "sUCCESS"],
  ["FAILED", "fAILED"],
  ["Warning", "warning"],
  ["Info", "info"],
  ["Debug", "debug"],
  ["Trace", "trace"],

  // Database terms
  ["SELECT", "sELECT"],
  ["INSERT", "iNSERT"],
  ["UPDATE", "uPDATE"],
  ["DELETE", "dELETE"],
  ["CREATE", "cREATE"],
  ["DROP", "dROP"],
  ["ALTER", "aLTER"],
  ["INDEX", "iNDEX"],

  // Configuration values
  ["TRUE", "tRUE"],
  ["FALSE", "fALSE"],
  ["NULL", "nULL"],
  ["UNDEFINED", "uNDEFINED"],
  ["True", "true"],
  ["False", "false"],
  ["Null", "null"],
  ["Undefined", "undefined"],

  // Programming languages
  ["JavaScript", "javaScript"],
  ["JAVASCRIPT", "jAVASCRIPT"],
  ["TypeScript", "typeScript"],
  ["TYPESCRIPT", "tYPESCRIPT"],
  ["Python", "python"],
  ["PYTHON", "pYTHON"],
  ["Java", "java"],
  ["JAVA", "jAVA"],

  // Framework names
  ["React", "react"],
  ["REACT", "rEACT"],
  ["Angular", "angular"],
  ["ANGULAR", "aNGULAR"],
  ["Vue", "vue"],
  ["VUE", "vUE"],
  ["Express", "express"],
  ["EXPRESS", "eXPRESS"],

  // Database names
  ["MySQL", "mySQL"],
  ["MYSQL", "mYSQL"],
  ["PostgreSQL", "postgreSQL"],
  ["POSTGRESQL", "pOSTGRESQL"],
  ["MongoDB", "mongoDB"],
  ["MONGODB", "mONGODB"],
  ["Redis", "redis"],
  ["REDIS", "rEDIS"],

  // Cloud providers
  ["AWS", "aWS"],
  ["Azure", "azure"],
  ["AZURE", "aZURE"],
  ["GCP", "gCP"],
  ["Heroku", "heroku"],
  ["HEROKU", "hEROKU"],

  // Error codes
  ["E404", "e404"],
  ["E500", "e500"],
  ["ERR001", "eRR001"],
  ["WARN001", "wARN001"],

  // Version identifiers
  ["V1", "v1"],
  ["V2_0", "v2_0"],
  ["VERSION_1_0", "vERSION_1_0"],
  ["RELEASE_CANDIDATE", "rELEASE_CANDIDATE"],

  // Operating systems
  ["Windows", "windows"],
  ["WINDOWS", "wINDOWS"],
  ["Linux", "linux"],
  ["LINUX", "lINUX"],
  ["MacOS", "macOS"],
  ["MACOS", "mACOS"],
  ["Ubuntu", "ubuntu"],
  ["UBUNTU", "uBUNTU"],

  // Security levels
  ["Public", "public"],
  ["PUBLIC", "pUBLIC"],
  ["Private", "private"],
  ["PRIVATE", "pRIVATE"],
  ["Protected", "protected"],
  ["PROTECTED", "pROTECTED"],
  ["Confidential", "confidential"],
  ["CONFIDENTIAL", "cONFIDENTIAL"],

  // Real world examples
  ["GetElementById", "getElementById"],
  ["QuerySelector", "querySelector"],
  ["AddEventListener", "addEventListener"],
  ["CreateElement", "createElement"],
  ["AppendChild", "appendChild"],
  ["RemoveChild", "removeChild"],
  ["InnerHTML", "innerHTML"],
  ["OuterHTML", "outerHTML"],
  ["TextContent", "textContent"],
  ["ClassName", "className"],

  // Package names
  ["Lodash", "lodash"],
  ["Express", "express"],
  ["React", "react"],
  ["Webpack", "webpack"],
  ["Babel", "babel"],
  ["ESLint", "eSLint"],
  ["Prettier", "prettier"],
  ["TypeScript", "typeScript"],
  ["Nodemon", "nodemon"],
  ["Jest", "jest"],

  // Technical terms
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

  // Whitespace variations
  [" Hello", " Hello"],
  ["  World", "  World"],
  ["   Test", "   Test"],
  ["\tTab", "\tTab"],
  ["\nNewline", "\nNewline"],
  [" A", " A"],
  ["  B", "  B"],

  // Complex mixed cases
  ["XMLParser", "xMLParser"],
  ["HTMLDocument", "hTMLDocument"],
  ["CSSStyleSheet", "cSSStyleSheet"],
  ["JSONData", "jSONData"],
  ["APIKey", "aPIKey"],
  ["URLPath", "uRLPath"],
  ["WebAPI", "webAPI"],
  ["DataJSON", "dataJSON"],
  ["FileHTML", "fileHTML"],

  // Punctuation and special strings
  ["Hello!", "hello!"],
  ["WORLD?", "wORLD?"],
  ["Test.", "test."],
  ["Data,", "data,"],
  ["Value;", "value;"],
  ["Key:", "key:"],
  ["Name=", "name="],
  ["Id+", "id+"],
  ["Code*", "code*"],
  ["Path&", "path&"],
];

describe("lower case first", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(lowerCaseFirst(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => lowerCaseFirst(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => lowerCaseFirst(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "A" + "a".repeat(9999);
      const result = lowerCaseFirst(longString);
      expect(result).toBe("a" + "a".repeat(9999));
    });

    it("should handle very long strings starting with lowercase", () => {
      const longString = "a".repeat(10000);
      const result = lowerCaseFirst(longString);
      expect(result).toBe(longString);
    });
  });
});
