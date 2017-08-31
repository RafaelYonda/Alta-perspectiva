/// <binding BeforeBuild='copyHtml' />
var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = './libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

//====Delete aot files======
var destPathAot = './tsScripts/app/**/*'
gulp.task('cleanngfactory', function () {
     gulp.src(destPathAot+'.ngfactory.ts')
        .pipe(clean());
     gulp.src(destPathAot + '.ngfactory.js')
         .pipe(clean());
     gulp.src(destPathAot+'.ngsummary.json')
        .pipe(clean());
     gulp.src(destPathAot+'.ngstyle.ts')
        .pipe(clean());
    gulp.src(destPathAot + '.module.js')
         .pipe(clean()); 
    gulp.src(destPathAot + '.component.js')
         .pipe(clean()); 
    gulp.src(destPathAot + '.service.js')
         .pipe(clean());
    gulp.src(destPathAot + '.resolver.js')
         .pipe(clean());
    return '';
});
gulp.task("scriptsNStyles", () => {
    gulp.src([
            'core-js/client/**',
            'systemjs/dist/system.src.js',
            'reflect-metadata/**',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'ng2-ckeditor/**',
            "ngx-popover/**",
            "ngx-quill/**",
            "quill/dist/*.*",
            "ngx-clipboard/**",
            "clipboard/**",
            'angular2-infinite-scroll/**',
            'ng2-toastr/**',
            'ng2-img-cropper/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("wwwroot/libs/"));
});

var tsProject = ts.createProject('tsScripts/tsconfig.json', {
    typescript: require('typescript')
});

//gulp.task('copyHtmlCss', function () {
//    gulp.src([
//        'Scripts/*.js',
//        'tsScripts/**/**/*.html'
//    ]).pipe(gulp.dest("wwwroot/js/"));
//    gulp.src([
//        'Scripts/*.js',
//        'tsScripts/**/**/*.css'
//    ]).pipe(gulp.dest("wwwroot/js/"));
//});

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
    //clear CSS
    del([paths.wwwStyles]);
});
//
// Compile style sheets 
//
gulp.task("copy:css", function () {
    //clear CSS
    //del([paths.wwwStyles]);
    //copy CSS
    gulp.src(["./Styles/site.less"])
        .pipe(less())
        .pipe(gulp.dest(paths.wwwStyles));
    var fontsFilter = filter(["**/*.woff2", "**/*.eot", "**/*.svg", "**/*.ttf", "**/*.woff"], { restore: true });
    //copy fonts
    return gulp.src(["./Styles/alta-font/css/*.css", "./Styles/alta-font/font/**.*", "./Styles/alta-font/font-icon/**.*"])
        .pipe(gulp.dest("./wwwroot/css/fonts"));
});

gulp.task("copy:images", function () {
    return gulp.src(["./Styles/images/**.*"])
        .pipe(gulp.dest("./wwwroot/images"));
});
 
//gulp.task("copy:fonts", function () {
//    var fontsFilter = filter(["**/*.woff2", "**/*.eot", "**/*.svg", "**/*.ttf", "**/*.woff"], { restore: true });
//    return gulp.src(["./Styles/alta-font/css/*.css", "./Styles/alta-font/font/**.*", "./Styles/alta-font/font-icon/**.*"])
//        .pipe(gulp.dest("./wwwroot/css/fonts"));
//});
//=====ts ==
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsScripts/tsconfig.json', { typescript: require('typescript') });
gulp.task("htmlCompile", function () {
    del(['wwwroot/js/**/*.html']);
    gulp.src([
        'tsScripts/**/**/*.css',
        'tsScripts/**/**/*.html'
    ]).pipe(gulp.dest("wwwroot/js/"));
});
gulp.task("tsCompile", function () {
    //========Copy html CSS=====
    gulp.src([
        'Scripts/*.js',
        'tsScripts/**/**/*.html'
    ]).pipe(gulp.dest("wwwroot/js/"));
    gulp.src([
        'Scripts/*.js',
        'tsScripts/**/**/*.css'
    ]).pipe(gulp.dest("wwwroot/js/"));
    //========Type script compile=========
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.pipe(gulp.dest('wwwroot/js'));
});