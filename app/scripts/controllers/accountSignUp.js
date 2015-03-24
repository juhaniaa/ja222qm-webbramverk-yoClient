'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:AccountSignUpCtrl
 * @description
 * # AccountSignUpCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */

angular.module('hunterApp')
  .controller('AccountSignUpCtrl', AccountSignUpCtrl);

AccountSignUpCtrl.$inject = ['$scope', 'HaAuthService', '$location'];

function AccountSignUpCtrl($scope, authService, $location) {

  var vm = this;

  // when user presses "Sign Up"
  vm.signUp = function(){
    console.log("attempting to sign up");

    var userPromise = authService.signUp(vm.name, vm.mail, vm.pass, vm.confirm);
    userPromise
      .then(function(data) {
        // If successfull
        if(data.data !== undefined) {
          $location.path('/account/signin');
        }
      }).catch(function(err) {
        // Otherwise show error message
        console.log('Error: ' + err.data.error);
      });
  };

}
