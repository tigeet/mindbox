import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",

    "\\.svg$": "<rootDir>/__mocks__/svg.js",
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/css.js",
  },

  testEnvironment: "jsdom",
};

export default config;
