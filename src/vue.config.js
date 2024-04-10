module.exports = {
    devServer: {
        proxy: {
            '/holders': {
                target: 'http://45.8.99.204',
                changeOrigin: true,
            },
        },
    },
};
