var app = angular.module('myApp', []);
app.controller('MainController', ['$scope',
    function($scope) {
        var Person = function(name, profession, age, race) {
            this.name = name;
            this.profession = profession;
            this.age = age;
            this.race = race;
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