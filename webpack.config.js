const path = require('path');

module.exports = {
  modules: {
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':data-src']
        }
      }
    }
  }
}
