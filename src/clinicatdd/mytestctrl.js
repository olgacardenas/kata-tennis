angular.module('clinicatdd.controllers')
  .controller('MyTestCtrl', ['$scope', function ($scope) {
    $scope.test = 'hello human';
    $scope.players = [{score: null},{score: null}];

    $scope.initScores = function() {
    	$scope.players[0].score = 0;
    	$scope.players[1].score = 0;
    };

    $scope.winner = function(){
      return -1;
    };

    $scope.assignScore = function(score){
      $scope.score = score;
    };
  }]);
