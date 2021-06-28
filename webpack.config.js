const {
    resolve
} = require("path"); //路径
const MiniCssExtractPlugin = require("mini-css-extract-plugin") //兼容css
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin") //压缩css
const HtmlWebpackPlugin = require("html-webpack-plugin")


// process.env.NODE_ENV="development";
module.exports = {
  entry: "./src/index.js",
  output: {
    // filename: "app.[hash].js",
    filename: "app.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      //css 的压缩 和兼容
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [require("postcss-preset-env")()],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/, // 排除node_modules文件夹
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [require("postcss-preset-env")()],
            },
          },
          {
            loader: "sass-loader", // 编译sass，webpack默认使用node-sass进行编译，所以需要同时安装 sass-loader 和 node-sass
            options: {
              // loader 的额外参数，配置视具体 loader 而定
              sourceMap: true, // 要安装resolve-url-loader，当此配置项启用 sourceMap 才能正确加载 Sass 里的相对路径资源，类似background: url(../image/test.png)
            },
          },
        ],
      },
      // js 转换就可以了  生产环境自动 压缩
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },

      // //图片打包
      {
        test: /\.(jpg|png|gif|jpeg|svg)$/,
        loader: "url-loader",
        options: {
          limit: 2 * 1024,
          name: "[name].[ext]",
          outputPath: "images",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "app.css"
      // filename: "app.[hash].css",
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  // mode: "development",
  mode: "production",
  devServer: {
    contentBase: __dirname,
    host: 'localhost',
    compress: true,
    port: 8080,
    open: true,
  },
};