var gulp = require("gulp");
var protractor = require("gulp-protractor").protractor;
var watch = require('gulp-watch');
var reporter = require('gulp-protractor-cucumber-html-report');

gulp.task("Protractor", function(cb){
gulp.src(["./src/StepDefination/*.js"])
    .pipe(protractor({
        configFile: "Config/Conf_Protractor_cucumberR.js"
    })).on('error', function(e) { console.log(e); }).on('end', cb);

});
//gulp.task("Reporter",['Protractor'], function(){
gulp.task("Reporter", function(){
gulp.src('./Results/json/cucumber-test-results.json')
    .pipe(reporter({
        dest: './Results/reports/'
    }));
    console.log("in html reports");
  });

gulp.task('watch:json',function(){
  gulp.watch('Results/json/*.json', ['reporter'])
});

gulp.task('default',['Protractor','Reporter']);
