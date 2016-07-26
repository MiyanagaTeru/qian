var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

// Use this config to generate bundle.css
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var extractCSS = new ExtractTextPlugin('bundle.css');
// var productionModuleConfiguration = {
// 	module: {
// 		loaders: [
// 			{
// 				test: /\.js$/,
// 				loaders: [ 'babel' ],
// 				exclude: /node_modules/,
// 				include: __dirname
// 			},
// 			{
// 				test: /\.css$/,
// 				loader: extractC.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
// 				include: __dirname,
// 				exclude: /node_modules/
// 			}
// 		]
// 	},
// 	plugins: [ extractCSS ]
// }


module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: [ 'babel' ],
				exclude: /node_modules/,
				include: __dirname

			},
			{
				test: /(\.scss|\.css)$/,
				loaders: [
					require.resolve('style-loader'),
					require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:3]!postcss-loader',
					require.resolve('sass-loader') + '?sourceMap'
				]
			}
		]
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}
