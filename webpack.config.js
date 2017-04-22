/**
 * Created by chang on 2017/4/22.
 */
var webpack = require('webpack');
var path = require('path');

var basePath = path.join(__dirname, 'src');

// Webpack Config
var webpackConfig = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor':    './src/vendor.ts',
        'app':       './src/main.ts',
    },

    output: {
        path: './dist',
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: ['', '.ts', '.js'],
        alias: {
            app: basePath + '/app',
            shared: basePath + '/app/shared'
        }
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills'], minChunks: Infinity }),
    ],

    module: {
        loaders: [
            // .ts files for TypeScript
            { test: /\.ts$/, loader: 'ts-loader' },

        ]
    }

};
