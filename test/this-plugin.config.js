const BabelUglifyPlugin = require('../index')

module.exports = {
  entry: './test/main.js',
  output: {
    path: __dirname + '/out',
    filename: 'this-plugin.bundle.js'
  },
  plugins: [
    new BabelUglifyPlugin()
  ]
}