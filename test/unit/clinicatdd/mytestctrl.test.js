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
      expect($scope.initScores).toBeDefined();

      $scope.initScores();

      expect($scope.players[0].score).toBe(0);
      expect($scope.players[1].score).toBe(0);
    });

  });
});
