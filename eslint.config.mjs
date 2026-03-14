import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,

  {
    rules: {
      // Add specific Standard rules here, e.g.,
      semi: ["error", "never"], // No semicolons
      quotes: ["error", "single"], // Single quotes
      // etc.
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
