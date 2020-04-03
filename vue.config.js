"use strict";
const path = require("path");
module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/")
      }
    }
  }
};
