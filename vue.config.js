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
  },
  chainWebpack: config => {
    config.output.filename("[name].[hash].js").end();
    const ofs = ["vue-modules", "vue", "normal-modules", "normal"];
    const scssRules = config.module.rule("scss");
    const cssRules = config.module.rule("css");
    const postRules = config.module.rule("postcss");
    const addSassResourcesLoader = (rules, type) => {
      rules
        .oneOf(type)
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: ["./src/style/_variables.scss", "./src/style/_extend.scss"]
        });
    };
    ofs.forEach(type => {
      addSassResourcesLoader(cssRules, type);
      addSassResourcesLoader(scssRules, type);
      addSassResourcesLoader(postRules, type);
    });
    return config;
  }
};
