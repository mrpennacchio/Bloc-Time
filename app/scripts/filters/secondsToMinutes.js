// returns time from seconds to minutes
angular.module('BlocTime')
  .filter('secondsToMinutes', [function(){
    return function(time) {
    return new Date(1970, 0 ,1).setSeconds(time);
  }
}]);
