var flickrApp = angular.module('flickr', ['ngMaterial']);

flickrApp.controller('MainController', ['$scope', '$http',
    function($scope, $http) {
        $scope.appName = "Flickr Search";
        $scope.results = [];
        $scope.search = function() {
            $http({
                method: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params: {
                	method:'flickr.photos.search',
                    api_key: 'keygoeshere',
                    text: $scope.searchTerm,
                    format: 'json',
                    nojsoncallback: 1
                }
            }).success(function(data){
            	$scope.results = data;
            }).error(function(error) {
            	/* Act on the event */
            	console.log(error);
            });
        }
    }
]);
































