quoteApp.factory('quoteFormService', ['$q', function($q){
	var service = {};

	service.beginQuoteForm = function() {
		//call http
		return { question: 'intro', model: {} };
	}

	service.completeQuestion = function(questionViewModel) {
		
console.log('service.completeQuestion');
console.log(questionViewModel);

		var deferred = $q.defer();

		if(questionViewModel.question === 'intro') {
			deferred.resolve({ question: 'name', model: {firstName: '', lastName: ''} });	
		}		

		if(questionViewModel.question === 'name') {
			deferred.resolve({ question: 'gender', model: {gender: ''} });	
		}


		return deferred.promise;
	}

	return service;
}]);