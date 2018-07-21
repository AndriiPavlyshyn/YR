var gulp       = require('gulp'), // Подключаем Gulp
		sass         = require('gulp-sass'), //Подключаем Sass пакет,
		browserSync  = require('browser-sync'), // Подключаем Browser Sync
		concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
		uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
		cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
		rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
		del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
		imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
		pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
		cache        = require('gulp-cache'), // Подключаем библиотеку кеширования

		fileinclude		= require('gulp-file-include'),

		autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function(){ // Создаем таск Sass
		return gulp.src('app/sass/**/*.sass') // Берем источник
				.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
				.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
				.pipe(gulp.dest('builder/css')) // Выгружаем результата в папку app/css
				.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('fileinclude', function() {
	gulp.src(['app/*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
	.pipe(gulp.dest('builder'))
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
		browserSync({ // Выполняем browserSync
				server: { // Определяем параметры сервера
						baseDir: 'builder' // Директория для сервера - app
				},
				notify: false // Отключаем уведомления
		});
});

gulp.task('scripts-min', function() {
		return gulp.src([
				'app/js/common.js' // Берем common.js (always in end)
				])
				.pipe(uglify()) // Сжимаем JS файл
				.pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});

gulp.task('js-concat', function() {
	return gulp.src(['app/js/jquery.min.js', 'app/js/uikit.min.js',
	'app/js/uikit-icons.min.js',
	'app/js/common.js'
])
	.pipe(concat('scripts.min.js'))
	.pipe(gulp.dest('builder/js'))
});


gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/main.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('builder/css')); // Выгружаем в папку app/css
});

gulp.task('css-redirect', function() {
	return gulp.src(['app/css/uikit.min.css'])
		.pipe(gulp.dest('builder/css')) // Выгружаем в папку
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('img', function() {
	return gulp.src('builder/img/**/*') // Берем все изображения из app
		.pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
	.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('img-redirect', function() {
	return gulp.src(['app/img/**/*'])
		.pipe(gulp.dest('builder/img')); // Выгружаем в папку
});


gulp.task('fonts-redirect', function() {
	return gulp.src(['app/fonts/**/*'])
		.pipe(gulp.dest('builder/fonts')) // Выгружаем в папку
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', ['browser-sync', 'sass', 'fonts-redirect', 'css-redirect', 'fileinclude', 'js-concat', 'img-redirect'], function() {
		gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
		gulp.watch('app/css/**/*.css', ['sass']); // Наблюдение за sass файлами в папке sass
		gulp.watch('app/**/*.html', ['fileinclude']); // Наблюдение за HTML файлами в корне проекта
		gulp.watch('app/**/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
		gulp.watch('app/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('clean', function() {
		return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts-min', 'js-concat'], function() {

		var buildCss = gulp.src([ // Переносим библиотеки в продакшен
				'builder/css/main.css',
				'builder/css/uikit.min.css'
				])
		.pipe(gulp.dest('dist/css'))

		var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
		.pipe(gulp.dest('dist/fonts'))

		var buildJs = gulp.src('builder/js/**/[^_]*.js') // Переносим скрипты в продакшен
		.pipe(gulp.dest('dist/js'))

		var buildHtml = gulp.src(['builder/[^_]*.html', '!builder/builder.html', '!builder/index.html']) // Переносим HTML в продакшен
		.pipe(gulp.dest('dist'));

});

gulp.task('clear', function () {
		return cache.clearAll();
})

gulp.task('default', ['watch']);
