module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "indent": [ "error", 2, {
      "SwitchCase": 1
    } ],
    // "linebreak-style": [ "error", "unix" ],
    "eol-last": [ "error", "always" ],
    "quotes": [ "error", "single" ],
    "no-extra-parens": [ "error" ],
    "func-style": [ "error", "declaration" ],
    "prefer-arrow-callback": [ "error", { "allowNamedFunctions": false, "allowUnboundThis": false } ],
    "no-unsafe-negation": [ "error" ],
    "no-alert": [ "warn" ],
    "object-shorthand": [ "error", "always" ],
    "no-console": [ "warn" ],
    "no-var": [ "error" ],
    "semi": [ "error", "always" ],
    "camelcase": [ "error", { "properties": "never" } ],
    "dot-notation": [ "error" ],
    "comma-dangle": [ "error", "never" ],
    "no-multiple-empty-lines": [ "error", { "max": 1 } ],
    "no-multi-spaces": [ "error" ],
    "vars-on-top": [ "error" ],
    "func-call-spacing": [ "error", "never" ],
    "block-spacing": [ "error", "always" ],
    "space-in-parens": [ "error", "never" ],
    "space-before-function-paren": [ "error", "never" ],
    "array-bracket-spacing": [ "error", "always" ],
    "key-spacing": [ "error" ],
    "space-before-blocks": [ "error", "always" ],
    "eqeqeq": [ "error", "always" ],
    "vue/attribute-hyphenation": [ 2, "always" ],
    "vue/no-side-effects-in-computed-properties": [ "error" ],
    "vue/html-end-tags": [ "error" ],
    "vue/v-bind-style": [ "error" ],
    "vue/no-multi-spaces": [ "error" ],
    "comma-spacing":  ["error", { "before": false, "after": true }],
    "vue/no-reserved-keys": [ "error" ],
    "vue/return-in-computed-property": [ "error" ],
    "vue/mustache-interpolation-spacing": [ 2, "always" ],
    "vue/v-on-style": [ "error" ],
    "vue/order-in-components": [2, {
      "order": [
        "mixins",
        "components",
        "props",
        "beforeCreate",
        "created",
        "beforeMount",
        "mounted",
        "beforeUpdate",
        "updated",
        "activated",
        "deactivated",
        "beforeDestroy",
        "destroyed",
        "data",
        "computed",
        "watch",
        "methods"
      ]
    }]
  }
};
