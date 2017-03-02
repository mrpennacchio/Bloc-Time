angular.module('BlocTime', ["firebase"])
    .controller('tasksCtrl', ['$scope', 'Tasks', '$firebaseArray', function($scope, tasks, $firebaseArray){
    var ref = firebase.database().ref().child("tasks");

    $scope.tasks = $firebaseArray(ref);
    $scope.addTask = function(form){
      $scope.tasks.$add({
	       text: $scope.newTaskText
      });
      $scope.newTaskText = '';
    };

    $scope.removeTask = function(task){
     
	    $scope.tasks.$remove(task);
    };
}]);
