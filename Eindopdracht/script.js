var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("getData.php").then(function(response) {
    $scope.bedrijf = response.data.records;
  });
});
