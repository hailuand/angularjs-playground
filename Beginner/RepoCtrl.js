(function(){

    var RepoCtrl = function($scope, $routeParams, github){
        var onRepo = function(data){
            $scope.repo = data;
        };

        var onError = function(reason){
            $scope.error = reason;
        };

        var username = $routeParams.username;
        var reponame = $routeParams.reponame;
        // Retrieve repo details
        github.getRepoDetails(username, reponame).then(onRepo, onError);
    };
    // Attach controller to app
    angular.module('myApp').controller('RepoCtrl', ['$scope', '$routeParams', 'github', RepoCtrl]);
})();
