const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  mode: 'development',
  entry: path.resolve("./app/main.js"),
  output: {
    publicPath:'dist',
    filename:"bundle.js"
  },
  module: {
    rules: [
      {
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.less$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'less-loader'
      ]
    }
  ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx','vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
   
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {"^/api" : ""}
      }
    }
} 
};  