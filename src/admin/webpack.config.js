'use strict';

const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config

  // enable process node_modules files if you need

  // const regexToMatch = /\.m?js$/;
  //   config.module.rules = config.module.rules.map((rule) => {
  //     if (rule.test.toString() == regexToMatch.toString()) {
  //       delete rule.exclude;
  //     }
  //     return rule;
  //   });

  config.plugins.push(
    new MiniCssExtractPlugin({ linkType: "text/css" })
  )

  // Allow scss modules
  config.resolve = {
    ...config.resolve,
    extensions: [...config.resolve.extensions, ".scss"],
  };

  // Configure a SASS loader
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
      {
        loader: "sass-loader",
        options: {
          implementation: require("sass"),
        },
      },
    ],
  });



  // module.exports.push({
  //   entry: './src/index.js',
  //   output: {
  //     filname: 'main.js',
  //     path: path.resolve(__dirname, '../build')
  //   }
  // });
  


  
     
  return config;
};
