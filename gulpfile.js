var gulp = require('gulp'),  
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');

var sassMain = ['development/sass/styles.scss'];   
var jsSources = ['development/js/*.js']; 


//no longer needed- autoprefixer compiles css.
//gulp.task('sass', function() {  
//    gulp.src(sassMain) 
//        .pipe(sass({
//            outputStyle: 'compressed' 
//        })
//            .on('error', gutil.log)) 
//        .pipe(gulp.dest('assets/css')); 
//});

gulp.task('concat', function() {  
    gulp.src(jsSources) 
        .pipe(concat('script.js')) 
        .pipe(uglify()) 
        .pipe(gulp.dest('assets/js')); 
});

gulp.task('watch', function() {  
//    gulp.watch(sassMain,['sass']); 
    gulp.watch('development/**/*.scss', ['css']);
    gulp.watch(jsSources,['concat']); 
});

gulp.task('css', function () {
    var processors = [
        autoprefixer(),
        cssnano(),
    ];
    return gulp.src('development/sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['css', 'concat', 'watch']);  

