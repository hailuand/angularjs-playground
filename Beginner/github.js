(function(){
    // Github service
    var github = function($http){
        /**
         * Gets useranme's user data from github
         * @param  {[string]} username
         * @return {[JSON]} key-value pairs of user data
         */
        var getUser = function(username){
            return $http.get("https://api.github.com/users/" + username)
                    .then(function(response){
                        return response.data;
                    });
        };
        /**
         * Gets
         * @param  {[string]} user [description]
         * @return {[type]}      [description]
         */
        var getRepos = function(user){
            return $http.get(user.repos_url).then(function(response){
                return response.data;
            });
        };

        var getRepoDetails = function(username, reponame){
            // Repo detials + collaborators
            var repo = null;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
            // Issue get request and process repos and repo collaborates
            $http.get(repoUrl).then(function(response){
                repo = response.data;
                return $http.get(repoUrl + "/collaborators");
            }).then(function(response){
                repo.collaborators = response.data;
                return repo;
            });

        };
        // Return service
        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails : getRepoDetails
        };
    };

    // Register service with angular
    var app = angular.module('myApp');
    app.factory('github', ['$http', github]);
})();
