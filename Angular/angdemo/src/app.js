var app = angular.module('myApp', ['ngRoute']);
//config
app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'src/templates/home.html',
            controller: 'MainController'
        })
        .when('/employees', {
            templateUrl: 'src/templates/employees.html',
            controller: 'MainController'
        })
        .when('/about', {
            templateUrl: 'src/templates/about.html',
            controller: 'MainController'
        })
})
//controllers
app.controller('MainController', ['$scope',
    function($scope) {
        var Person = function(name, profession, age, race) {
            this.name = name;
            this.profession = profession;
            this.age = age;
            this.race = race;
        }
        $scope.makeEmployee = function() {
            //$scope.employees.push(new Person(name, profession, age, race));
            $scope.employees.push({
                name: $scope.newEployee.name,
                profession: $scope.newEployee.profession,
                age: $scope.newEployee.age,
                race: $scope.newEployee.race
            });
        }
        $scope.employees = [
            new Person("Ray", "Doctor", 47, "white"),
            new Person("Callum", "Developer", 23, "white"),
            new Person("Jane", "Designer", 34, "mixed"),
            new Person("Janet", "Scientist", 38, "black"),
            new Person("Romeo", "Actor", 29, "indian")
        ]

    }
])


//console.log(app)