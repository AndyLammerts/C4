var app = angular.module('myApp', ["ngRoute"]);
  app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl : "routes/main.html"
    })
    .when("/add", {
      templateUrl : "routes/add.html",
      controller : "addCtrl"
    })
    .when("/edit", {
      templateUrl : "routes/edit.html",
    });
  });
  app.controller('customersCtrl', function($scope, $http) {
    $http.get("JSON/getData.php").then(function(response) {
      $scope.bedrijf = response.data.records;
      $scope.count = response.data.counter;
    });
  });
    app.controller('addCtrl', function($scope, $http){
        $scope.submit = function(info){
           $http.post("JSON/createData.php",{"voornaam":info.voornaam,"achternaam":info.achternaam,
             "straat":info.straat,"huisnummer":info.huisnummer,"postcode":info.postcode,"woonplaats":info.woonplaats,
             "telefoonnummer":info.telefoonnummer})}
             });
