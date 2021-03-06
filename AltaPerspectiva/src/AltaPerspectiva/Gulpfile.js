﻿/// <binding Clean='clean' />
"use strict";
var gulp = require("gulp"),
    concat = require("gulp-concat"),
    filter = require("gulp-filter"),
    less = require("gulp-less"),
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

//===========lib files like:bower component and others=============

//Clean all from wwwroot/lib
gulp.task("clean:lib", function () {
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
            'font-awesome': {
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

//=============Custom file=================

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