'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ressources.users',
        'ressources.types'
  ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'components/home/home.html',
            controller: 'HomeCtrl'
        })
        .when('/smat', {
            templateUrl: 'components/smat/smat.html',
            controller: 'SmatCtrl'
        })
        .when('/admin/users', {
            templateUrl: 'components/admin/users/users.html',
            controller: 'AdminUsersCtrl'
        })
        .when('/admin/types', {
            templateUrl: 'components/admin/types/types.html',
            controller: 'AdminTypesCtrl'
        })
        .otherwise({
            redirectTo: '/'
      });
  })
    .directive('bsActiveLink', ['$location', function ($location) {
      return {
        restrict: 'A', //use as attribute
        replace: false,
        link: function (scope, elem) {
          //after the route has changed
          scope.$on('$routeChangeSuccess', function () {
            var hrefs = ['/#' + $location.path(),
              '#' + $location.path(), //html5: false
              $location.path()]; //html5: true
            angular.forEach(elem.find('a'), function (a) {
              a = angular.element(a);
              if (-1 !== hrefs.indexOf(a.attr('href'))) {
                a.parent().addClass('active');
              } else {
                a.parent().removeClass('active');
              }
            });
          });
        }
      };
    }]);