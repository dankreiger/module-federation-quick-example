const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const baseConfig = require('../webpack.base');
const path = require('path');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devServer: {
    port: 8082,
    contentBase: path.join(__dirname, 'dist'),
  },
  output: {
    publicPath: 'http://localhost:8082',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: './remoteEntry.js',
      exposes: {
        './CartIndex': './lib/index',
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
