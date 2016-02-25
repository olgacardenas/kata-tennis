angular.module('clinicatdd.controllers')
  .controller('MyTestCtrl', ['$scope', function ($scope) {
    $scope.test = 'hello human';

    $scope.winner = function(){
      return -1;
    };
  }]);
