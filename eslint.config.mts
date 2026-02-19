/**
 * @file eslint.config.mts
 * @brief ESLint flat configuration for TypeScript and NestJS.
 * @details Defines rules for TypeScript and Prettier compatibility.
 * @author Victor Yeh
 * @date 2026-02-19
 * @copyright MIT Licence.
 */

import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import type { Linter } from "eslint";

const tsconfigRootDir: string = process.cwd();

const parserOptions: Linter.ParserOptions = {
  project: "./tsconfig.json",
  tsconfigRootDir,
};

const globals: Linter.Globals = {
  process: "readonly",
  console: "readonly",
  describe: "readonly",
  it: "readonly",
  test: "readonly",
  expect: "readonly",
  beforeAll: "readonly",
  afterAll: "readonly",
  beforeEach: "readonly",
  afterEach: "readonly",
};

const typeScriptConfig: Linter.Config = {
  files: ["**/*.ts"],
  languageOptions: {
    parser: tsparser,
    parserOptions,
    globals,
  },
  plugins: {
    "@typescript-eslint": tseslint,
    prettier,
  },
  rules: {
    ...tseslint.configs.recommended.rules,
    "prettier/prettier": "warn",
  },
};

const config: Linter.Config[] = [
  eslint.configs.recommended,
  prettierConfig as Linter.Config,
  typeScriptConfig,
];

export default config;
