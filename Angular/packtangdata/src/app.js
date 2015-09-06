var myApp = angular.module('myApp',['ngMaterial']);

myApp.controller('MainController', ['$scope', function($scope){
	$scope.name = "Shank Man";
}])