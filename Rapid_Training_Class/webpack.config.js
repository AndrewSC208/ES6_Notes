var path = require('path');

module.exports = {
  entry: './Iterators_Generators_Promises/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  // this is something to try out for deployment
  // output: {
  //   filename: '[name].[hash]index.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  devServer: {
  	contentBase: path.join(__dirname, "dist"),
  	compress: true,
  	port: 9000
	},
};