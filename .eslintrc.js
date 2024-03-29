module.exports = {
  env: {
    mocha: true
  },
  rules: {
    "no-console": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    quotes: "double"
  },
  extends: ["airbnb-base", "eslint:recommended", "plugin:react/recommended"]
};
