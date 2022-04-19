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
    //Maakt een functie aan zodat we makkelijk na een functie kunnen redirecten naar het hoofdscherm
    $scope.showData = function() {
     $http.get("JSON/getData.php").then(function(response){
       $scope.bedrijf = response.data.records;
       $location.path("/");
   });
 }
    //Update persoon, en redirect daarna terug naar het main scherm
     $scope.updatePerson = function() {
       $http.post("JSON/updateData.php", {
         'id' : $scope.id,
         'voornaam' : $scope.voornaam,
         'achternaam': $scope.achternaam,
         'straat': $scope.straat,
         'huisnummer': $scope.huisnummer,
         'postcode': $scope.postcode,
         'woonplaats': $scope.woonplaats,
         'telefoonnummer': $scope.telefoonnummer
       }).then(function() {
         $scope.showData();
       });
     }
     //Voeg Persoon toe, en redirect daarna terug naar het main scherm.
    $scope.addPerson = function(info){
       $http.post("JSON/createData.php",{
         "voornaam":info.voornaam,
         "achternaam":info.achternaam,
         "straat":info.straat,
         "huisnummer":info.huisnummer,
         "postcode":info.postcode,
         "woonplaats":info.woonplaats,
         "telefoonnummer":info.telefoonnummer
       }).then(function(){
           $scope.showData();
         });
    }
    //Verwijder Persoon
    $scope.delete = function(id) {
      $http.post("JSON/deleteData.php", {"id": id})
    }
  });
