var app = angular.module('myApp', ["ngRoute"]);
  app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl : "routes/main.html"
    })
    .when("/add", {
      templateUrl : "routes/add.html"
    })
    .when("/edit", {
      templateUrl : "routes/edit.html",
    });
  });
  app.controller('customersCtrl', function($scope, $http) {
    $http.get("JSON/getData.php").then(function(response) {
      $scope.bedrijf = response.data.records;
    });
});
