import type {Config} from 'jest';
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/**/*.{ts,tsx}",
      "!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}",
      "!src/declare.d.ts",
      "!src/App.tsx",
      "!src/index.tsx",
    ],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
      "^.+\\.css$": "jest-transform-stub",
      "^.+\\.png$": "jest-transform-stub",
    },
    moduleNameMapper: {
      "^.+\\.(svg|gif)$": "jest-svg-transformer",
      "\\.(css)$": "identity-obj-proxy",
      '^d3-color$': '<rootDir>/node_modules/d3-color/dist/d3-color.min.js',
    },
  };
