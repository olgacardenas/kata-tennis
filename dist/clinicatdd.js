(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('clinicatdd.config', [])
      .value('clinicatdd.config', {
          debug: true
      });

  // Modules
  angular.module('clinicatdd.controllers', []);
  angular.module('clinicatdd.directives', []);
  angular.module('clinicatdd.filters', []);
  angular.module('clinicatdd.services', []);
  angular.module('clinicatdd',
      [
          'clinicatdd.config',
          'clinicatdd.controllers',
          'clinicatdd.directives',
          'clinicatdd.filters',
          'clinicatdd.services'
      ]);

})(angular);

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
      	return $scope.players[0];
      }

      if($scope.players[1].score == 4 ){
      	return $scope.players[1];
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
