module.exports = {
  entry: './test/main.js',
  output: {
    path: __dirname + '/out',
    filename: 'babel-modules-false.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [['env', {modules: false}]]
        }
      }
    ]
  }
}