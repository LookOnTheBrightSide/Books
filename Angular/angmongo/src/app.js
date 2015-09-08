var myApp = angular.module('myApp', ['ngRoute']);


//controllers
myApp.controller('MainController', ['$scope',
    function($scope) {
        $scope.appName = "Buy Now";
    }
]);



//routes
myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'directives/items.html',
                controller: 'MainController'
            })
            .when('/about', {
                templateUrl: 'directives/about.html',
                controller: 'MainController'
            })
            .when('/login', {
                templateUrl: 'directives/login.html',
                controller: 'MainController'
            })
            .when('/profile', {
                templateUrl: 'directives/profile.html',
                controller: 'MainController'
            })
            .when('/myitems', {
                templateUrl: 'directives/myitems.html',
                controller: 'MainController'
            })
            .when('/jobs', {
                templateUrl: 'directives/jobs.html',
                controller: 'MainController'
            })
             .when('/services', {
                templateUrl: 'directives/services.html',
                controller: 'MainController'
            })

    }
])