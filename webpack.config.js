const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
const  CopyWebpackPlugin =require('copy-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, "source"),
    mode: "development",
    entry: {
        main: ['@babel/polyfill', './index.js'],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build")
    },
    devServer: {
        port: 5000
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "./source/assets/favicon/favicon.png"),
                to: path.resolve(__dirname, "build")
            }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    }
};