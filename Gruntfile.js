module.exports = function(grunt){

  grunt.initConfig({

    photobox: {
    task : {
      options: {
        // Task-specific options go here.
        screenSizes : [ '600', '1000', '1200' ],
        urls        : [ 'https://www.w3schools.com/angular/angular_intro.asp', 'https://angularjs.org/' ]
      }
    }
  },
      protractor: {
          e2e: {
              options : {
                  configFile: 'Config/Conf_cucumber_Jenkins.js',
                  keepAlive: false,
                  webdriverManagerUpdate: true
              }
          },

          AndroidTask: {
                  options:{
                      configFile: 'Conffiles/conf_android_web.js',
                      keepAlive: false
                  }
          },
          iOSTask:{
              options:{
                  configFile: 'Conffiles/conf_ios_web.js',
                  keepAlive: false
              }
          }

      },
      jenkins:{
      serverAddress: 'http://localhost:8080',
      pipelineDirectory: 'jenkins-pipeline'   // optional, default: 'pipeline'

      },

    'protractor-cucumber-html-report': {
    default_options: {
      options: {
        dest: 'Results/reports/',//Where you want to generate the HTML report.
        output: 'report.html',//File Name
        testJSONDirectory: 'Results/json/'//Mention where you have generated JSON format.
      }
    }
  }

  });
//add grunt protractor npm tasks into grunt.
    grunt.loadNpmTasks('grunt-protractor-cucumber-html-report');
    grunt.loadNpmTasks('grunt-jenkins');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-size-report');
    grunt.loadNpmTasks('grunt-photobox');
    grunt.registerTask('e2e', ['protractor:e2e']);
    grunt.registerTask('default', ['protractor:e2e','protractor-cucumber-html-report']);

};
