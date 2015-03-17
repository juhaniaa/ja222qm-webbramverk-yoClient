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

MainCtrl.$inject = ['$scope', 'HaAuthService'];

function MainCtrl($scope, authService) {

  var vm = this;
  vm.name = authService.userName();
  vm.logged = authService.logged();
}
