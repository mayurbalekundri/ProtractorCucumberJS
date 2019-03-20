//SauceLabs
sauceUser: process.env.SAUCE_USERNAME,
sauceKey: process.env.SAUCE_ACCESS_KEY,

  multiCapabilities: [{
      browserName: 'firefox',
      version: 'latest',
      platform: 'OS X 10.10',
      name: "firefox-tests",
      shardTestFiles: true,
      maxInstances: 25
  }, {
      browserName: 'chrome',
      version: '41',
      platform: 'Windows 7',
      name: "chrome-tests",
      shardTestFiles: true,
      maxInstances: 25
  }],
//iOS APP
seleniumAddress: 'http://0.0.0.0:4723/wd/hub',
// Capabilities to be passed to the webdriver instance.
capabilities: {
  'browserName': 'SAFARI',
  'appium-version': '1.6',
  'platformName': 'IOS',
  'platformVersion': '10.3',
  'automationName':'XCUITEST',
  'deviceName': 'bf92e5ccd0ce489ff8f29900ca4c2ab73c7f4c1d'
},

// Framework to use. Jasmine is recommended.
framework: 'jasmine',

// Spec patterns are relative to the current working directory when
// protractor is called.
specs: ['../SpecFiles/ios_web_spec.js'],

baseUrl:'http://localhost:8000',

// Options to be passed to Jasmine.
jasmineNodeOpts: {
  defaultTimeoutInterval: 800000000
},

  onPrepare: function () {
      var Jasmine2HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
      var wd = require('wd'),
          protractor = require('protractor'),
          wdBridge = require('wd-bridge')(protractor, wd);
          wdBridge.initFromProtractor(exports.config);
      jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter
          ({
              dest: 'Results/AppiumiOS/screenshots',
              filename: 'Report.html'
          }));
    }
//Android Web
capabilities: {
  'browserName': 'chrome',
  'appium-version': '1.5.3',
  'platformName': 'android',
  'plateformVersion': '6.0',
  'deviceName': '32085ddc0f5e7177'
},

framework: 'jasmine',

specs: ['../SpecFiles/android_web_spec.js'],


baseUrl:'http://localhost:8000',

// Options to be passed to Jasmine.
jasmineNodeOpts: {
  defaultTimeoutInterval: 3000000
},

  onPrepare: function () {
    var Jasmine2HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
    var wd = require('/usr/local/bin/node_modules/wd'),
        protractor = require('protractor'),
        wdBridge = require('/usr/local/bin/node_modules/wd-bridge')(protractor, wd);
        wdBridge.initFromProtractor(exports.config);
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            dest: 'Results/AppiumiOS/screenshots',
            filename: 'Report.html'
        }));}

Android hybrid

seleniumAddress: 'http://127.0.0.1:4723/wd/hub',

// Capabilities to be passed to the webdriver instance.
capabilities: {
  'browserName': '',
  'appium-version': '1.5.3',
  'platformName': 'android',
  'plateformVersion': '5.0',
  'deviceName': '32085ddc0f5e7177',
  'appPackage': 'io.appium.gappium.sampleapp',
   'appActivity': '.HelloGappium',
   'autoWebview' :true,
   'autoWebviewTimeout': 10000

},

// Framework to use. Jasmine is recommended.
framework: 'jasmine',

// Spec patterns are relative to the current working directory when
// protractor is called.
specs: ['spec_android_hybrid.js'],

baseUrl:'http://localhost:8000',

// Options to be passed to Jasmine.
jasmineNodeOpts: {
  defaultTimeoutInterval: 30000
},

  onPrepare: function () {

      var wd = require('/usr/local/bin/node_modules/wd'),
          protractor = require('protractor'),
          wdBridge = require('/usr/local/bin/node_modules/wd-bridge')(protractor, wd);
      wdBridge.initFromProtractor(exports.config);


    }
