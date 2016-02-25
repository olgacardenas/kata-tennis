describe('MyTestCtrl', function () {

  var $scope, controller;
  var $controller;

  beforeEach(module('clinicatdd.controllers'));

  describe("when there is no info", function () {

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
    }));

    beforeEach(function () {
      $scope = {};
      controller = $controller('MyTestCtrl', {$scope: $scope});
    });

    it('test variable is defined', function () {
      expect($scope.test).toBeDefined();
    });

    it('when game start winner is -1', function () {
      expect($scope.winner()).toBe(-1);
    });

    it('init point per player', function () {
      expect($scope.players[0].score).toBe(0);
      expect($scope.players[1].score).toBe(0);
    });

    it('can add points to player 1', function () {
      expect($scope.addPointToPlayer).toBeDefined();
      $scope.addPointToPlayer($scope.players[0]);
      expect($scope.players[0].score).toBe(1);
    });

    it('can add 3 points to player 2', function () {
      $scope.addPointToPlayer($scope.players[1]);
      $scope.addPointToPlayer($scope.players[1]);
      $scope.addPointToPlayer($scope.players[1]);
      expect($scope.players[1].score).toBe(3);
    });

    it('if player has 4 points, he is the winner', function () {
      $scope.addPointToPlayer($scope.players[1]);
      $scope.addPointToPlayer($scope.players[1]);
      $scope.addPointToPlayer($scope.players[1]);
      expect($scope.winner()).toBe(-1);
      $scope.addPointToPlayer($scope.players[1]);
      expect($scope.winner()).toBe($scope.players[1]);
    });

    it('if player 1 has 4 points and player 2 has 2 points, player 1 is the winner', function () {
      $scope.addPointToPlayer($scope.players[0]);
      $scope.addPointToPlayer($scope.players[0]);
      $scope.addPointToPlayer($scope.players[0]);
      $scope.addPointToPlayer($scope.players[0]);
      $scope.addPointToPlayer($scope.players[1]);
      $scope.addPointToPlayer($scope.players[1]);
      expect($scope.winner()).toBe($scope.players[0]);
    });

    it('if player 1 has 4 points but player 3 has 3, there is no winner', function () {
      $scope.addPointToPlayer($scope.players[0]);
      $scope.addPointToPlayer($scope.players[0]);
      $scope.addPointToPlayer($scope.players[0]);
      $scope.addPointToPlayer($scope.players[0]);
      $scope.addPointToPlayer($scope.players[1]);
      $scope.addPointToPlayer($scope.players[1]);
      $scope.addPointToPlayer($scope.players[1]);
      expect($scope.winner()).toBe(-1);
    });


    it('if player 2 has 4 points but player 1 has 2, winner 2 ', function () {

      $scope.addPointToPlayer($scope.players[0]);
      $scope.addPointToPlayer($scope.players[0]);


      $scope.addPointToPlayer($scope.players[1]);
      $scope.addPointToPlayer($scope.players[1]);
      $scope.addPointToPlayer($scope.players[1]);
      $scope.addPointToPlayer($scope.players[1]);

      expect($scope.winner()).toBe($scope.players[1]);


    });

  });
});
