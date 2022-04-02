const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const gulpCopy = require("gulp-copy");
const autoPrefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));


// Html Task
const html = () => {
	return gulp.src("./src/index.html")
		       .pipe(gulp.dest("./dest"));
};
// Styles Task

const styles = () => {	
	return gulp.src("./src/styles/main.scss")
		   .pipe(sourcemaps.init())
		   .pipe(sass().on("error", sass.logError))
		   .pipe(autoPrefixer({
			   		cascade: false
			   }))
		   .pipe(sourcemaps.write())
		   .pipe(gulp.dest("./dest/styles"))
};

// Scripts Task 

const scripts = () => {
	return gulp.src("./src/**/*.js")
			   .pipe(gulp.dest("./dest"));
};


// Copy Files

const copyImages = () => {
	return gulp.src("./src/img*/**/*")
			   .pipe(gulp.dest("./dest"))
};

// Clear All 

const clearAll = () => {
	return del("./dest/*")
};

gulp.task("html", html);
gulp.task("styles", styles);
gulp.task("scripts", scripts);
gulp.task("copyImages", copyImages);
gulp.task("clearAll", clearAll);


// Watch All Files

const watchFiles = () => {
	gulp.watch(["./src/index.html", "./src/styles/main.scss", "./src/**/*.js", "./src/img*/**/*"], gulp.parallel(html, styles, scripts, copyImages));
};

gulp.task("watchFiles", watchFiles);
