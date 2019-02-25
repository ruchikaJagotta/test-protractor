var LoginPage = require('./../Page/loginPage.js');
var EmployeePage = require('./../Page/employeePage.js');
var EmployeeListPage = require('./../Page/employeeListPage.js');
var userData = require('./../userdata.js');

'use strict'
describe('Delete employee TestSuite', function(){
		
	beforeEach(function() {
		LoginPage.get();
		LoginPage.loginToApplication();	
	});
		
	it('Delete employee from list by button', function() {
		EmployeeListPage.selectFirstElement();		
		var initialElementsCount = EmployeeListPage.getTotalEmployeesNumber();
		
		var employeeName = EmployeeListPage.getSelectedEmployeeName();
		
		EmployeeListPage.isDeleteButtonVisible();
		
		EmployeeListPage.clickDeleteButton();
		
		browser.driver.switchTo().alert().accept();
		browser.sleep(2000);
		EmployeePage.refreshListPage();
		browser.sleep(2000);
		var elementsCountNow = EmployeeListPage.getTotalEmployeesNumber();
		elementsCountNow.then(function(text){			
			var elementsCountNow = text +1;
		return expect(initialElementsCount).toEqual(elementsCountNow);
		});		
	});	
	
	it('Delete employee from details', function() {
		
		var initialElementsCount = EmployeeListPage.getTotalEmployeesNumber();		
		EmployeeListPage.editLastElement();
		browser.sleep(2000);
		var employeeName = EmployeePage.getFirstName()+" "+EmployeePage.getLastName();
		
		EmployeePage.isDeleteButtonVisible();		
		EmployeePage.clickDeleteButton();
		
		browser.driver.switchTo().alert().accept();
		browser.sleep(2000);
		var elementsCountNow = EmployeeListPage.getTotalEmployeesNumber();
		var elementsCountNow = EmployeeListPage.getTotalEmployeesNumber();
		elementsCountNow.then(function(text){			
			var elementsCountNow = text +1;
		return expect(initialElementsCount).toEqual(elementsCountNow);
		});
	});	
	
	afterEach(function() {
		LoginPage.doLogOut();
	});
});