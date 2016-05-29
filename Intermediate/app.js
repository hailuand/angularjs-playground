(function () {
  'use strict';

  const app = angular.module('app', []);
    // Attach books service to app module
  app.provider('books', ['constants', function booksProvder(constants) {
    let includeVersionInTitle = false;

    this.$get = function get() {
      let appName = constants.APP_TITLE;
      const appDescription = constants.APP_DESCRIPTION;


      if (includeVersionInTitle) {
        appName += ` ${constants.APP_VERSION}`;
      }

      return {
        appName: appName,
        appDescription: appDescription
      };
    };

    this.setIncludeVersionInTitle = function setIncludeVersionInTitle(value) {
      includeVersionInTitle = value;
    };
  }]);
    // Angular appends 'provider' to all providers created
  app.config(['booksProvider', 'constants', function appSetup(booksProvider, constants) {
    booksProvider.setIncludeVersionInTitle(true);
    console.log('Title from constants service: ' + constants.APP_TITLE);
  }]);
})();
