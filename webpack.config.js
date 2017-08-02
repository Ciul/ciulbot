const webpack = require('webpack')
const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: [
            'babel-polyfill',
            'isomorphic-fetch',
            './server.js'
        ]
    },
    output: {
        path:       path.resolve(__dirname, 'dist'),
        filename:   '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool:    'inline-source-map',
    devServer: {
        contentBase:    path.resolve(__dirname, 'dist'),
        compress:       true,
        stats:          'minimal',
        hot:            true,
        port:           9000
    },
    target:     'node',
    stats:      'minimal',
    plugins: [

    ]
}