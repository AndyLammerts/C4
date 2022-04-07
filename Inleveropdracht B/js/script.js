var app = angular.module('autoApp', []);
app.controller('autoCtrl', function($scope) {
  $scope.autos = [
    {kenteken:'34-E5-AS',kleur:'rood',merk:'audi',deuren:'4',prijs:'50000'},
    {kenteken:'18-ZM-VV',kleur:'groen',merk:'volkswagen',deuren:'2',prijs:'11'},
    {kenteken:'22-AA-44',kleur:'zwart',merk:'bmw',deuren:'1',prijs:'44444'}
    ];

      $scope.orderByMe = function(auto) {
          $scope.myOrderBy = auto;
      }
});
