angular.module('BlocTime')
    .controller('sessionCtrl', ['$scope', '$interval', 'TIMER', function($scope, $interval, TIMER){

      $scope.onBreak = false; //
      $scope.time = 150; // default time onload
      // var breakTime = 300;
      // var workTime = 150;
      $scope.message = "Start"
      $scope.resetMessage = "Reset"
      $scope.breakMessage = "Start Break"
      var sessionCount = 0;

      var mySound = new buzz.sound("/assets/ding.mp3", {
	       preload: true
      });


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
	          console.log(sessionCount);
            if (sessionCount % 4 == 0){
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
          console.log("stopping work session")
          $interval.cancel($scope.countDown);
        }
      };

      // stop break
      $scope.stopBreakTimer = function() {
        if(angular.isDefined($scope.countDownBreak)) {
          console.log("stopping break")
          $interval.cancel($scope.countDownBreak);
        }
      };

      // reset timer
      $scope.resetTimer = function(){
        if (angular.isDefined($scope.countDown)) {
             $scope.time = TIMER.WORK_TIME;
           }
        };

        $scope.resetBreakTimer = function(){
          if (angular.isDefined($scope.countDownBreak)) {
             $scope.time = TIMER.BREAK_TIME;
          }
        };

}]);
