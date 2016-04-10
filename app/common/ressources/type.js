'use strict';

angular.module('ressources.types', ['ngResource']).factory('Types', ['$resource', function($resource){

    var Types = $resource('http://localhost:8000/api/types/:id');


    return Types;
}]);