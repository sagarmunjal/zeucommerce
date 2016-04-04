angular.module('myApp')
	.service('StoreService',['$http',function($http){
		this.createStore = function(store){
			return $http.post('/store/create',store)
		};
		this.editStore = function(){

		};
		this.createPass = function(data){
			return $http.post('/store/createpass',data)
		}
	}])