'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:AccountSignOutCtrl
 * @description
 * # AccountSignOutCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */

angular.module('hunterApp')
  .controller('AccountSignOutCtrl', AccountSignOutCtrl);

AccountSignOutCtrl.$inject = ['$scope', 'HaAuthService'];

function AccountSignOutCtrl($scope, authService) {

  // this will remove logged in users session and show main page
  authService.signOut();
}
