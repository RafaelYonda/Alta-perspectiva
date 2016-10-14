var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = './libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            'core-js/client/**',
            'systemjs/dist/system.src.js',
            'reflect-metadata/**',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("wwwroot/libs/"));

    gulp.src([
            'Scripts/**/**/*.*',
            'tsScripts/**/**/*.html'
            ]).pipe(gulp.dest("wwwroot/js/"));
});

var tsProject = ts.createProject('tsScripts/tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('ts', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
            "tsScripts/*.ts"
    ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./Scripts'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('tsScripts/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);



//===========lib files like:bower component and others=============

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    less = require("gulp-less"),
    filter = require("gulp-filter"),
    rename = require("gulp-rename"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    bower = require("gulp-bower"),
    del = require("del"),
    mainBowerFiles = require("main-bower-files");
var paths = {
    wwwLib: "./wwwroot/lib/",
    wwwStyles: "./wwwroot/css/"
};
//Clean all from wwwroot/lib

gulp.task("bowerclean", function () {
    del([paths.wwwLib]);
});


//
// Copy Bower components from bower directory to Scripts/lib directory
gulp.task("copy:bower-components", function () {

    var jsFilter = filter(["**/**/*.js"], { restore: true });
    var cssFilter = filter(["**/*.css"], { restore: true });
    var fontsFilter = filter(["**/*.woff2", "**/*.eot", "**/*.svg", "**/*.ttf", "**/*.woff"], { restore: true });

    return gulp.src(mainBowerFiles({
        overrides: {
            'bootstrap': {
                main: [
                    "./dist/js/bootstrap.js",
                    "./dist/css/*.css",
                    "./dist/*.css",
                    "./dist/fonts/*.*"
                ]
            },
            'fontawesome': {
                main: [
                    "./css/font-awesome.css",
                    "./fonts/*.*"
                ]
            }
        }
    }),
        { base: "./bower_components" })

        // Copy vendor js files from bower_components, minify and publish in /scripts/lib
        .pipe(jsFilter)
        .pipe(gulp.dest(paths.wwwLib))
        .pipe(jsFilter.restore)

        // Copy vendor css files from bower_components, minify and publish in /Content/lib
        .pipe(cssFilter)
        .pipe(gulp.dest(paths.wwwLib))
        .pipe(cssFilter.restore)

        // Copy vendor font files from bower_components, /Content/fonts
        .pipe(fontsFilter)
        .pipe(gulp.dest(paths.wwwLib))
        .pipe(fontsFilter.restore);
});

//=============Custom styles=================

//
// Delete all custom stylesheets from /www/css directory
//
gulp.task("clean:css", function () {
    del([paths.wwwStyles]);
});
//
// Compile style sheets 
//
gulp.task("copy:css", function () {
    return gulp.src(["./Styles/site.less"])
        .pipe(less())
        .pipe(gulp.dest(paths.wwwStyles));
});
