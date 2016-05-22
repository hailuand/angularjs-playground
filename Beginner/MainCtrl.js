(function(){
    // Create MainCtrl controller
    var MainCtrl = function($scope, $interval, $location){
        $scope.message = "Hello, Angular!";
        $scope.search = function(){
            if(countdownInterval){
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            // Move to path of the user that user searched for
            $location.path("/user/" + $scope.username);
        };
        // Decreases count of countdown by 1. If called > 5 times, initiate search
        var decrementCountdown = function(){
            $scope.countdown -= 1;
            if($scope.countdown < 1){
                $scope.search();
            }
        };

        var countdownInterval = null;
        var startCountdown = function(){
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.username = "angular";
        $scope.countdown = 5;
        startCountdown();
    };

    // Attach MainCtrl to myApp
    angular.module('myApp').controller('MainCtrl', ['$scope',  '$interval', '$location', MainCtrl]);
}());
