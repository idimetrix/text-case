import { upperCaseFirst } from ".";

const TEST_CASES: [string, string][] = [
  // Basic transformations
  ["", ""],
  ["a", "A"],
  ["A", "A"],
  ["z", "Z"],
  ["Z", "Z"],
  ["hello", "Hello"],
  ["Hello", "Hello"],
  ["HELLO", "HELLO"],
  ["hello world", "Hello world"],
  ["Hello World", "Hello World"],
  ["HELLO WORLD", "HELLO WORLD"],

  // Single characters
  ["a", "A"],
  ["b", "B"],
  ["c", "C"],
  ["x", "X"],
  ["y", "Y"],
  ["z", "Z"],
  ["A", "A"],
  ["B", "B"],
  ["C", "C"],

  // Numbers and special characters (first char unchanged if not letter)
  ["1", "1"],
  ["123", "123"],
  ["1hello", "1hello"],
  ["2world", "2world"],
  ["9test", "9test"],
  ["_test", "_test"],
  ["-hello", "-hello"],
  [".world", ".world"],
  ["/path", "/path"],
  ["@email", "@email"],
  ["#tag", "#tag"],
  ["$money", "$money"],
  ["%percent", "%percent"],

  // Mixed case scenarios
  ["abc", "Abc"],
  ["abC", "AbC"],
  ["abc123", "Abc123"],
  ["test123", "Test123"],
  ["xmlHttpRequest", "XmlHttpRequest"],
  ["iPhone", "IPhone"],
  ["iPad", "IPad"],
  ["macOS", "MacOS"],

  // Camel case inputs
  ["camelCase", "CamelCase"],
  ["pascalCase", "PascalCase"],
  ["mixedCASE", "MixedCASE"],
  ["testString", "TestString"],
  ["TestString", "TestString"],
  ["myVariable", "MyVariable"],
  ["MyVariable", "MyVariable"],

  // Snake case inputs
  ["snake_case", "Snake_case"],
  ["snake_CASE", "Snake_CASE"],
  ["Snake_Case", "Snake_Case"],
  ["test_case", "Test_case"],
  ["test_CASE", "Test_CASE"],
  ["Test_Case", "Test_Case"],

  // Kebab case inputs
  ["kebab-case", "Kebab-case"],
  ["kebab-CASE", "Kebab-CASE"],
  ["Kebab-Case", "Kebab-Case"],
  ["test-case", "Test-case"],
  ["test-CASE", "Test-CASE"],
  ["Test-Case", "Test-Case"],

  // Constants and environment variables
  ["constant_value", "Constant_value"],
  ["max_value", "Max_value"],
  ["min_value", "Min_value"],
  ["node_env", "Node_env"],
  ["api_key", "Api_key"],
  ["database_url", "Database_url"],
  ["secret_key", "Secret_key"],

  // Acronyms and abbreviations
  ["api", "Api"],
  ["url", "Url"],
  ["html", "Html"],
  ["css", "Css"],
  ["json", "Json"],
  ["xml", "Xml"],
  ["http", "Http"],
  ["https", "Https"],
  ["ftp", "Ftp"],
  ["ssh", "Ssh"],

  // Unicode and international characters
  ["á", "Á"],
  ["é", "É"],
  ["ñ", "Ñ"],
  ["ü", "Ü"],
  ["café", "Café"],
  ["café", "Café"],
  ["münchen", "München"],
  ["münchen", "München"],
  ["naïve", "Naïve"],
  ["naïve", "Naïve"],

  // Programming terms
  ["class", "Class"],
  ["class", "Class"],
  ["function", "Function"],
  ["function", "Function"],
  ["variable", "Variable"],
  ["variable", "Variable"],
  ["method", "Method"],
  ["method", "Method"],
  ["property", "Property"],
  ["property", "Property"],

  // Company and brand names
  ["ibm", "Ibm"],
  ["nasa", "Nasa"],
  ["fbi", "Fbi"],
  ["cia", "Cia"],
  ["usa", "Usa"],
  ["microsoft", "Microsoft"],
  ["google", "Google"],
  ["apple", "Apple"],
  ["amazon", "Amazon"],
  ["facebook", "Facebook"],

  // File extensions
  ["txt", "Txt"],
  ["pdf", "Pdf"],
  ["doc", "Doc"],
  ["xls", "Xls"],
  ["ppt", "Ppt"],
  ["jpg", "Jpg"],
  ["png", "Png"],
  ["gif", "Gif"],
  ["mp3", "Mp3"],
  ["mp4", "Mp4"],

  // Status codes and responses
  ["ok", "Ok"],
  ["error", "Error"],
  ["success", "Success"],
  ["failed", "Failed"],
  ["warning", "Warning"],
  ["info", "Info"],
  ["debug", "Debug"],
  ["trace", "Trace"],

  // Database terms
  ["select", "Select"],
  ["insert", "Insert"],
  ["update", "Update"],
  ["delete", "Delete"],
  ["create", "Create"],
  ["drop", "Drop"],
  ["alter", "Alter"],
  ["index", "Index"],

  // Configuration values
  ["true", "True"],
  ["false", "False"],
  ["null", "Null"],
  ["undefined", "Undefined"],
  ["True", "True"],
  ["False", "False"],
  ["Null", "Null"],
  ["Undefined", "Undefined"],

  // Programming languages
  ["javascript", "Javascript"],
  ["javascript", "Javascript"],
  ["typescript", "Typescript"],
  ["typescript", "Typescript"],
  ["python", "Python"],
  ["python", "Python"],
  ["java", "Java"],
  ["java", "Java"],

  // Framework names
  ["react", "React"],
  ["react", "React"],
  ["angular", "Angular"],
  ["angular", "Angular"],
  ["vue", "Vue"],
  ["vue", "Vue"],
  ["express", "Express"],
  ["express", "Express"],

  // Database names
  ["mysql", "Mysql"],
  ["mysql", "Mysql"],
  ["postgresql", "Postgresql"],
  ["postgresql", "Postgresql"],
  ["mongodb", "Mongodb"],
  ["mongodb", "Mongodb"],
  ["redis", "Redis"],
  ["redis", "Redis"],

  // Cloud providers
  ["aws", "Aws"],
  ["azure", "Azure"],
  ["azure", "Azure"],
  ["gcp", "Gcp"],
  ["heroku", "Heroku"],
  ["heroku", "Heroku"],

  // Error codes
  ["e404", "E404"],
  ["e500", "E500"],
  ["err001", "Err001"],
  ["warn001", "Warn001"],

  // Version identifiers
  ["v1", "V1"],
  ["v2_0", "V2_0"],
  ["version_1_0", "Version_1_0"],
  ["release_candidate", "Release_candidate"],

  // Operating systems
  ["windows", "Windows"],
  ["windows", "Windows"],
  ["linux", "Linux"],
  ["linux", "Linux"],
  ["macOS", "MacOS"],
  ["macOS", "MacOS"],
  ["ubuntu", "Ubuntu"],
  ["ubuntu", "Ubuntu"],

  // Security levels
  ["public", "Public"],
  ["public", "Public"],
  ["private", "Private"],
  ["private", "Private"],
  ["protected", "Protected"],
  ["protected", "Protected"],
  ["confidential", "Confidential"],
  ["confidential", "Confidential"],

  // Real world examples
  ["getElementById", "GetElementById"],
  ["querySelector", "QuerySelector"],
  ["addEventListener", "AddEventListener"],
  ["createElement", "CreateElement"],
  ["appendChild", "AppendChild"],
  ["removeChild", "RemoveChild"],
  ["innerHTML", "InnerHTML"],
  ["outerHTML", "OuterHTML"],
  ["textContent", "TextContent"],
  ["className", "ClassName"],

  // Package names
  ["lodash", "Lodash"],
  ["express", "Express"],
  ["react", "React"],
  ["webpack", "Webpack"],
  ["babel", "Babel"],
  ["eslint", "Eslint"],
  ["prettier", "Prettier"],
  ["typescript", "Typescript"],
  ["nodemon", "Nodemon"],
  ["jest", "Jest"],

  // Technical terms
  ["database", "Database"],
  ["server", "Server"],
  ["client", "Client"],
  ["frontend", "Frontend"],
  ["backend", "Backend"],
  ["middleware", "Middleware"],
  ["authentication", "Authentication"],
  ["authorization", "Authorization"],
  ["encryption", "Encryption"],
  ["decryption", "Decryption"],

  // Whitespace variations
  [" hello", " hello"],
  ["  world", "  world"],
  ["   test", "   test"],
  ["\ttab", "\ttab"],
  ["\nnewline", "\nnewline"],
  [" a", " a"],
  ["  b", "  b"],

  // Complex mixed cases
  ["xmlParser", "XmlParser"],
  ["htmlDocument", "HtmlDocument"],
  ["cssStyleSheet", "CssStyleSheet"],
  ["jsonData", "JsonData"],
  ["apiKey", "ApiKey"],
  ["urlPath", "UrlPath"],
  ["webAPI", "WebAPI"],
  ["dataJSON", "DataJSON"],
  ["fileHTML", "FileHTML"],

  // Punctuation and special strings
  ["hello!", "Hello!"],
  ["world?", "World?"],
  ["test.", "Test."],
  ["data,", "Data,"],
  ["value;", "Value;"],
  ["key:", "Key:"],
  ["name=", "Name="],
  ["id+", "Id+"],
  ["code*", "Code*"],
  ["path&", "Path&"],

  // Words with apostrophes
  ["don't", "Don't"],
  ["can't", "Can't"],
  ["won't", "Won't"],
  ["it's", "It's"],
  ["we're", "We're"],
  ["they're", "They're"],
  ["you're", "You're"],
  ["i'm", "I'm"],

  // Multiple word combinations
  ["hello world", "Hello world"],
  ["good morning", "Good morning"],
  ["thank you", "Thank you"],
  ["welcome back", "Welcome back"],
  ["see you later", "See you later"],
  ["have a nice day", "Have a nice day"],
  ["once upon a time", "Once upon a time"],

  // Technical documentation terms
  ["readme", "Readme"],
  ["changelog", "Changelog"],
  ["license", "License"],
  ["installation", "Installation"],
  ["configuration", "Configuration"],
  ["troubleshooting", "Troubleshooting"],
  ["documentation", "Documentation"],
  ["examples", "Examples"],
  ["tutorial", "Tutorial"],
  ["quickstart", "Quickstart"],

  // File and folder names
  ["src", "Src"],
  ["dist", "Dist"],
  ["build", "Build"],
  ["public", "Public"],
  ["assets", "Assets"],
  ["components", "Components"],
  ["services", "Services"],
  ["utils", "Utils"],
  ["helpers", "Helpers"],
  ["config", "Config"],

  // HTTP methods
  ["get", "Get"],
  ["post", "Post"],
  ["put", "Put"],
  ["delete", "Delete"],
  ["patch", "Patch"],
  ["head", "Head"],
  ["options", "Options"],
  ["trace", "Trace"],
  ["connect", "Connect"],

  // Data formats
  ["json", "Json"],
  ["xml", "Xml"],
  ["yaml", "Yaml"],
  ["csv", "Csv"],
  ["toml", "Toml"],
  ["ini", "Ini"],
  ["properties", "Properties"],
  ["conf", "Conf"],

  // Package managers
  ["npm", "Npm"],
  ["yarn", "Yarn"],
  ["pip", "Pip"],
  ["composer", "Composer"],
  ["gem", "Gem"],
  ["cargo", "Cargo"],
  ["go get", "Go get"],
  ["maven", "Maven"],
  ["gradle", "Gradle"],

  // Development tools
  ["git", "Git"],
  ["docker", "Docker"],
  ["kubernetes", "Kubernetes"],
  ["terraform", "Terraform"],
  ["ansible", "Ansible"],
  ["jenkins", "Jenkins"],
  ["circleci", "Circleci"],
  ["github", "Github"],
  ["gitlab", "Gitlab"],
  ["bitbucket", "Bitbucket"],
];

describe("upper case first", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(upperCaseFirst(input)).toEqual(result);
    });
  }

  describe("error handling", () => {
    it("should handle null input gracefully", () => {
      expect(() => upperCaseFirst(null as any)).not.toThrow();
    });

    it("should handle undefined input gracefully", () => {
      expect(() => upperCaseFirst(undefined as any)).not.toThrow();
    });
  });

  describe("performance", () => {
    it("should handle very long strings", () => {
      const longString = "a" + "b".repeat(9999);
      const result = upperCaseFirst(longString);
      expect(result).toBe("A" + "b".repeat(9999));
    });

    it("should handle very long strings starting with uppercase", () => {
      const longString = "A" + "b".repeat(9999);
      const result = upperCaseFirst(longString);
      expect(result).toBe(longString);
    });
  });
});
