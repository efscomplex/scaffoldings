const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { ESBuildPlugin } = require('esbuild-loader')

const BASE_DIR = path.resolve(__dirname, '../src')

module.exports = {
	entry: path.join(BASE_DIR, 'index.tsx'),
	plugins: [
		new HTMLWebpackPlugin({
			template: path.join(BASE_DIR, 'index.html')
		})
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'esbuild-loader',
				options: {
					loader: 'tsx',
					target: 'es2015'
					//tsconfigRaw: require('./tsconfig.json')
				},
				exclude: [/node_modules/]
			},
			{
				test: /\.(jsx?)$/,
				loader: 'esbuild-loader',
				options: {
					loader: 'jsx',
					target: 'es2015'
				},
				exclude: [/node_modules/]
			},
			{
				test: /.(css)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [BASE_DIR, 'node_modules']
	},
	plugins: [new ESBuildPlugin()]
}
