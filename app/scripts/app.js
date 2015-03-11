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
  .module('hunterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
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
