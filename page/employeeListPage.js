
var EmployeeListPage = function() {
	var createButton = element(by.id('bAdd'));
	var editButton = element(by.id('bEdit'));
    var deleteButton = element(by.id('bDelete'));
	var cancelButton = element(by.css('a.subButton.bCancel'));
	
	this.clickCreateButton = function () {
		return createButton.click();
	}
	
	this.clickEditButton = function () {
		return editButton.click();
	}
	
	this.clickDeleteButton = function () {
		return deleteButton.click();
	}
		
	this.isCreateButtonVisible = function() {
		return expect(createButton.isPresent()).toBe(true);
	}
	
	this.isEditButtonVisible = function() {
		return expect(editButton.isPresent()).toBe(true);
	}
	
	this.isDeleteButtonVisible = function() {
		return expect(deleteButton.isPresent()).toBe(true);
	}
	
	this.isElementWithTextPresent = function(elementText) {
		return expect(element(by.cssContainingText('li.ng-scope.ng-binding', elementText)).isPresent()).toBe(true);
	}	
	
	this.getTotalEmployeesNumber = function() {
		 return element.all(by.repeater('employee in employees')).count().then(function(count) {
			return count; 
		 });
	}
	
	this.selectFirstElement = function() {
		return element.all(by.repeater('employee in employees')).first().click();
	}

	this.editLastElement = function() {
		return browser.actions().doubleClick(element.all(by.repeater('employee in employees')).last()).perform();
	}		
	
	this.getSelectedEmployeeName = function() {
		return element(by.css('#employee-list li.active')).getText().then(function(elementName) {
			return elementName;
		});
	};
	
};
module.exports = new EmployeeListPage();