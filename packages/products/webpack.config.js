const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const baseConfig = require('../webpack.base');
const path = require('path');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devServer: {
    port: 8081,
    contentBase: path.join(__dirname, 'lib'),
  },
  output: {
    publicPath: 'http://localhost:8081/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './lib/index',
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
