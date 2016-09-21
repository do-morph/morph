var gulp             = require('gulp');
var postcss          = require('gulp-postcss');
var autoprefixer     = require('autoprefixer');
var cssnext          = require('cssnext');
var postcssImport    = require('postcss-import');
var customProperties = require('postcss-custom-properties');
var minify           = require('postcss-csso');
var postcssFor       = require('postcss-for');
var postcssCalc      = require('postcss-calc');

gulp.task('default', ['build'], function() {
	gulp.watch('./modules/**/*.css', ['build']);
});

gulp.task('build', function() {
	var processors = [
		postcssImport,
		autoprefixer,
		customProperties,
		postcssFor,
		postcssCalc,
		cssnext,
		minify
	];

	return gulp.src('./modules/morph.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('build-debug', function() {
	var processors = [
		postcssImport,
		autoprefixer,
		customProperties,
		postcssFor,
		postcssCalc,
		cssnext,
		minify
	];

	return gulp.src('./modules/**/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./temp-build/'));
});
