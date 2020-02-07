const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, "source"),
    mode: "development",
    entry: {
        main: './car.js',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: ["file-loader"]
            }
        ]
    }
};