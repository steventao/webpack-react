var webpack = require('webpack');
// var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin([options])
module.exports = {
  // entry: _dirname + '/app/main.js',
  // output: {
  //   path: _dirname + "/public",
  //   filename: "bundle.js"
  // },

  entry: './main.js',
  output: {
    // path: _dirname + "/public",
    filename: "bundle.js"
  },

  // entry: {
  //   "vendor": ["jquery", "analytics.js", "optimizely.js"],
  //   "index": "./public/src/index.js",
  //   "profile": "./public/src/profile.js"
  // },
  // output: {
  //   path: "./dist",
  //   filename: "[name].js"  // vender.js, index.js, profile.js
  // }

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
        // query: {
        //   presets: ['react', 'es2015'] // 要使用的编译器
        // }
      },
      {
        test: /\.scss$/, 
        loader: 'style!css!scss'
      },
      {
        test: /\.css$/, 
        loader: 'style!css'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url?limit=1024'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      test: /(\.jsx|\.js)$/,
      compress: {
        warnings: false
      }
    })
  ],

  // 这样就可以 require('./myJSFile') 而不需要指定文件后缀 require('./myJSFile.js')
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    colors: true
  }
};