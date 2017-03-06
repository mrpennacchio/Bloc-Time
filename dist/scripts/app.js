// Initialize Firebase Module

var app = angular.module("BlocTime", ["firebase", "ui.router"]);

app.config(function($stateProvider, $locationProvider){

  $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

      // $stateProvider
      //   .state('index', {
      //     url: '/',
      //     templateUrl: "/templates/session.html",
      //     controller: "sessionCtrl"
      //   })
      //
      //     // .state('task', {
      //     //   url: '/tasks',
      //     //   templateUrl: "/templates/task.html",
      //     //   controller: "taskCtrl as task"
      //     // });
});
