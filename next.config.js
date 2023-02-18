const path = require('path')
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = {
    distDir: 'build',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    optimizeFonts: false,
}


const nextSettings = {
    env: {
        title: 'Unique Associates',
        titleDescription: 'Client Panel',
    },
};


module.exports = withPlugins([withImages(), nextSettings]);
