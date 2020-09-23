const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
  devServer: {
    overlay: false,
  },
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    plugins: [
      new HtmlWebpackExternalsPlugin({
        externals: [
          {
            module: 'daum-postcode-api',
            entry: 'http://dmaps.daum.net/map_js_init/postcode.v2.js',
            global: 'daum-postcode-api',
          },
        ],
      }),
    ],
  },
};
