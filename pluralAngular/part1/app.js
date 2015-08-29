(function() {
    var app = angular.module('myApp', []);
    app.controller('mainController', ['$scope', '$http',
        function($scope, $http) {
            var onUserComplete = function(response) {
                $scope.user = response.data;
                $http.get($scope.user.repos_url)
                	.then(onRepos, onError);
            }
            var onRepos = function(response) {
                $scope.repos = response.data;
            }
            var onError = function(reason) {
                $scope.error = "sorry not getting that user or data";
            }
            $scope.search = function(username) {
                $http.get('https://api.github.com/users/' + username)
                    .then(onUserComplete, onError);
            };
            $scope.repoSortOder = '-stargazers_count';
        }
    ])
})();























