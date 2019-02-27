// reference from http://www.protractortest.org/#/page-objects
var env = require('./../environment.js');
var userData = require('./../userdata.js');

var LoginPage = function() {
	var userNameField = element(by.model('user.name'));
	var passwordField = element(by.model('user.password'));
	var loginButton = element(by.css('button'));
	var errorMessage = element(by.className('error-message ng-binding'));
	var greetingMessage = element(by.id('greetings'));
	var logOutButton = element(by.css('body > div > header > div > p.main-button'));
  
	this.get = function() {
		browser.get(env.applicationURL);
		browser.manage().window().maximize();
	};

	this.setUserName = function(name) {
		return userNameField.sendKeys(name);
	};
	
	this.setPassword = function(passwordValue) {
		return passwordField.sendKeys(passwordValue);
	};
	
	this.getGreetingText = function() {
		return greetingMessage.getText();
	};
	
	/*
	* correct login for application
	*/
	this.loginToApplication = function() {
		this.setUserName(userData.correctLogin.userId);
		this.setPassword(userData.correctLogin.userPassword);	
		return loginButton.click();	
	}
		
	this.doLogin = function(userName, passwordValue) {
		this.setUserName(userName);
		this.setPassword(passwordValue);	
		return loginButton.click();
	}
	
	this.getErrorText = function() {
		return errorMessage.getText();
	};	
	
	this.doLogOut = function() {
		return logOutButton.click();
	}
};
module.exports = new LoginPage();