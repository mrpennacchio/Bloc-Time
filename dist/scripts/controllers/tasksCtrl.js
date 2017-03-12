angular.module('BlocTime', ["firebase"])
    .controller('tasksCtrl', ['$scope', 'Tasks', '$firebaseArray', function($scope, tasks, $firebaseArray){
    var ref = firebase.database().ref().child("tasks");

    $scope.tasks = $firebaseArray(ref);
    // add task to firebase array
    $scope.addTask = function(form){
      $scope.tasks.$add({
	       text: $scope.newTaskText,
         date: firebase.database.ServerValue.TIMESTAMP
      });
      $scope.newTaskText = ''; // reset input text to display nothing
    };

    // remove task
    $scope.removeTask = function(task){
	    $scope.tasks.$remove(task);
    };
}]);
