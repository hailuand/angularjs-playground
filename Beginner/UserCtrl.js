(function(){

    // Create MainCtrl controller
    var UserCtrl = function($scope, github, $routeParams){
        /**
         * Process Github Api response data for GET request
         * @param  {[JSON Array]} data key-value pairs of user data
         * @return {[type]}      [description]
         */
        var onUserComplete = function(data){
            $scope.user = data;
            // Issue GET request for user's repos
            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function(data){
            $scope.repos = data;
        };

        var onError = function(reason){
            $scope.error = "Could not fetch user!";
        };

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($scope.username).then(onUserComplete, onError);
    };

    // Attach UserCtrl to app
    angular.module('myApp').controller('UserCtrl', ['$scope', 'github', '$routeParams',
                                        UserCtrl]);
}());
