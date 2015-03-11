'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:MainCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */
angular
  .module('hunterApp')
  .controller('HeaderCtrl', HeaderCtrl);

MainCtrl.$inject = ['$scope', 'HAAuthService'];

function HeaderCtrl($scope, HAAuthService) {

  $scope.authentication = HAAuthService.authentication;
  $scope.loggedInUser = "Juhani";
}
