const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    entry: "./src/index.js",
    //mode: "development",  //specify the type of environment for the compilation tells where the compiled file should be placed
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: true
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