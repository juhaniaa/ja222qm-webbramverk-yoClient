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

  vm.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  vm.authentication = authService.authentication;
}
