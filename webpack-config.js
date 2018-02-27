var {resolve} = require('path');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: resolve('./index.js'),
	},
	output: {
		path: resolve('./dist'),
		filename: 'app.[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: {
						loader: "css-loader",
						options: {
							minimize: false,
						},
					},
				})
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'file-loader'
			},
		]
	},
	plugins: [
		new Clean(['dist']),
		new ExtractTextPlugin("app.[hash].css"),
		new HtmlWebpackPlugin({
			title: 'jQuery UI Autocomplete demo, built with webpack'
		})
	]
};
