// const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
  devServer: {
    overlay: false,
    disableHostCheck: true,
  },
  configureWebpack: {
    externals: {
      Vue: 'vue',
    },
  },
  transpileDependencies: ['vuetify'],
  // configureWebpack: {
  //   plugins: [
  //     new HtmlWebpackExternalsPlugin({
  //       externals: [
  //         {
  //           module: 'daum-postcode-api',
  //           entry:
  //             'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
  //           global: 'daum-postcode-api',
  //         },
  //       ],
  //     }),
  //   ],
  // },
};
