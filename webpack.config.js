const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    entry: "./src/index.js",
    //mode: "development",  //specify the type of environment for the compilation tells where the compiled file should be placed
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [{
            loader: "babel-loader",
            options: {sourceType: "unambiguous"}
          }]
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: false  //toggle css modules
              }
            }
          ]
        },
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
        template: "./src/index.html",   //where its looking for the HTML file
        filename: "./index.html"            //name of the minified HTML that will be generated in the dist folder
      })
    ]
  
};