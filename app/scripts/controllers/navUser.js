'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:NavUserCtrl
 * @description
 * # NavUserCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */
angular
  .module('hunterApp')
  .controller('NavUserCtrl', NavUserCtrl);

NavUserCtrl.$inject = ['$scope', 'HaAuthService'];

function NavUserCtrl($scope, authService) {

  var vm = this;

  // watch logged and username
  $scope.$watch( function () { return authService.logged(); }, function (data) {
    vm.logged = data;
  }, true);

  $scope.$watch( function () { return authService.userName(); }, function (data) {
    vm.name = data;
  }, true);
}
