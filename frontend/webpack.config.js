const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports =   {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, 'src','components'),
        '@atoms': path.resolve(__dirname, 'src/components/atoms'),
        '@molecules': path.resolve(__dirname, 'src/components/molecules'),
        '@assets': path.resolve(__dirname, 'public','assets'),
        '@utils': path.resolve(__dirname, 'src','utils'),
        '@theme':path.resolve(__dirname, 'src','theme'),
        '@mocks': path.resolve(__dirname, 'src', 'mocks'),
        '@services':path.resolve(__dirname, 'src', 'services'),
        '@pages':path.resolve(__dirname, 'src', 'pages'),
        '@routes':path.resolve(__dirname, 'src', 'routes'),
      },
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
      port: 3000,
      historyApiFallback: true,
      open: true,
    },
  }