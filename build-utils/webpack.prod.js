const commonPaths = require("./common-paths");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: "production",
  devtool: "source-map",
  entry: {
    app: [`${commonPaths.appEntry}/index.js`],
    // profile: [`${commonPaths.appEntry}/profile/Profile.js`],
  },
  output: {
    filename: "static/[name].[contenthash].js",
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "node_vendors", // part of the bundle name and
          // can be used in chunks array of HtmlWebpackPlugin
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        },
        common: {
          test: /[\\/]src[\\/]components[\\/]/,
          chunks: "all",
          minSize: 0,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
              importLoaders: 1,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
    }),
  ],
};

module.exports = config;
