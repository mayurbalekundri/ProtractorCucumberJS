var reporter = require('cucumber-html-reporter');
var now = new Date();
report_name = 'Report-' + now.getFullYear() + "-"+ (now.getMonth()+1) + "-" + now.getDate() +"-"+now.getHours()+"-"+now.getMinutes()+"-"+now.getSeconds();
exports.config = {
		directConnect : true,
	seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: '/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.3.1.jar',
  //directConnect:true,
  getPageTimeout: 6000000,
  allScriptsTimeout: 5000000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
          'prefs': {
              'credentials_enable_service': false,
              'profile': {
                  'password_manager_enabled': false
              }
          }
      }
  },
  specs: [
    '../Features/DataTable.feature'
  ],
  
  /*specs: [
	    '../Features/istockHomepage.feature','../Features/istockBoard.feature','../Features/istock.feature'
	  ],*/

//resultJsonOutputFile:'../Results/json/cucumber_report.json',
cucumberOpts: {
    require: ['../support/*.js','../StepDefination/*.js'],
    format:'json:../Results/json/cucumber_report.json',
 //   tags:"@SmokeTest,@FunctionalTest",
    //tags:false,
    profile: false,
    'no-source': true,
    keepAlive: false

  },
ignoreUncaughtExceptions: true,
onPrepare: function()
{
browser.driver.manage().window().maximize();
browser.ignoreSynchronization = false;
},
onComplete: function ()
{
var path = require('path');
var ncp = require('ncp').ncp;
const exec = require('child_process').exec;
  var options = {
         theme: 'bootstrap',
         jsonFile: '../Results/json/cucumber_report.json',
         output: '../Results/'+report_name+'/cucumber_report.html',
         reportSuiteAsScenarios: true,
         launchReport: true,
         metadata: {
             "App Version":"0.3.2",
             "Test Environment": "STAGING",
             "Browser": "Chrome  54.0.2840.98",
             "Platform": "MAC",
             "Parallel": "Scenarios",
             "Executed": "Remote"
         }
     };

     reporter.generate(options);
     var srcPath = path.dirname('../Results/'+report_name+'/.html');
     var destPath = '../Results/LastBuild/';

     console.log('Copying files...');
     ncp(srcPath, destPath, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Copying files complete.');
     });
  console.log("On complete");
}
}
