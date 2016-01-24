var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var less = require('gulp-less');
var path = require('path');


gulp.task('default', function(){
   var bundler = watchify(browserify({
       entries: ['./src/components/app.jsx'],
       transform: [reactify],
       extensions: ['.jsx'],
       debug: true,
       cache: {},
       packageCache: {},
       fullPaths: true
   }));

    function build(file){
        if(file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('main.js'))
            .pipe(gulp.dest('./'));
    };
  build();
  bundler.on('update', build);
});

gulp.task('less', function () {
  return gulp.src('./src/public/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./src/public/css'));
});
