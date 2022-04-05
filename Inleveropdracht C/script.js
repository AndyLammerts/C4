var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("auto.php").then(function(response) {
    $scope.bedrijf = response.data.records;
  });
});
