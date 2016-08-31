'use strict';
const NODE_ENV= process.env.NODE_ENV || 'development';
const webpack = require("webpack");

module.exports = {
    entry: {
        home: "./home",
    },
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "./build/[name].bundle.js",
        chunkFilename: "./build/[id].bundle.js"
    },
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: "babel",
				query: {
					presets: ["es2015", "react"],
					plugins: ['transform-runtime']
				}
			}
		]
	},

devtool: "cheap-module-eval-source-map",
plugins:[
  new webpack.EnvironmentPlugin('NODE_ENV')
]

};
