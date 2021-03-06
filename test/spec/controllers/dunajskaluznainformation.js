'use strict';

describe('Controller: DunajskaluznainformationCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var DunajskaluznainformationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DunajskaluznainformationCtrl = $controller('DunajskaluznainformationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
