const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [paths.src + '/index.js'],
	output: {
		path: paths.build,
		filename: '[name].bundle.js',
		publicPath: '/',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: paths.public,
					to: 'assets',
					globOptions: {
						ignore: ['*.DS_Store'],
					},
					noErrorOnMissing: true,
				},
			],
		}),
		new HtmlWebpackPlugin({
			title: 'Webpack Boilerplate',
			favicon: paths.src + '/images/favicon.png',
			template: paths.src + '/template.html',
			filename: 'index.html',
		}),
	],
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
			{ test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
			{ test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
		],
	},
};
