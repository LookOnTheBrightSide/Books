var app = angular.module('myApp', []);
app.controller('MainController', ['$scope',
    function($scope) {
        $scope.workers = [{
            title: "Introduction to controllers in AngularJs",
            author: "Dale Watkins",
            job: "developer",
            company: "google labs cairo"
        }, {
            title: "Making it in Tech",
            author: "Solo Hans",
            job: "IT head",
            company: "matlabs"
        }, {
            title: "Today in history",
            author: "Josh Dale",
            job: "historian",
            company: "history channel"
        }]
    }
])

app.directive('headingTop', function() {
    return {
        restrict: 'E',
        template: '<h2>{{worker.title}}</h2><h3>{{worker.author}}</h3><h5>{{worker.job}}</h5><h5>{{worker.company}}</h5>'
    }
})
//restrict takes the folowing
//comment M <-- directive: heading--> replace has to be true!
//class C
//element E
//attribute A