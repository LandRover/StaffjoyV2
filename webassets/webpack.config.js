const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
    const isDevMode = options.mode === 'development';
    
    return {
        entry: [
            "webpack-dev-server/client?http://localhost:8080",
            "webpack/hot/only-dev-server",
            "./index.js"
        ],
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            chunkFilename: 'chunk.js'
        },
        module: {
            rules: [
              {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDevMode,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevMode,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevMode,
                            sassOptions: {
                                includePaths: [
                                    path.resolve('node_modules')
                                ],
                            }
                        }
                    }
                ]
              },
              {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name(file) {
                            if (isDevMode) {
                                return 'assets/[path][name].[ext]';
                            }

                            return 'assets/[name].[hash].[ext]';
                        },
                    },
                  },
                ],
              },
            ]
        },
        
        devtool: isDevMode ? 'source-map' : false,

        resolve: {
            modules: [path.resolve('node_modules')],
            extensions: ['.js'],
        },

        watchOptions: {
            poll: 1000,
            aggregateTimeout: 500,
            ignored: /node_modules/
        },

        devServer: {
            hot: true,
            host: '0.0.0.0',
            port: 8080,
            compress: true,
            contentBase: './dist',
            disableHostCheck: true,
            historyApiFallback: true,
        },
        
        plugins: [
            new MiniCssExtractPlugin({
                filename: "styles.css"
            }),
        ],
    }
};



// -------------------------------------------------------------------------
/*

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: [

    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!sass"
                )
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ["", ".js"],
        alias: {
            fonts: path.join(__dirname + "./../third_party/node/fonts"),
        },
    },
    resolveUrlLoader: {
        relative: '../third_party/node/fonts',
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "./",
        filename: "bundle.js"
    },
    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: '8080',
        compress: true,
        contentBase: './dist',
        disableHostCheck: true,
        historyApiFallback: true,
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};
*/