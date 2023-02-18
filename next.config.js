const path = require('path')

module.exports = {
    distDir: 'build',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    optimizeFonts: false,
}
module.exports = {
    async rewrites() {
      return [
        {
          source: 'https://rabikhan1.github.io/unique-associates/:path*',
          destination: 'https://rabikhan1.github.io/unique-associates/:path*'
        }
      ]
    }
  }
  