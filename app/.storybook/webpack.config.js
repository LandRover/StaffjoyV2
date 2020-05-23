const path = require('path');

// @TODO merge with existing webpack.config, many duplications
// @see https://storybook.js.org/docs/configurations/custom-webpack-config/

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        }
    ]
  });
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
            name(file) {
                return 'assets/[name].[hash].[ext]';
            },
        },
      },
    ],
  });

  config.resolve = {
    modules: [path.resolve('node_modules')],
    extensions: ['.js', '.jsx'],
    alias: {
      stores: path.resolve(__dirname, '../src/stores/'),
      components: path.resolve(__dirname, '../src/components/'),
      constants: path.resolve(__dirname, '../src/constants/'),
      reducers: path.resolve(__dirname, '../src/reducers/'),
      actions: path.resolve(__dirname, '../src/actions/'),
      utility: path.resolve(__dirname, '../src/utility.js'),
    }
  }

  // Return the altered config
  return config;
};