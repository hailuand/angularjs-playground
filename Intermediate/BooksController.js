(function(){
    'use strict';

    angular.module('app')
        .controller('BooksController', BooksController);

        function BooksController(books, dataService, logger, badgeService){
            // Define View Model
            var vm = this;

            vm.appName = books.appName;

            vm.allBooks = dataService.getAllBooks();

            vm.allReaders = dataService.getAllReaders();

            vm.getBadge = badgeService.retrieveBadge;

            logger.out('BooksController has been created!');
        }
})();