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

app.controller("myCtrl", function($scope) {
  $scope.customers = [
    { name: "stephen ó connor", city: "dublin" },
    { name: "ste", city: "kerry" },
    { name: "lobsang", city: "manali" },
    { name: "norbu", city: "manali" },
    { name: "vikas", city: "delhi" }
  ];
  $scope.addCustomer = function() {
    $scope.customer.push({ name: newCustomer.name, city: newCustomer.city });
  };
});


