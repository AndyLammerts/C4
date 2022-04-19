var app = angular.module('myApp', ["ngRoute"]);
  app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl : "routes/main.html"
    })
    .when("/add", {
      templateUrl : "routes/add.html",
    })
    .when("/edit/:id/:voornaam/:achternaam/:straat/:huisnummer/:postcode/:woonplaats/:telefoonnummer", {
      templateUrl : "routes/edit.html",
      controller : "updateCtrl"
    });
  });
  app.controller('personenCtrl', function($scope, $http, $location, $routeParams) {

 //Maakt een functie aan zodat we makkelijk na een functie kunnen redirecten naar het hoofdscherm
    $scope.showData = function() {
     $http.get("JSON/getData.php").then(function(response){
       $scope.bedrijf = response.data.records;
       $location.path("/");
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
    //Sorting
    $scope.orderByMe = function(y) {
     $scope.myOrderBy = y;
   }
  });


  app.controller('updateCtrl', function($scope, $http, $location, $routeParams) {
    $scope.id = parseInt($routeParams.id);
    $scope.voornaam = $routeParams.voornaam;
    $scope.achternaam = $routeParams.achternaam;
    $scope.straat = $routeParams.straat;
    $scope.huisnummer = parseInt($routeParams.huisnummer);
    $scope.postcode = $routeParams.postcode;
    $scope.woonplaats = $routeParams.woonplaats;
    $scope.telefoonnummer = parseInt($routeParams.telefoonnummer);

  $scope.updatePerson = function() {
    $http.post("JSON/updateData.php", {
      'ID' : $scope.id,
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
});
