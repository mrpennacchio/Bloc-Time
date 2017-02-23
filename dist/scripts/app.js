// Initialize Firebase Module
var app = angular.module("BlocTime", ["firebase"]);

//new timer session controller
app.controller('newSessionCtrl', ['$scope', '$interval', function($scope, $interval){

    $scope.time = 1500;
    var success;
    $scope.startTimer = function(){
      // don't execute function if it is already running
      if (success === true){
        return;
      }
      // start countdown function
      $scope.countDown = $interval(function(){
        if ($scope.time == 0){ //stop timer when it reaches 0
          $scope.time = 0;
        } else {
          $scope.time--;
          success = true;
        }
      },1000);
    };

    // reset timer
    $scope.resetTimer = function(){
      $scope.time = 1500;
    }
}]);

// convert seconds to minutes
app.filter('secondsToMinutes', [function(){
  return function(time) {
    return new Date(1970, 0 ,1).setSeconds(time);
  }
}])
