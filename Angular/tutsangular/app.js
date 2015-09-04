var app = angular.module('myApp', []);
app.controller('MainController', ['$scope',
    function($scope) {
        $scope.website = {
            owner:"Etern Mistolo",
            registrationDate:21,
            registrationDay:"Monday",
            registrationMonth:"August"
        }
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
        restrict: 'EAC ',
        replace: true,
        templateUrl: 'directives/headingtop.html',
        scope: {
            //@ text
            //= two way binding, can pass object into the scope
            //& functions from scope
            // link compile
            workerTitle: "@",
            workerAuthor: "@",
            workerJob: "@",
            workerCompany: "@",
            website:"="

        }
    }
})
//restrict takes the folowing
//comment M <-- directive: heading--> replace has to be true!
//class C
//element E
//attribute A