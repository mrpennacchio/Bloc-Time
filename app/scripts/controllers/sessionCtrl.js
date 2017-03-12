angular.module('BlocTime')
    .controller('sessionCtrl', ['$scope', '$interval', 'TIMER', function($scope, $interval, TIMER){

      $scope.onBreak = false; // default is not on break
      $scope.time = 1500; // default time onload
      $scope.message = "Start"
      $scope.resetMessage = "Reset"
      $scope.breakMessage = "Start Break"
      var sessionCount = 0; // count to check for long break

      var mySound = new buzz.sound("/assets/ding.mp3", {
	       preload: true
      });

      // start timer function
      $scope.startTimer = function(){
        // don't execute function if it is already running
        // prevents timer speed from multiplying on multiple clicks
        $scope.timerRunning;
        if ($scope.timerRunning === true){
          return;
        }

        // start countdown function
        $scope.countDown = $interval(function(){
          $scope.time--;
          $scope.timerRunning = true;
          $scope.onBreak = false;
          $scope.message = "Work in progress..."

          if ($scope.time === 0){ //stop timer when it reaches 0
            $scope.stopTimer();
            mySound.play();
            $scope.time = TIMER.BREAK_TIME;
           // alert("Time for a break");
            $scope.onBreak = true;
            $scope.timerRunning = false;

            sessionCount += 1;
            if (sessionCount % 4 == 0){ // start long break
              $scope.time = TIMER.LONG_BREAK;
              sessionCount = 0;
              alert("Time for a long break");
            };
          };
        },1000);
      };

      $scope.startBreakTimer = function(){
        // don't execute function if it is already running
        // prevents timer speed from multiplying on multiple clicks
        $scope.timerRunning;
        if ($scope.timerRunning === true){
          return;
        }

        // start countdown function
        $scope.countDownBreak = $interval(function(){
          $scope.time--;
          $scope.timerRunning = true;
          $scope.onBreak = true;
          $scope.breakMessage = "Its Break Time"

          if ($scope.time === 0){ //stop timer when it reaches 0
            $scope.stopBreakTimer();
            mySound.play();
            $scope.time = TIMER.WORK_TIME;
           // alert("Break Done")
            $scope.onBreak = false;
            $scope.timerRunning = false;
            $scope.message = "Back to Work"
          };
        },1000);
      };

      // stop work session
      $scope.stopTimer = function () {
        //Cancel the Timer.
        if (angular.isDefined($scope.countDown)) {
          $interval.cancel($scope.countDown);
        }
      };

      // stop break
      $scope.stopBreakTimer = function() {
        if(angular.isDefined($scope.countDownBreak)) {
          $interval.cancel($scope.countDownBreak);
        }
      };

      // reset timer
      $scope.resetTimer = function(){
        if (angular.isDefined($scope.countDown)) {
             $scope.time = TIMER.WORK_TIME;
           }
        };
        // reset break timer
        $scope.resetBreakTimer = function(){
          if (angular.isDefined($scope.countDownBreak)) {
             $scope.time = TIMER.BREAK_TIME;
          }
        };

}]);
