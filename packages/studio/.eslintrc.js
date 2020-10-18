module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react"],
  parserOptions: {
    sourceType: "module", // Allows for the use of imports
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
  },
  rules: {
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
  },
};
