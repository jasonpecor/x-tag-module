var path = require('path');

module.exports = {

	context: __dirname,

	entry: {
		'x-tag-module': path.resolve(__dirname, 'src/index.js')
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		chunkFilename: '[id].js',
		libraryTarget: 'umd',
		library: 'x-tag-module'
	},

	devtool: "source-map",

	resolve: {
		root: [
		  path.resolve(__dirname, 'src')
		]
	},

	module: {
		loaders: [{
		  test: /\.js$/,
		  exclude: /node_modules/,
		  loader: 'babel-loader'
		}]
	}
};
