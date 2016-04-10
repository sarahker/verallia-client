'use strict';

angular.module('ressources.users', ['ngResource']).factory('Users', ['$resource', function($resource){

    var Users = $resource('http://localhost:8000/api/users/:id');

    //return $resource('/users/:userId', {userId:'@id'});

    Users.forId = function (userId) {
        return Users.query({id:userId});
    };

    return Users;
}]);