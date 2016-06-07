var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var glob = require('glob')
var source = require('vinyl-source-stream')
var buff = require('vinyl-buffer')
var uglify = require('gulp-uglify')
var sass = require('gulp-sass')
var srcDir = './src'
var destDir = './build'

gulp.task('browserify', function () {
  var files = glob.sync(`${srcDir}/js/*.js`)
  console.log(files)
  return browserify({
    entries: files,
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buff())
  .pipe(uglify())
  .pipe(gulp.dest(`${destDir}/js`))
})

gulp.task('vendors', function(){
  return gulp.src(`${srcDir}/vendors/*`)
  .pipe(gulp.dest(`${destDir}/vendors`))
})


gulp.task('css', function () {
  return gulp.src(`${srcDir}/**/*.css`)
  .pipe(gulp.dest(destDir))
})


gulp.task('sass', function(){
  return gulp.src(`${srcDir}/**/theme.scss`)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(destDir))
})

gulp.task('html', function () {
  return gulp.src([`${srcDir}/**/*.html`, `!${srcDir}/**/*index.html`])
  .pipe(gulp.dest(destDir))
})

gulp.task('index', function () {
  return gulp.src(`${srcDir}/**/*index.html`)
  .pipe(gulp.dest(''))
})

gulp.task('fonts', function () {
  return gulp.src(`${srcDir}/fonts/*`)
  .pipe(gulp.dest(`${destDir}/fonts`))
})

gulp.task('others', function(){
  return gulp.src(`${srcDir}/others/*`)
  .pipe(gulp.dest(`${destDir}/others`))
})

gulp.task('build', ['browserify', 'sass', 'fonts', 'vendors', 'css','html','index', 'others'], function(){
})


gulp.task('watch', ['build'], function () {
  gulp.watch([`${srcDir}/**/*.js`], ['browserify'])
  gulp.watch([`${srcDir}/**/*.html`, `!${srcDir}/**/*index.html`], ['html'])
  gulp.watch([`${srcDir}/**/*index.html`], ['index'])
  gulp.watch([`${srcDir}/**/*.css`], ['css'])
  gulp.watch([`${srcDir}/fonts/*`], ['fonts'])
  gulp.watch([`${srcDir}/others/*`], ['others'])
  gulp.watch([`${srcDir}/**/*.scss`], ['sass'])
})

gulp.task('default', ['watch'])
