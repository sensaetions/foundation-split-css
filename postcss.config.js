const path = require("path");
const postCssExtractMQ = require("postcss-extract-media-query");

module.exports = {
  plugins: {
    "autoprefixer": {
      browsers: [
        "last 2 versions",
        "ie >= 9",
        "ios >= 7"
      ]
    },
    "postcss-extract-media-query": {
      // minimize: true,
      output: {
        // path: path.join(__dirname, "dist/assets/css")
        // temporarily placing css output into src folder (for demo purposes)
        path: path.join(__dirname, "src/assets/css")
      },
      queries: {
        // orientation, oddballs
        "screen and (orientation: portrait)": "small",
        "screen and (orientation: landscape)": "small",
        "screen and (min-width: 0\0)": "small",
        "not print": "small",

        // basic, min
        "screen and (min-width: 30em)": "small",
        "print, screen and (min-width: 30em)": "small",
        "print, screen and (min-width: 40em)": "small",
        "screen and (min-width: 48em)": "medium",
        "print, screen and (min-width: 48em)": "medium",
        "print, screen and (min-width: 64em)": "medium",
        "screen and (min-width: 75em)": "large",
        "screen and (min-width: 81.25em)": "large",
        "screen and (min-width: 87.5em)": "large",
        "screen and (min-width: 93.75em)": "large",
        "screen and (min-width: 100em)": "large",
        "screen and (min-width: 112.5em)": "large",

        // basic, max
        "screen and (max-width: 29.99875em)": "small",
        "screen and (max-width: 39.99875em)": "small",
        "screen and (max-width: 47.99875em)": "small",
        "screen and (max-width: 63.99875em)": "small",
        "screen and (max-width: 74.99875em)": "medium",
        "screen and (max-width: 81.24875em)": "medium",
        "screen and (max-width: 87.49875em)": "large",
        "screen and (max-width: 93.74875em)": "large",
        "screen and (max-width: 99.99875em)": "large",
        "screen and (max-width: 112.49875em)": "large",

        // min, max
        "screen and (max-width: 0em), screen and (min-width: 30em)": "small",
        "screen and (max-width: 29.99875em), screen and (min-width: 40em)": "small",
        "screen and (min-width: 30em) and (max-width: 39.99875em)": "small",
        "screen and (max-width: 39.99875em), screen and (min-width: 48em)": "small",
        "screen and (min-width: 40em) and (max-width: 47.99875em)": "small",
        "screen and (max-width: 47.99875em), screen and (min-width: 64em)": "small",
        "screen and (min-width: 48em) and (max-width: 63.99875em)": "small",
        "screen and (min-width: 48em) and (min-width: 64em)": "small",
        "screen and (min-width: 48em) and (min-width: 87.5em)": "small",
        "screen and (max-width: 63.99875em), screen and (min-width: 75em)": "small",
        "screen and (min-width: 64em) and (max-width: 74.99875em)": "medium",
        "print, screen and (min-width: 64em) and (min-width: 64em)": "medium",
        "screen and (max-width: 74.99875em), screen and (min-width: 81.25em)": "large",
        "screen and (min-width: 75em) and (max-width: 81.24875em)": "large",
        "screen and (min-width: 81.25em) and (max-width: 87.49875em)": "large",
        "screen and (max-width: 81.24875em), screen and (min-width: 87.5em)": "large",
        "screen and (max-width: 87.49875em), screen and (min-width: 93.75em)": "large",
        "screen and (min-width: 87.5em) and (max-width: 93.74875em)": "large",
        "screen and (max-width: 93.74875em), screen and (min-width: 100em)": "large",
        "screen and (min-width: 93.75em) and (max-width: 99.99875em)": "large",
        "screen and (max-width: 99.99875em), screen and (min-width: 112.5em)": "large",
        "screen and (min-width: 100em) and (max-width: 112.49875em)": "large",

        // height
        "screen and (max-height: 800px) and (min-width:64em)": "medium",

        // IE
        "screen and (-ms-high-contrast: active),(-ms-high-contrast: none)": "large",
        "all and (-ms-high-contrast: none)": "large",
        "print and (-ms-high-contrast: none),screen and (-ms-high-contrast: active) and (min-width: 64em),screen and (-ms-high-contrast: none) and (min-width: 64em)": "large",

        // Print
        print: "print"
      },
      stats: false,
      // "whitelist": true
    }
  }
};