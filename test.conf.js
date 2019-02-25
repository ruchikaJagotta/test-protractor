//config.js
// reference taken from http://www.protractortest.org/#/page-objects
// https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter
// http://www.protractortest.org/#/async-await

var env = require('./environment.js');
var jasmine2htmlreporter = require('protractor-jasmine2-html-reporter');

exports.config = {
	framework: 'jasmine',
	seleniumServerJar: './selenium/selenium-server-standalone-3.141.59.jar',
	suites: {
		loginPage: './test/login.js',
		employee: ['./test/employee-*.js']
	  },
	multiCapabilities: [
	{
		browserName: 'chrome'		
	},
	{
		browserName: 'firefox'		
	},
	//{
	//	browserName: 'safari'		
	//}
	],
	
	onPrepare: function(){
		browser.manage().timeouts().implicitlyWait(5000);
		jasmine.getEnv().addReporter(
			new jasmine2htmlreporter({
				savePath:'./reports',          
				screenshotsFolder: 'images',
                filename: 'testReport.html',
				takeScreenshots: true,
				takeScreenshotsOnlyOnFailures: true				
			})
			);
	},
	jasmineNodeOpts: {
		 defaultTimeoutInterval: 20000000
	}
  }
	
