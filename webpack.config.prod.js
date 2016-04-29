
module.exports = {
  entry: _dirname + '/app/main.js',
  output: {
    path: _dirname + "/public",
    publicPath: "http://mycdn.com/",
    filename: "bundle.js"
  },
  // entry: {
  //   "vendor": ["jquery", "analytics.js", "optimizely.js"],
  //   "index": "./public/src/index.js",
  //   "profile": "./public/src/profile.js"
  // },
  // output: {
  //   path: "./dist",
  //   publicPath: "http://mycdn.com/",
  //   filename: "[name].js"  // vender.js, index.js, profile.js
  // }
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        // query: {
        //   presets: ['react', 'es2015'] // 要使用的编译器
        // }
      }
    ]
  },
  plugins: [
  ]

  // 这样就可以 require('./myJSFile') 而不需要指定文件后缀 require('./myJSFile.js')
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};