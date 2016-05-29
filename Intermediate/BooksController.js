(function () {
  'use strict';

  function BooksController(books, dataService, logger, badgeService) {
    // Define View Model
    const vm = this;

    vm.appName = books.appName;

    vm.allBooks = dataService.getAllBooks();

    vm.allReaders = dataService.getAllReaders();

    vm.getBadge = badgeService.retrieveBadge;

    logger.out('BooksController has been created!');
  }

  angular.module('app')
    .controller('BooksController',
  ['books', 'dataService', 'logger', 'badgeService', BooksController]);
}());
