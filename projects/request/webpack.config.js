const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  output: {
    publicPath: "http://localhost:5500/",
    uniqueName: "request",
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "request",
      library: { type: "var", name: "request" },
      filename: "remoteEntry.js",
      exposes: {
        "./RequestModule": "./projects/request/src/app/request.module.ts",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
};
