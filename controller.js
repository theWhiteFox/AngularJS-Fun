const app = angular.module("app", []);

app.controller("app", function($scope) {
  $scope.msg = "hello,world";
});

app.filter("capitalize", function() {
  return function(input) {
    return input
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
});