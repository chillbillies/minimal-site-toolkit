const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Assets are built via Laravel Mix (i.e. Webpack). Probably overkill
 | but will allow for more robust Javascript functionality
 | (e.g. polyfills, Typescript, Vue, dependencies, etc)
 | and cleaner bundled styles.
 |
 */
// mix.setResourceRoot('build');
// mix.options({
//     fileLoaderDirs: {
//         fonts: 'fonts'
//     }
// });
mix.copyDirectory('node_modules/bootstrap-icons/font/bootstrap-icons.css', 'build/icons');
mix.copyDirectory('node_modules/bootstrap-icons/font/fonts', 'build/icons/fonts');
mix.ts('assets/scripts/app.ts', 'build/js')
    .sass('assets/styles/app.scss', 'build/css')
