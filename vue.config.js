"use strict";
const path = require("path");
module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        _config: path.resolve(__dirname, "cli.config.js")
      }
    }
  }
};
