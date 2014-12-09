quoteApp.controller('quoteFormController', ['$scope', '$location', 'quoteFormService', 
	function($scope, $location, quoteFormService) {

    $scope.welcomeMessage = 'Everyone come and see how good I look!';

    $scope.questionViewModel = {};

    $scope.init = function() {

    	console.log('init of quote form controller');
		$scope.questionViewModel = quoteFormService.beginQuoteForm();

		$location.path('/' + $scope.questionViewModel.question);
    };

    $scope.moveNext = function(newQuestionViewModel) {
    	console.log('moveNext');
    	$scope.questionViewModel = newQuestionViewModel;
    	$location.path('/' + $scope.questionViewModel.question);
    }

    //todo: move previous, how does that work?

}]);

quoteApp.controller('introController', ['$scope', 'quoteFormService', function($scope, quoteFormService) {
    
	var quoteFormController = $scope.$parent;

    $scope.completeQuestion = function() {
    	console.log('intro: completeQuestion');
    	
    	quoteFormService.completeQuestion(quoteFormController.questionViewModel)
    		.then(function(newQuestionViewModel){
    			console.log('intro: all good move on');
    			quoteFormController.moveNext(newQuestionViewModel);

    		}, function(error){
    			console.log('intro: error!');
    		});
    }

}]);

quoteApp.controller('nameController', ['$scope', function($scope) {
    
	var quoteFormController = $scope.$parent;

    $scope.completeQuestion = function() {
    	console.log('name: do something');
    	
    	quoteFormService.completeQuestion(quoteFormController.questionViewModel)
    		.then(function(newQuestionViewModel){
    			console.log('name: all good move on');

				//todo: trigger animation and wait until it finishes

    			quoteFormController.moveNext(newQuestionViewModel);

    		}, function(error){
    			console.log('name: error!');
    			//todo: play around with returning errors and redirecting to decline pages
    		});
    }

}]);