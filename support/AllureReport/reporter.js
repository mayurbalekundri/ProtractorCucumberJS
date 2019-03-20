var reporter = require('cucumberjs-allure-reporter');
var fs = require('fs');
//var screenshot = require('./screenshot');
var now = new Date();
var report_name = 'Report-' + now.getFullYear() + "-"+ (now.getMonth()+1) + "-" + now.getDate() +"-"+now.getHours()+"-"+now.getMinutes()+"-"+now.getSeconds();
var logfile_name = 'results-' + now.getFullYear() + "-"+ (now.getMonth()+1) + "-" + now.getDate() +"-"+now.getHours()+"-"+now.getMinutes()+"-"+now.getSeconds();
//var xmlReports = '../Target/'+report_name+'/'+logfile_name;
//var xmlReports = '../Target/'+report_name+'/'+logfile_name;
reporter.config(
    {

        targetDir: '../Results/'+report_name+'/'+logfile_name

    }

);


module.exports = reporter;
module.exports.report_name=report_name;
module.exports.logfile_name=logfile_name;
