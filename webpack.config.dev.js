var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './client/src/main.js',
        'webpack-hot-middleware/client?reload=true'
    ],
    output: {
        path: path.resolve(__dirname, './client/output/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader']
            },
            {
                test: /\.s?css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
