module.exports = {
    navigateFallback: '/index.html',
    root: 'dist/',
    staticFileGlobs: [
        'dist/*.html',
        'dist/**.js',
        'dist/**.css',
        'dist/**.json',
        'dist/*.appcache',
        'dist/icons/**'
    ]
};
