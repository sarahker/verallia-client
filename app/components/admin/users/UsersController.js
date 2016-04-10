'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app').controller('AdminUsersCtrl', function ($scope, Users) {

    $scope.loadData = function() {


        var users = Users.query(function() {
            $scope.users = users;
        });
    };
});
