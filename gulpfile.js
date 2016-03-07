const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
var concat = require('gulp-concat');//文件合并
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');//文件更名

gulp.task('compress',function(){
	return gulp.src('js/*.js')
		.pipe(concat('all.js'))
	    .pipe(gulp.dest('dist/js'))
	    .pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});
 
gulp.task('default', () => {
	return gulp.src('images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant({quality: '20-30'})]
		}))
		.pipe(gulp.dest('dist/images'));
});
