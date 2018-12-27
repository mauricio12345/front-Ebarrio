'use strict';

describe('Controller: AportesCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEbarrioApp'));

  var AportesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AportesCtrl = $controller('AportesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AportesCtrl.awesomeThings.length).toBe(3);
  });
});
