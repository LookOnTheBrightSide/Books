//application
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//routes
weatherApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'views/forecast.html',
            controller: 'forecastController'
        })
         .when('/forecast/:days', {
            templateUrl: 'views/forecast.html',
            controller: 'forecastController'
        })
})

//services
weatherApp.service('cityService', function() {
    this.city = "New York, NY"
})


//controllers
weatherApp.controller('homeController', ['$scope', 'cityService',
    function($scope, cityService) {
        $scope.city = cityService.city;
        $scope.$watch('city', function() {
            cityService.city = $scope.city;
        })
    }
]);

weatherApp.controller('forecastController', ['$scope', '$resource','$routeParams', 'cityService',
    function($scope, $resource,$routeParams, cityService) {
        $scope.city = cityService.city;
        $scope.days = $routeParams.days || 2
        $scope.weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        $scope.weatherResult = $scope.weatherApi.get({
            q: $scope.city,
            cnt: $scope.days
        });
        $scope.convertToCelcius = function(deg){
        	return Math.round((1.8 * (deg -273)) + 32);
        }
        console.log($scope.weatherResult);
    }
]);