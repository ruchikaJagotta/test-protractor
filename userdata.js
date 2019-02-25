module.exports = {
	correctLogin:{
		userId : 'Luke',
		userPassword : 'Skywalker'
	},
	
    incorrectLogin: {
		userId : "hello",
		userPassword : "hello"
    },
	
	userDetails: {
		firstName : "luke",
		lastName : "pilot",
		startDate : "2019-03-22",		
		email : "luke@pilot",
		incorrectEmail : "pol",
		invalidEmail : "pol@",
		invalidStartDate : "pilot",
		editFirstName : "Luke_edited",
		editLastName : "pilot_edited",
		editLastFirstName : "Luke_edited_last",
		editLastLastName : "pilot_edited_last"			
	},
	messages : {
		applicationTitle : "CafeTownsend-AngularJS-Rails",
		invalidLogin : "Invalid username or password!",
		invalidStartDate: 'Error trying to create a new employee: {"start_date":["can\'t be blank"]})',
		confirmDelete : "Are you sure you want to delete ",
		suffixQuestionMark : "?",	
		validLogin : "Hello Luke",		
		createButtonLabel : "Create",
		addButtonLabel : "Add"	
	}
}