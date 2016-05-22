(function(){
    'use strict';

    angular.module('app')
        .factory('dataService', dataService);

    function dataService(){
        return {
            getAllBooks: getAllBooks,
            getAllReaders: getAllReaders
        };

        function getAllBooks(){
            console.log('In getAllBooks');
            return [
                {
                    book_id: 1,
                    title: 'Hairy Pooter and the Prisoner of Asskaban',
                    author: 'K.R. Parenti',
                    year_published: 1738
                },
                {
                    book_id: 2,
                    title: 'The Cat in the Hat',
                    author: 'Dr. Seuss',
                    year_published: 1957
                },
                {
                    book_id: 3,
                    title: 'Encyclopedia Brown, Boy Detective',
                    author: 'Donald J. Sobol',
                    year_published: 1963
                }
            ];
        }

        function getAllReaders(){
            return [
                {
                    reader_id: 1,
                    name: 'Marie',
                    weeklyReadingGoal: 315,
                    totalMinutesRead: 5600
                },
                {
                    reader_id: 2,
                    name: 'Daniel',
                    weeklyReadingGoal: 210,
                    totalMinutesRead: 3000
                },
                {
                    reader_id: 3,
                    name: 'Lanier',
                    weeklyReadingGoal: 140,
                    totalMinutesRead: 600
                }
            ];
        }
    }
}());
