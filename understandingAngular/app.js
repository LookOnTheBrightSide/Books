var Person = function(name, age, sex){
	this.name =  name;
	this.age = age;
	this.sex = sex;
}
function logPerson(person){
	console.log(person)
}
var andy = new Person('Andy Cap',72, 'male')
logPerson(andy);



var app = angular.module('myApp',['ngMessages','ngResource']);

//inject scope, log into controller
//scope and log are services angular provides
app.controller('mainController',['$scope','$log','$filter','$resource','$timeout', function($scope,$log,$filter,$resource,$timeout){
	//$angular obj
	$scope.user = andy;
	$scope.uppercaseUsername = $filter('uppercase')($scope.user.name);
	$log.warn($scope.uppercaseUsername);
	//ng-cloak 
	//
	$timeout(function(){
		$scope.user.name = 'Hagar The Horrible';
	}, 3000)

	console.log($resource);
	console.log('the droids: ',$scope,$log);
	$log.error('this is an error');
	$log.debug('this is an debug');
	$log.info('this is an info');
	$log.warn('this is an warn');
$log.log('this is an log');
}]  )
