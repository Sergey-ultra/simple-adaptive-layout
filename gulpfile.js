const gulp = require('gulp')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglifyes')
const del = require('del')
const browserSync = require('browser-sync').create()


const cssFiles =[
    './src/css/main.css',
    './src/css/media.css'
]
//таск на стили css
function styles(){
    return gulp.src(cssFiles)
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers:['last 2 version'],
            cascade: false
        }))
        .pipe(cleanCSS({level:2}))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream())
}

const JSFiles = [
    './src/js/lib.js',
    './src/js/main.js'
]
//таск на скрипты JS
function scripts(){
    return gulp.src(JSFiles)
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream())
}


function clean(){
    return del(['build/*'])
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    })
    gulp.watch('./src/css/**/*.css',styles)
    gulp.watch('./src/js/**/*.js',scripts)
    gulp.watch("./build/*.html").on('change', browserSync.reload)
}

gulp.task('styles',styles)
gulp.task('scripts',scripts)
gulp.task('watch',watch)
gulp.task('build',gulp.series(clean,gulp.parallel(styles,scripts)))
gulp.task('dev',gulp.series('build','watch'))
