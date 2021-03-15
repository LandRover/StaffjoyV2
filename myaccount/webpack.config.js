// for creating cache-safe files
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebappWebpackPlugin = require('webapp-webpack-plugin');

// for cleanup of other builds
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');


module.exports = (env, options) => {
    const isDevMode = options.mode === 'development';
    
    return {
        entry: [
            './src/index.js'
        ],
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, 'dist'),
            filename: '[name]-[hash:16].bundle.js',
            chunkFilename: '[name]-[hash:16].chunk.js'
        },
        module: {
            rules: [
              {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                include: /src/,
                exclude: [
                    /node_modules/,
                    /third_party\/node/
                ],
                use: [
                    {
                      options: {
                        formatter: require.resolve('react-dev-utils/eslintFormatter'),
                        eslintPath: require.resolve('eslint'),
        
                      },
                      loader: require.resolve('eslint-loader'),
                    },
                ],
              },
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
              },
              {
                test: /\.scss$/,
                use: [
                    'style-loader',
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
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name(file) {
                            if (isDevMode) {
                                return 'assets/[path][name].[ext]';
                            }

                            return 'assets/[name].[contenthash].[ext]';
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
            extensions: ['.js', '.jsx'],
        },

        watchOptions: {
            poll: 1000,
            aggregateTimeout: 500,
            ignored: /node_modules/
        },

        devServer: {
            hot: true,
            host: '0.0.0.0',
            port: '3000',
            compress: true,
            contentBase: './dist',
            disableHostCheck: true,
            historyApiFallback: true,
        },
        
        plugins: [
            new HtmlWebpackPlugin({
                title: "Staffjoy | My Account",
                template: "index.template.ejs",
                inject: "body",
            }),

            new WebappWebpackPlugin({
                logo: './staffjoy-favicon.png',
                prefix: 'assets/icons/',
                cache: true,
                inject: true,
                favicons: {
                    background: '#fff',
                    title: 'Staffjoy | My Account',

                    icons: {
                        android: true,
                        appleIcon: true,
                        appleStartup: true,
                        coast: false,
                        favicons: true,
                        firefox: true,
                        opengraph: true,
                        twitter: true,
                        yandex: false,
                        windows: true
                    },
                },
            }),
            
            new WebpackCleanupPlugin({
                exclude: ["README.md", "assets/**/*"],
            })
        ]
    }
};