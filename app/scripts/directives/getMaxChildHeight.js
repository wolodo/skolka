/**
 * Created by vladislav.vodicka on 20. 4. 2016.
 */
(function () {
    'use strict';
    angular.module('getMaxChildHeight', [])
        .directive('getMaxChildHeight', function () {
            return {
                restrict: 'A',
                scope: false,
                link: function (scope, element) {
                    scope.element = element;
                },
                controller: function ($scope, $timeout) {
                    var largestHeight = 0;
                    $timeout(function () {
                        for (var i in $scope.element[0].childNodes) {
                            var child = $scope.element[0].childNodes[i];
                            if(child.nodeType == 1) {
                                if(child.offsetHeight > largestHeight) {
                                    largestHeight = child.offsetHeight;
                                }
                            }
                        }

                        $scope.element.height(largestHeight);
                    }, 0);
                }
            };
        });
}());
