const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-minify-css');
const uglify = require('gulp-uglify'); //minify js
const imageMin = require('gulp-imagemin');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps'); // point to original line numbers in dev too

gulp.task('templates', function(){
  var data = {};

  var options = {
    batch: ['src/templates/partials']
  };

  return gulp.src(['src/templates/**/*.hbs', '!src/templates/partials/**/*.hbs'])
    .pipe(handlebars(data, options))
    .pipe(rename(function (path) {
      path.extname = '.html'
    }))
    .pipe(gulp.dest('./'));
});


gulp.task('images', function() {
	gulp.src(['src/img/**/*'])
	.pipe(imageMin())
	.pipe(gulp.dest('dist/img'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function(){
  var b = browserify({
    entries: 'src/scripts/main.js',
    debug: true
  });

  b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(browserSync.stream());
});

gulp.task('styles', function() {
	gulp.src(['src/styles/**/*.scss'])
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
    .pipe(concat('main.css'))
	.pipe(minifyCss())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/styles'))
	.pipe(browserSync.stream());
});

gulp.task('default', ['styles', 'images', 'scripts', 'templates'], function(){
  browserSync.init({
    server: './'
  });
	gulp.watch('src/styles/**/*.scss', ['styles']);
	gulp.watch('src/img/**/*', ['images']);
	gulp.watch('src/scripts/**/*.js', ['scripts']);
	gulp.watch('src/templates/**/*.hbs', ['templates']);
  gulp.watch('*.html', browserSync.reload);
});