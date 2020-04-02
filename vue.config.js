"use strict";
const path = require("path");
// const TEST = process.env.NODE_ENV === "TEST";
module.exports = {
  // publicPath: TEST ? "/web/" : "./",
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        "@root": path.resolve(__dirname)
      }
    }
  }
};
