// Initialize Firebase Module

var app = angular.module("BlocTime", ["firebase", "ui.router"]);

app.config(function($stateProvider, $locationProvider){

  $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

});
