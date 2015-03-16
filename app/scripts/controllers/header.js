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

HeaderCtrl.$inject = ['$scope', 'HaAuthService'];

function HeaderCtrl($scope, authService) {

  // this only gets called on page refresh? // TODO TRY with this stuff in other controller!!!!
  // should be data-bound somehow... or is it just not updated correctly?

  var vm = this;
  vm.authentication = authService.user.logged; // temp for user not logged in
  vm.loggedInUser = authService.user.name;

  console.log(authService.user);
  console.log(authService.user !== null);
  // if(authService.user.name !== null){
  //   var userName = authService.user.name;
  //   vm.loggedInUser = userName;
  //   vm.authentication = true;
  // }
}
