var LoginPage = require('./loginPage.js');
var EmployeeListPage = require('./EmployeeListPage.js');

var EmployeePage = function() {
	var addButton = element(by.css('button[ng-show=isCreateForm]'));
	var cancelButton = element(by.css('a.subButton.bCancel'));
	var backButton = element(by.css('a.subButton.bBack'));
	var updateButton = element(by.css('button[ng-hide=isCreateForm]'));
	var deleteButton = element(by.css('p.main-button[ng-hide=isCreateForm]'));
	
	
	var firstNameField = element(by.model('selectedEmployee.firstName'));
	var lastNameField = element(by.model('selectedEmployee.lastName'));
	var startDateField = element(by.model('selectedEmployee.startDate'));
	var emailField = element(by.model('selectedEmployee.email')); 
		
	this.getFirstName = function() {
		return firstNameField.getText();
	}
	
	this.getLastName = function() {
		return lastNameField.getText();
	}	
		
	this.setFirstName = function(firstName) {
		firstNameField.clear();
		return firstNameField.sendKeys(firstName);
	}
	
	this.setLastName = function(lastName) {
		lastNameField.clear();
		return lastNameField.sendKeys(lastName);
	}
	
	this.setStartDate = function(startDate) {
		startDateField.clear();
		return startDateField.sendKeys(startDate);
	}
	
	this.setEmail = function(email) {
		emailField.clear();
		return emailField.sendKeys(email);
	}
	
	this.clickAddButton = function () {
		return addButton.click();
	}
	
	this.goBack = function () {
		return backButton.click();
	}
	
	this.cancelCreate = function() {
		return cancelButton.click();
	}
	
	this.updateDetails = function() {
		return updateButton.click();
	}
	
	this.clickDeleteButton = function() {
		return deleteButton.click();
	}	
	
	this.isAddButtonVisible = function() {
		return expect(addButton.isPresent()).toBe(true);
	}
	
	this.isCancelButtonVisible = function() {
		return expect(cancelButton.isPresent()).toBe(true);
	}
	
	this.isUpdateButtonVisible = function() {
		return expect(updateButton.isPresent()).toBe(true);
	}
	
	this.isDeleteButtonVisible = function() {
		return expect(deleteButton.isPresent()).toBe(true);
	}
	
	this.isBackButtonVisible = function() {
		return expect(backButton.isPresent()).toBe(true);
	}
	
	this.isAlertTextEquals = function(alertText) {
		return browser.driver.switchTo().alert().getText().then(function(text){
			console.log(text);
			console.log(alertText);
			return expect(text).toEqual(alertText);
		});
	}	
	
	this.refreshListPage = function () {
        EmployeeListPage.clickCreateButton();
        cancelButton.click();
    }
	
	this.isElementPresentWithSelector = function(cssSelector) {
		return expect(element(by.css(cssSelector)).isPresent()).toBe(true);
	}
	
};
module.exports = new EmployeePage();