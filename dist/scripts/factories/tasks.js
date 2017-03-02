(function() {
  function Tasks($firebaseArray) {
    var ref = firebase.database().ref().child('tasks');

    // download tasks into a synchronized array
    var tasks = $firebaseArray(ref);

    return {
      all: tasks
      // remaining logic for tasks
    };
  }

  angular
     .module('BlocTime')
     .factory('Tasks', ['$firebaseArray', Tasks]);
 })();
