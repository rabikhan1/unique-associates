const path = require('path')

module.exports = {
    distDir: 'build',
    sassOptions: {
        includePaths: [path.join('https://rabikhan1.github.io/unique-associates/', 'app/styles')],
    },
    trailingSlash: true,
    optimizeFonts: false,
}