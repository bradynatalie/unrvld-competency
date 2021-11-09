/**
 * Settings
 * Turn on/off build features
 */

 var settings = {
	styles: true,
	svgs: true,
	copy: true
};


/**
 * Paths to project folders
 */

var paths = {
	styles: {
		input: 'src/app/*.{scss,sass}',
		output: 'src/app/'
	}
};

/**
 * Gulp Packages
 */

// General
var {src, dest, watch, series, parallel} = require('gulp');
var rename = require('gulp-rename');

// Styles
const sass = require('gulp-sass')(require('sass'));
var postcss = require('gulp-postcss');
var prefix = require('autoprefixer');
var minify = require('cssnano');

/**
 * Gulp Tasks
 */

// Process, lint, and minify Sass files
var buildStyles = function (done) {

	// Make sure this feature is activated before running
	if (!settings.styles) return done();

	// Run tasks on all Sass files
	return src(paths.styles.input)
		.pipe(sass({
			outputStyle: 'expanded',
			sourceComments: true
		}))
		.pipe(postcss([
			prefix({
				cascade: true,
				remove: true
			})
		]))
		.pipe(dest(paths.styles.output))
		.pipe(rename({suffix: '.min'}))
		.pipe(postcss([
			minify({
				discardComments: {
					removeAll: true
				}
			})
		]))
		.pipe(dest(paths.styles.output));

};

/**
 * Export Tasks
 */

// Default task
// gulp
exports.default = series(
	parallel(
		buildStyles
	)
);