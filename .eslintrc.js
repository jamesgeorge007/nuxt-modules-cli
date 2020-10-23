module.exports = {
  extends: ["eslint:recommended", "prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    "no-console": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "all",
      },
    ],
    eqeqeq: ["error", "always"],
  },
};
