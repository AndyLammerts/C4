var app = angular.module('myApp', ["ngRoute"]);
  app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl : "routes/main.html"
    })
    .when("/add", {
      templateUrl : "routes/add.html",
    })
    .when("/edit", {
      templateUrl : "routes/edit.html",
    });
  });
  app.controller('personenCtrl', function($scope, $http, $location) {
    $scope.showData = function() {
     $http.get("JSON/getData.php").then(function(response){
       $scope.bedrijf = response.data.records;
       $location.path("/");
   });
 }
    $scope.addPerson = function(info){
       $http.post("JSON/createData.php",{"voornaam":info.voornaam,"achternaam":info.achternaam,
         "straat":info.straat,"huisnummer":info.huisnummer,"postcode":info.postcode,"woonplaats":info.woonplaats,
         "telefoonnummer":info.telefoonnummer}).then(function(){
           $scope.showData();
         });
    }

    $scope.delete = function(id) {
      $http.post("JSON/deleteData.php", {"id": id})
      console.log(id);
    }
  });
