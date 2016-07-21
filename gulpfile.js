var gulp             = require('gulp');
var postcss          = require('gulp-postcss');
var autoprefixer     = require('autoprefixer');
var cssnext          = require('cssnext');
var postcssImport    = require('postcss-import');
var customProperties = require('postcss-custom-properties');
var minify           = require('postcss-csso');

gulp.task('default', ['css'], function() {
	gulp.watch('./modules/**/*.css', ['css']);
});

gulp.task('css', function() {
	var processors = [
		postcssImport,
		autoprefixer,
		customProperties,
		cssnext,
		minify
	];

	return gulp.src('./modules/**/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./build/'));
});
