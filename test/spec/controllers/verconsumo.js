'use strict';

describe('Controller: VerconsumoCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEbarrioApp'));

  var VerconsumoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VerconsumoCtrl = $controller('VerconsumoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VerconsumoCtrl.awesomeThings.length).toBe(3);
  });
});
