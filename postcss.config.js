const path = require("path");

module.exports = {
  plugins: {
    "autoprefixer": {
      browsers: [
        "last 2 versions",
        "ie >= 9",
        "ios >= 7"
      ]
    }
    "postcss-extract-media-query": {
      // minimize: true,
      output: {
        path: path.join(__dirname, "dist/assets/css")
      },
      queries: {
        "screen and (orientation: landscape)": "small",
        "screen and (orientation: portrait)": "small",
        "screen and (min-width: 0)": "small",
        "screen and (min-width: 0\0)": "small",
        "screen and (max-width: 0em), screen and (min-width: 30em)": "small",
        "screen and (max-width: 39.99875em)": "small",

        "print, screen and (min-width: 40em)": "medium",
        "screen and (max-width: 0em), screen and (min-width: 40em)": "medium",
        "screen and (min-width: 40em) and (max-width: 63.99875em)": "medium",
        "screen and (min-width: 48em)": "medium",
        "screen and (max-width: 63.99875em)": "medium",

        "print, screen and (min-width: 64em)": "large",
        "screen and (max-width: 39.99875em), screen and (min-width: 64em)": "large",
        "screen and (min-width: 64em) and (max-width: 74.99875em)": "large",
        "screen and (max-width: 63.99875em), screen and (min-width: 75em)": "large",
        "screen and (max-width: 74.99875em)": "large"
      },
      stats: false,
      "whitelist": true
    }
  }
};