const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    devtool: "cheap-module-source-map",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: path.join(__dirname, "public", "index.html"),
            favicon: path.join(__dirname, "public", "favicon.ico"),
        }),
        new Dotenv()
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                include: /\.module\.s?css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName:'[name]__[local]--[hash:base64:5]',
                            },
                            importLoaders: 1
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.s?css$/,
                exclude: /\.module\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: "asset/resource"
            }
        ]
    },
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                defaultVendors: false,
            },
        }
    },
    devServer: {
        port: 8080,
        hot: true,
        historyApiFallback: true,
    }
}