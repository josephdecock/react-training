var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');
var REACT_DIR = path.resolve(__dirname, 'exercises/react');
var REDUX_DIR = path.resolve(__dirname, 'exercises/redux');

var config = {
  entry: {
      app: APP_DIR + '/App.jsx',
      reactExercise: REACT_DIR + '/Contact.jsx',
      reduxExercise: REDUX_DIR + '/Contact.jsx',
      vendor: ['react', 'react-dom']
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
    publicPath: "/",            // New
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js"}),
    new webpack.SourceMapDevToolPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : [APP_DIR, REACT_DIR, REDUX_DIR],
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;