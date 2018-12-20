var gulp = require('gulp'),
	babel=require('gulp-babel'),
    //cssmin = require('gulp-minify-css'),             //css压缩
    uglify = require('gulp-uglify'),               //js压缩          //图片的压缩
    //base64 = require('gulp-base64') ,               //- 把小图片转成base64字符串
    htmlmin = require('gulp-htmlmin') ,  
    imagemin = require('gulp-imagemin'),
    runSequence = require('run-sequence'),   
  	rev = require('gulp-rev'),    
 	revCollector = require('gulp-rev-collector'),
    sass = require('gulp-sass'),
    //建立服务器跨域
    connect = require('gulp-connect'),
    proxy = require('http-proxy-middleware');
//压缩html文件
gulp.task('html', ['img','css','script'],function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src(['rev/**/*.json','./src/*.html'])
        .pipe(htmlmin(options))
        .pipe(revCollector({
           replaceReved: true
       }))
        .pipe(gulp.dest('./dist/'));
}); 
// 压缩 js 文件
gulp.task('script', function() {
    // 1. 找到文件
    gulp.src('src/js/*.js')
    	.pipe(babel({ presets:['env'] }))
    // 2. 压缩文件
        .pipe(uglify({ mangle: false }))
        .pipe(rev())
    // 3. 另存压缩后的文件
        .pipe(gulp.dest('./dist/js/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js'));
});
//图片
gulp.task('img', function() {
    gulp.src(['./src/img/**/*.{jpg,png,gif}','img/*.{jpg,png,gif}'])
        //.pipe(imagemin())
        .pipe(rev())
        .pipe(gulp.dest('./dist/img/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/img'));
});
//scss文件
gulp.task('sass', function () {
  gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});
//css
gulp.task('css', function () {
  gulp.src(['rev/img/*.json','./src/css/*.css'])
  	.pipe(rev())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/css'));
});
/**
 * 静态资源
 */
gulp.task('static', function() {
	return gulp.src('./src/static/**/*')
		.pipe(gulp.dest('./dist/static/'))
});
gulp.task('newTask', function() {
	return gulp.src('./src/newTask/**/*')
		.pipe(gulp.dest('./dist/newTask/'))
});
gulp.task('turnplate', function() {
	return gulp.src('./src/turnplate/**/*')
		.pipe(gulp.dest('./dist/turnplate/'))
});
//gulp.task('investmentNew', function() {
//	return gulp.src('./src/investmentNew/**/*')
//		.pipe(gulp.dest('./dist/investmentNew/'))
//});
gulp.task('watch', function() {
    //app
    gulp.watch(['./src/js/*.js'], ['script']);
    gulp.watch(['./src/*.html'], ['html']);
    gulp.watch(['./src/img/**/*.{jpg,png,gif}','img/*.{jpg,png,gif}'], ['img']);
    gulp.watch(['./src/sass/*.scss'], ['sass']); 
    gulp.watch(['./src/css/*.css'], ['css']); 
    //静态资源
    gulp.watch(['./src/static/**/*'], ['static']); 
    gulp.watch(['./src/newTask/**/*'], ['newTask']); 
    gulp.watch(['./src/turnplate/**/*'], ['turnplate']);
});
/* 合并上述我的方法 监控并执行任务 */
gulp.task('default',['script','html','img','sass','css','static','newTask','turnplate','watch']);



//压缩html文件
gulp.task('htmlRebate', ['imgRebate','cssRebate','scriptRebate'],function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src(['investmentNew/rev/**/*.json','./src/investmentNew/*.html'])
        .pipe(htmlmin(options))
        .pipe(revCollector({
           replaceReved: true
       }))
        .pipe(gulp.dest('./dist/investmentNew/'));
}); 
// 压缩 js 文件
gulp.task('scriptRebate', function() {
    // 1. 找到文件
    gulp.src('src/investmentNew/js/*.js')
    	.pipe(babel({ presets:['env'] }))
    // 2. 压缩文件
        .pipe(uglify({ mangle: false }))
        .pipe(rev())
    // 3. 另存压缩后的文件
        .pipe(gulp.dest('./dist/investmentNew/js/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('investmentNew/rev/js'));
});
//图片
gulp.task('imgRebate', function() {
    gulp.src(['./src/investmentNew/img/**/*.{jpg,png,gif}','./img/*.{jpg,png,gif}'])
        //.pipe(imagemin())
        .pipe(rev())
        .pipe(gulp.dest('./dist/investmentNew/img/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('investmentNew/rev/img'));
});
//css
gulp.task('cssRebate', function () {
  gulp.src(['investmentNew/rev/img/*.json','./src/investmentNew/css/*.css'])
  	.pipe(rev())
    .pipe(gulp.dest('./dist/investmentNew/css/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('investmentNew/rev/css'));
});
gulp.task('investment',['scriptRebate','htmlRebate','imgRebate','cssRebate']);


//建立服务器
gulp.task('connect-server', function () {
    connect.server({
        root: './',
        livereload: true,
        port: 8010,
        middleware: function (connect, opt) {
            return [
                proxy('/zaotoutiao-api-home-1.0.0', {
                    target: 'https://zhishun888.com/',
                    changeOrigin:true,
                    pathRewrite: {
				        "^/zaotoutiao-api-home-1.0.0": "/"
				      }
                })
            ]
        }
    });
});

gulp.task('watch-server', function () {
    gulp.watch(['./*.html'], ['html']);

});

gulp.task('html-server', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});


//运行Gulp时，默认的Task
gulp.task('server', ['connect-server', 'watch-server']);