var quoteApp = angular.module('quoteApp', ['ngRoute']);
quoteApp.config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/:name', {
         templateUrl: function(urlattr){
             return 'pages/' + urlattr.name + '.html';
         },
         controller: function($scope, $routeParams, $controller) {
           	$controller($routeParams.name + "Controller", {$scope:$scope});
    	}
     });
}]);