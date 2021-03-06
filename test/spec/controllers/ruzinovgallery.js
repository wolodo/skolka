'use strict';

describe('Controller: RuzinovgalleryCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var RuzinovgalleryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RuzinovgalleryCtrl = $controller('RuzinovgalleryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
