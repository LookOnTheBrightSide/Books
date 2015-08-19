angular.module('directoryApp', [])
    .controller('directoryController', function($scope) {
        $scope.list = [{
            num: 'one',
            score: 'two',
            len: 'three'
        }, {
            num: 'six',
            score: 'two',
            len: 'three'
        },
        {
            num: 'four',
            score: 'four',
            len: 'five'
        }]
    });