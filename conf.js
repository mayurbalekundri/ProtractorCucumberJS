exports.config = {

	// setting to launch tests directly without selenium server
	directConnect : true,
	// address of running selenium server
	seleniumAddress : 'http://localhost:4444/wd/hub',

	// setting time outs
	getPageTimeOut : 200000,
	allScriptsTimeout : 500000,

	// setting framework
	framework : 'custom',
	frameworkPath : require.resolve('protractor-cucumber-framework'),

	// setting protractor to ignore uncaught exceptions to take care by protractor-cucumber-framework
	ignoreUncaughtExceptions : true,

	// configuration parameters
	params: {
		testEnv: 'test'
    },
	
	// browser to launch tests
	capabilities : {
		browserName : 'chrome',
		chromeOptions : {
			args : [ '--disable-extensions', ]
		}
	},

	// Specify Test Files
	//
	// Define which tests should execute
	/*specs : [ 
	          'features/*.feature'
	       ],*/

	//Define which tests should be excluded from execution.
	exclude : [
	          // 'features/search.feature'
			],

	// Set log level and enables colors for log output
//	logLevel : 'verbose',
//	coloredLogs : true,

		suites:{
				
			    mgrlogin:['features/MgrLogin.feature'],
			    CreateCustomer:['features/CreateCustomer.feature'],
			    CustomerTrans:['features/CustomerTrans.feature'],
			    CustomerList:['features/CustomerList.feature']
		},               
			
		// arguments to cucumber.js	
		cucumberOpts : {
		require : [ 
		            'features/support/env.js', 
		            'features/support/hooks.js',
		//            'features/step_definitions/searchSteps.js',
		            'features/step_definitions/*.js'
		],
	//	tags : ["@SmokeTest" & "@FunctionalTest"], 
	//	tags : ["@SmokeTest"],
		format : 'pretty',
		profile : false,
		'no-source' : true
	}
	
};
