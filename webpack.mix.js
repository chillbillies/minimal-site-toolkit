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
mix.js('assets/scripts/app.js', 'build/js')
    .sass('assets/styles/app.scss', 'build/css')
