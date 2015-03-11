'use strict';

/**
 * @ngdoc overview
 * @name ja222qmWebbramverkYoClientApp
 * @description
 * # ja222qmWebbramverkYoClientApp
 *
 * Main module of the application.
 */
angular
  .module('ja222qmWebbramverkYoClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
