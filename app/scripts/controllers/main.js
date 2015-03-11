'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */
angular.module('hunterApp')
  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8};

    uiGmapGoogleMapApi.then(function(maps) {

    });
  });
