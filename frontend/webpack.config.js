const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const portfinder = require('portfinder');

module.exports = async () => {
  const port = await portfinder.getPortPromise({ port: 3000 });

  return {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new Dotenv(),
    ],
    devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true,
    },
  };
};
