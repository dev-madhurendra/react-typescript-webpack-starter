export default {
    // All imported modules in your tests should be mocked automatically
    // automock: false,
  
    // Stop running tests after `n` failures
    // bail: 0,
  
    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "C:\\Users\\jeeva\\AppData\\Local\\Temp\\jest",
  
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,
  
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
  
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,
  
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
          "<rootDir>/test/jest/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/test/jest/__mocks__/styleMock.js",
      },
    };