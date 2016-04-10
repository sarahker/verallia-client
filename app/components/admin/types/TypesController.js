'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app').controller('AdminTypesCtrl', function ($scope, Types) {
    $scope.type = new Types();

    $scope.loadData = function() {
        var types = Types.query(function() {
            $scope.types = types;
        });
    };

    $scope.addType = function() {
        $scope.type.$save(function() {
            //$state.go('movies'); // on success go back to home i.e. movies state.
        });
    };
});
