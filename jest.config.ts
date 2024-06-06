/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },

  testEnvironment: "jsdom",
};

export default config;
