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
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider, $locationProvider) {
    uiGmapGoogleMapApiProvider.configure({
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'events'
      })
      .when('/explore', {
        templateUrl: 'views/eventList.html',
        controller: 'ExploreCtrl',
        controllerAs: 'events'
      })
      .when('/explore/hunters/:id/events', {
        templateUrl: 'views/eventList.html',
        controller: 'ExploreByHunterCtrl',
        controllerAs: 'events'
      })
      .when('/explore/tags/:id/events', {
        templateUrl: 'views/eventList.html',
        controller: 'ExploreByTagCtrl',
        controllerAs: 'events'
      })
      .when('/explore/events/query', {
        templateUrl: 'views/eventList.html',
        controller: 'ExploreByQueryCtrl',
        controllerAs: 'events'
      })
      .when('/account/signup', {
        templateUrl: 'views/accountSignUp.html',
        controller: 'AccountSignUpCtrl'
      })
      .when('/account/signin', {
        templateUrl: 'views/accountSignIn.html',
        controller: 'AccountSignInCtrl',
        controllerAs: 'hunter'
      })
      .when('/account/signout', {
        templateUrl: 'views/main.html',
        controller: 'AccountSignOutCtrl'
      })
      .when('/account/profile', {
        templateUrl: 'views/accountProfile.html',
        controller: 'AccountCtrl',
        controllerAs: 'hunter'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
