(function(){
    var app = angular.module('myApp', ['ngRoute']);
    // Set up routing for page
    app.config(function($routeProvider){
        $routeProvider.when("/main", { // When user goes to /main, load up "main.html" and use MainCtrl controller
            templateUrl: "main.html", // Main template
            controller: "MainCtrl"
        })
        .when("/user/:username", {
            templateUrl: "user.html",
            controller: "UserCtrl"
        })
        .when("/repo/:username/:reponame", {
            templateUrl: "repo.html",
            controller: "RepoCtrl"
        })
        .otherwise({redirectTo:"/main"}); // If user goes to unknown route, load /main
    });
}());
