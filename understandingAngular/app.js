//services are singletons
//scope creates children
//

var Person = function(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function logPerson(person) {
    console.log(person)
}
var andy = new Person('Andy Cap', 72, 'male')
logPerson(andy);



var app = angular.module('myApp', ['ngMessages', 'ngResource','ngRoute']);

app.service('myService', function() {
	var self = this;
	this.name = 'Jane Doe';
	this.nameLength = function(){
		return self.name.length;
	}
})
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/second',{
		templateUrl:'pages/second.html',
		controller: 'mainController'
	})
	
	.when('/second/:names',{
		templateUrl:'pages/second.html',
		controller: 'mainController'
	})

	
})
//inject scope, log into controller
//scope and log are services angular provides
app.controller('mainController', ['$scope','myService', '$routeParams','$log', '$filter', '$resource', '$timeout', '$http','$location',
    function($scope, myService,$routeParams,$log, $filter, $resource, $timeout, $http,$location) {
        //$angular obj
        $log.info(myService.name);
        $log.info(myService.nameLength());

        // manual watching
        // $scope.$watch('name', function(){
        // 	myService.name = $scope.name;
        // });

        $scope.user = andy;
        $scope.uppercaseUsername = $filter('uppercase')($scope.user.name);
        $log.warn($scope.uppercaseUsername);
        //ng-cloak 
        //
        $scope.names = $routeParams.names || "guest";
        $timeout(function() {
            $scope.user.name = 'Hagar The Horrible';
        }, 3000)
        $log.info($location.path());
        console.log($resource);
        console.log('the droids: ', $scope, $log);
        $log.error('this is an error');
        $log.debug('this is a debug');
        $log.info('this is an info');
        $log.warn('this is a warn');
        $log.log('this is a log');

        // $scope.newDbEntry = '';
        // $scope.addDbEntry = function(){
        // 	$http.post('/api', {newDbEntry: $scope.newDbEntry})
        // 		.success(function(data){
        // 			$scope.dataFromApi = data;
        // 			$scope.newDbEntry = '';
        // 		})
        // 		.error(function(err, status) {
        // 			/* Act on the event */
        // 			$log.warning(err, status)
        // 		});
        // }

        // $http.get('/api')
        // 	.success(function(result){
        // 		$scope.dataFromApi = data;
        // 	})
        // 	.error(function(err,status){
        // 		$log.warning(err)
        // 	})

//fragment change 
//hashchange event #




    }
])