angular.module('myApp',['ngMaterial','ngRoute'])
.config(function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/createstore',{
			templateUrl: 'public/views/create-store.html',
			controller: 'CreateStoreCtrl'
		})
		.when('/create-password/:passwordLink',{
			templateUrl: 'public/views/create-password.html',
			controller: 'CreatePassCtrl'
		})
		.when('/test',{
			templateUrl:'public/views/test.html'
		})
		.otherwise({
			redirectTo:'/'
		})

})