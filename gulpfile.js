var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var typescript = require('gulp-typescript');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer')
var tailwindcss = require('tailwindcss');

// Create a task to delete dist folder
gulp.task('clean', () => {
    return gulp.src('./dist', { "allowEmpty": true })
        .pipe(clean());
});

// Create a task to compile Sass to CSS
gulp.task('sass', () => {
    return gulp.src('./src/**/*.scss')
        .pipe(concat('style.scss'))
        .pipe(sass())
        .pipe(postcss([tailwindcss('./tailwind.config.js'), autoprefixer]))
        .pipe(cleanCss())
        .pipe(gulp.dest('./dist'));
});

// Create a task to compile TypeScript to JavaScript
gulp.task('typescript', () => {
    return gulp.src('./src/**/*.ts')
        .pipe(concat('script.ts'))
        .pipe(typescript())
        .pipe(minify({ ext: { min: '.js' }, noSource: true }))
        .pipe(gulp.dest('./dist'));
});

// Create a task for Copy All HTML Files
gulp.task('pages', () => {
    return gulp.src(['./src/app/**/index.html'])
        .pipe(gulp.dest('dist'));
});

// Create a task to build TypeScript to JavaScript
gulp.task('build', gulp.parallel('typescript', 'sass', 'pages'));

// Create a watch task to watch for changes to Sass and TypeScript files
gulp.task('watch', gulp.parallel('build', () => {
    gulp.watch('./src/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/**/*.ts', gulp.series('typescript'));
}));

// Default Task
gulp.task('default', gulp.parallel('build', 'watch'));