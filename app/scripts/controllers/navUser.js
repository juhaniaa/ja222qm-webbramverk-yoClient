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

// should this be userCtrl? Though it is only used for accessing user information in navigation
// As is user logged in and get current user Name

NavUserCtrl.$inject = ['$scope', 'HaAuthService'];

function NavUserCtrl($scope, authService) {

  // this only gets called on page refresh? // TODO TRY with this stuff in other controller!!!!
  // should be data-bound somehow... or is it just not updated correctly?

  var vm = this;
  // vm.logged = true; // temp for user not logged in

  vm.name = authService.userName();
  vm.logged = authService.logged();


  // if(authService.user.name !== null){
  //   var userName = authService.user.name;
  //   vm.loggedInUser = userName;
  //   vm.authentication = true;
  // }
}
