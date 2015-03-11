'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */
angular
  .module('hunterApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', 'HAAuthService'];

function MainCtrl($scope, HAAuthService) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  $scope.map = { center: { latitude: 60.2, longitude: 20 }, zoom: 9 };
  $scope.authentication = HAAuthService.authentication;
}
