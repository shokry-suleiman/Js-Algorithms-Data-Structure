const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const CssMinimizerPlugin  = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "app.js",
      path:path.resolve(__dirname,"dist"),
      publicPath:"./",
      assetModuleFilename:'images/[name][ext][query]'

    },
    plugins:[ new HtmlWebpackPlugin({
        template:'./src/index.html'
    }) ,
     new MiniCssExtractPlugin({
         filename:"[name].css"
     })],
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ]
    }  ,
    optimization:{
        minimize:true,
        minimizer:[
            new CssMinimizerPlugin()
    ]
    }  
  };