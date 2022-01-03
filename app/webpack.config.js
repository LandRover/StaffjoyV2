// for creating cache-safe files
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// for cleanup of other builds
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = (env, options) => {
    const isDevMode = options.mode === 'development';
    
    return {
        entry: [
            './src/index.js'
        ],
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, 'dist'),
            filename: '[name]-[contenthash].bundle.js',
            chunkFilename: '[name]-[contenthash].chunk.js'
        },
        module: {
            rules: [
              {
                enforce: 'pre',
                test: /\.(js|jsx)disabled$/,
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
                test: /\.(scss|css)$/,
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
              }
            ]
        },
        
        devtool: isDevMode ? 'source-map' : false,

        resolve: {
            modules: [path.resolve('node_modules')],
            extensions: ['.js', '.jsx'],
            alias: {
              stores: path.resolve(__dirname, 'src/stores/'),
              components: path.resolve(__dirname, 'src/components/'),
              constants: path.resolve(__dirname, 'src/constants/'),
              reducers: path.resolve(__dirname, 'src/reducers/'),
              actions: path.resolve(__dirname, 'src/actions/'),
              utility: path.resolve(__dirname, 'src/utility.js'),
            }
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
            new webpack.ProgressPlugin(),
            
            new CleanWebpackPlugin(),

            new HtmlWebpackPlugin({
                title: "Staffjoy | App",
                template: "index.template.ejs",
                inject: "body",
            }),
            
            new FaviconsWebpackPlugin({
                logo: './staffjoy-favicon.png',
                prefix: 'assets/icons/',
                cache: true,
                inject: true,
                favicons: {
                    background: '#fff',
                    appName: 'staffjoy',
                    appDescription: 'Staffjoy | App',

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
        ]
    }
};