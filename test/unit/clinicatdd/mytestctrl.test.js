describe('MyTestCtrl', function () {

  var $scope, controller;
  var $controller;

  beforeEach(module('clinicatdd.filters'));

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

  });
});
