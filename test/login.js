var LoginPage = require('./../Page/loginPage.js');
var userData = require('./../userdata.js');

describe('Login TestSuite',function(){
	
	beforeEach(function() {
		LoginPage.get();
	});
	  
	it('should have a title',function(){
		expect(browser.getTitle()).toEqual(userData.messages.applicationTitle);
	});
	
	it('should Login with incorrect details',function(){
		LoginPage.doLogin(userData.incorrectLogin.userId, userData.incorrectLogin.userPassword);
		expect(LoginPage.getErrorText()).toEqual(userData.messages.invalidLogin);
	});
	
	it('should Login successfully',function(){		
		LoginPage.loginToApplication();
		expect(LoginPage.getGreetingText()).toEqual(userData.messages.validLogin);		
	});
});