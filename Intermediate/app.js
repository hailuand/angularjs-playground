(function(){
    'use strict';

    var app = angular.module('app', []);
    // Attach books service to app module
    app.provider('books', function(constants){
        this.$get = function(){
            var appName = constants.APP_TITLE;
            var appDescription = constants.APP_DESCRIPTION;

            if(includeVersionInTitle){
                appName += ' ' + constants.APP_VERSION;
            }

            return{
                appName: appName,
                appDescription: appDescription
            };
        };

        var includeVersionInTitle = false;
        this.setIncludeVersionInTitle = function(value){
            includeVersionInTitle = value;
        };
    });
    // Angular appends 'provider' to all providers created
    app.config(function(booksProvider, constants){
        booksProvider.setIncludeVersionInTitle(true);
        console.log('Title from constants service: ' + constants.APP_TITLE);
    });
})();
