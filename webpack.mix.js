let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.browserSync('homestead.test');

mix.scripts([
  'public/js/app.js',
  'public/js/bootstrap.min.js',
  'public/js/jquery.js',
  'public/js/popper.min.js',
  'public/js/theme-main.js',
  'public/js/theme-scripts.js',
], 'public/js/all.js');

mix.styles([
    'public/css/main.css'
], 'public/css/all.css');