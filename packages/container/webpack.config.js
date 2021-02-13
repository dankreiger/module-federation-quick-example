const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('../webpack.base');
const path = require('path');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'lib'),
  },
  output: {
    publicPath: 'http://localhost:8080',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        cart: `cart@http://localhost:8082/remoteEntry.js`,
        products: `products@http://localhost:8081/remoteEntry.js`,
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
