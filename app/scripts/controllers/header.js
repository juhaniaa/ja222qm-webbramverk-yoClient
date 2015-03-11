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

// should this be userCtrl? Though it is only used for accessing user information in navigation
// As is user logged in and get current user Name

MainCtrl.$inject = ['$scope', 'HAAuthService'];

function HeaderCtrl($scope, HAAuthService) {

  $scope.authentication = HAAuthService.authentication;
  $scope.loggedInUser = "Juhani";
}
