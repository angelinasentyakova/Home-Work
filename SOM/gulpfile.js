let projectFolder = "build";
let sourceFolder = "src";

let path = {
  build: {
    html: projectFolder + "/",
    css: projectFolder + "/css/",
    js: projectFolder + "/js/",
    img: projectFolder + "/images/",
    images: projectFolder + "/images/",
  },
  src: {
    html: sourceFolder + "/templates/index.pug",
    css: sourceFolder + "/style/style.scss",
    js: sourceFolder + "/js/index.js",
    img: sourceFolder + "/img/**/*.{jpg,png,svg}",
    images: sourceFolder + "/images/**/*.{jpg,png,svg}",
  },
  watch: {
    html: sourceFolder + "/templates/**/*.pug",
    css: sourceFolder + "/style/**/*.scss",
    js: sourceFolder + "/js/**/*.js",
    img: sourceFolder + "/img/**/*.{jpg,png,svg}",
    images: sourceFolder + "/images/**/*.{jpg,png,svg}",
  },
  clean: "./" + projectFolder + "/"
}

let { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require('browser-sync').create(),
  del = require("del"),
  scss = require("gulp-sass"),
  pug = require("gulp-pug"),
  imageMin = require("gulp-imagemin"),
  imgMin = require("gulp-imagemin"),
  rigger = require('gulp-rigger'),
  uglify = require('gulp-uglify'),
  autoprefixer = require("gulp-autoprefixer");

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "./" + projectFolder 
    },
    port: 3000,
  })
}

function html() {
  return src(path.src.html)
    .pipe(
      pug({
        doctype: 'html',
        pretty: true
      })
    )
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css() {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "compressed"
      })
    )
  .pipe(autoprefixer())
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js() {
  return src(path.src.js)
    .pipe(rigger())
    .pipe(uglify())
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function images() {
  return src(path.src.images)
    .pipe(
      imageMin({
        optimizationLevel: 3
      })
    )
    .pipe(dest(path.build.images))
    .pipe(browsersync.stream())
}

function img() {
  return src(path.src.img)
    .pipe(
      imgMin({
        optimizationLevel: 3
      })
    )
    .pipe(dest(path.build.images))
    .pipe(browsersync.stream())
}

function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], img);
  gulp.watch([path.watch.images], images);
}

function clean(params) {
  return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(css, js, html, images, img));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.images = images;
exports.img = img;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;