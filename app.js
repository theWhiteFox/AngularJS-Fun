"use strict";

let app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      controller: "myCtrl",
      templateUrl: "views/view1.html"
    })
    .when("/views", {
      controller: "myCtrl",
      templateUrl: "views/view2.html"
    })
    .otherwise({
      redirectTo: "/"
    });
  $locationProvider.html5Mode(true);
});
