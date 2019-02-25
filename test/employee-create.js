var LoginPage = require('./../Page/loginPage.js');
var EmployeePage = require('./../Page/employeePage.js');
var EmployeeListPage = require('./../Page/employeeListPage.js');
var userData = require('./../userdata.js');


describe('Create Employee TestSuite', function(){
	
	
	beforeEach(function() {
		LoginPage.get();
		LoginPage.loginToApplication();	
	});
	
	
	it('should click the create button',function(){			
		EmployeeListPage.clickCreateButton();	
		EmployeePage.isAddButtonVisible();
	});
	
	it('should enter the correct details in all fields',function(){
		EmployeeListPage.clickCreateButton().then(function(){
			EmployeePage.isCancelButtonVisible();
			EmployeePage.setFirstName(userData.userDetails.firstName);
			EmployeePage.setLastName(userData.userDetails.lastName);
			EmployeePage.setStartDate(userData.userDetails.startDate);
			EmployeePage.setEmail(userData.userDetails.email);
			EmployeePage.clickAddButton();
			var elementName = userData.userDetails.firstName+" "+userData.userDetails.lastName; 
			EmployeeListPage.isElementWithTextPresent(elementName);
		});	
	});
	
	it('should match the date pattern',function(){
		EmployeeListPage.clickCreateButton().then(function(){
			EmployeePage.setFirstName(userData.userDetails.firstName);
			EmployeePage.setLastName(userData.userDetails.lastName);
			EmployeePage.setStartDate(userData.userDetails.invalidStartDate);
			EmployeePage.setEmail(userData.userDetails.email);
			EmployeePage.clickAddButton();
			browser.sleep(2000);
			EmployeePage.isAlertTextEquals(userData.messages.invalidStartDate);
			browser.driver.switchTo().alert().accept();			
		});		
	});	
	
	it('should match the email pattern',function(){
		EmployeeListPage.clickCreateButton().then(function(){
			EmployeePage.setFirstName(userData.userDetails.firstName);
			EmployeePage.setLastName(userData.userDetails.lastName);
			EmployeePage.setStartDate(userData.userDetails.startDate);
			EmployeePage.setEmail(userData.userDetails.invalidEmail);
			EmployeePage.clickAddButton();
			browser.sleep(2000);
			EmployeePage.isElementPresentWithSelector('input.ng-invalid.ng-invalid-email');	
		});		
	});	
	
	it('should filled the required field',function(){
		EmployeeListPage.clickCreateButton().then(function(){
			EmployeePage.clickAddButton();
			browser.sleep(2000);
			EmployeePage.isElementPresentWithSelector('input.ng-invalid-required');			
		});		
	});	
	
	afterEach(function() {
		LoginPage.doLogOut();
	});
});