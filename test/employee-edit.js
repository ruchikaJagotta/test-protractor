var LoginPage = require('./../Page/loginPage.js');
var EmployeePage = require('./../Page/employeePage.js');
var EmployeeListPage = require('./../Page/employeeListPage.js');
var userData = require('./../userdata.js');


describe('Edit Employee TestSuite', function(){
		
	beforeEach(function() {
		LoginPage.get();
		LoginPage.loginToApplication();	
	});
		
	it('Edit first employee details by Edit button', function() {
		EmployeeListPage.selectFirstElement();
		EmployeeListPage.isEditButtonVisible();
		EmployeeListPage.clickEditButton();
		EmployeePage.setFirstName(userData.userDetails.editFirstName);
		EmployeePage.setLastName(userData.userDetails.editLastName);	
		EmployeePage.isBackButtonVisible();		
		EmployeePage.isUpdateButtonVisible();
		EmployeePage.isDeleteButtonVisible();		
		EmployeePage.updateDetails();
		browser.sleep(2000);
		var elementName = userData.userDetails.firstName+" "+userData.userDetails.lastName; 
		EmployeeListPage.isElementWithTextPresent(elementName);
	});	
	
	it('Edit last employee details by double click', function() {
		EmployeeListPage.editLastElement();
		EmployeePage.setFirstName(userData.userDetails.editLastFirstName);
		EmployeePage.setLastName(userData.userDetails.editLastLastName);		
		EmployeePage.isUpdateButtonVisible();
		EmployeePage.isDeleteButtonVisible();		
		EmployeePage.updateDetails();
		browser.sleep(2000);
		var elementName = userData.userDetails.editLastFirstName+" "+userData.userDetails.editLastLastName; 
		EmployeeListPage.isElementWithTextPresent(elementName);
	});	
	
	afterEach(function() {
		LoginPage.doLogOut();
	});
});