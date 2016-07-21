var gulp          = require('gulp');
var postcss       = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');
var cssnext       = require('cssnext');
var postcssImport = require('postcss-import');

gulp.task('default', function() {
	gulp.watch('./modules/**/*.css', ['css']);
});

gulp.task('css', function() {
	var processors = [
		postcssImport,
		autoprefixer,
		cssnext
	];

	return gulp.src('./modules/**/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./build/'));
});
