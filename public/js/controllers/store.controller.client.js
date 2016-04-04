angular.module('myApp')
	.controller('CreateStoreCtrl',['$scope','StoreService',function($scope,StoreService){

		$scope.createStore = function(){
			StoreService
				.createStore($scope.store)
				.then(function(res){

				},function(err){

				})
		}
	}])
	.controller('CreatePassCtrl',['$scope','StoreService','$routeParams',function($scope,StoreService,$routeParams){
		var passwordLink = $routeParams.passwordLink		
		$scope.data = {}
		$scope.data.passwordLink = passwordLink		

		$scope.savePass = function(){

			StoreService
				.createPass($scope.data)
				.then(function(res){

				},function(err){
					
				})
		}
	}])
	