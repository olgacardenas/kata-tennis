angular.module('clinicatdd.controllers')
  .controller('MyTestCtrl', ['$scope', function ($scope) {
    $scope.test = 'hello human';
    $scope.players = [{score: null},{score: null}];


    var initScores = function() {
    	$scope.players[0].score = 0;
    	$scope.players[1].score = 0;
    };

    $scope.winner = function(){



      if($scope.players[0].score == 4 ){



       }


      return -1;



    };

    $scope.assignScore = function(score){
      $scope.score = score;
    };

    $scope.addPointToPlayer = function(player){
      player.score++;
    };

    initScores();
  }]);
