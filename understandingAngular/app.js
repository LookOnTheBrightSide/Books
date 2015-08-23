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



var app = angular.module('myApp', ['ngMessages', 'ngResource']);

//inject scope, log into controller
//scope and log are services angular provides
app.controller('mainController', ['$scope', '$log', '$filter', '$resource', '$timeout', '$http',
    function($scope, $log, $filter, $resource, $timeout, $http) {
        //$angular obj
        $scope.user = andy;
        $scope.uppercaseUsername = $filter('uppercase')($scope.user.name);
        $log.warn($scope.uppercaseUsername);
        //ng-cloak 
        //
        $timeout(function() {
            $scope.user.name = 'Hagar The Horrible';
        }, 3000)

        console.log($resource);
        console.log('the droids: ', $scope, $log);
        $log.error('this is an error');
        $log.debug('this is a debug');
        $log.info('this is an info');
        $log.warn('this is a warn');
        $log.log('this is a log');

        $scope.newDbEntry = '';
        $scope.addDbEntry = function(){
        	$http.post('/api', {newDbEntry: $scope.newDbEntry})
        		.success(function(data){
        			$scope.dataFromApi = data;
        			$scope.newDbEntry = '';
        		})
        		.error(function(err, status) {
        			/* Act on the event */
        			$log.warning(err, status)
        		});
        }

        $http.get('/api')
        	.success(function(result){
        		$scope.dataFromApi = data;
        	})
        	.error(function(err,status){
        		$log.warning(err)
        	})





    }
])