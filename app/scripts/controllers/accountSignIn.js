'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:AccountSignInCtrl
 * @description
 * # AccountSignInCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */

angular.module('hunterApp')
  .controller('AccountSignInCtrl', AccountSignInCtrl);

AccountSignInCtrl.$inject = ['$scope', 'HaAuthService', '$location'];

function AccountSignInCtrl($scope, authService, $location) {

  var vm = this;

  // when user presses "Sign In"
  vm.signIn = function(){

    // Try sign in to api
    var userPromise = authService.signIn(vm.mail, vm.password);
    userPromise
      .then(function(data) {
        // If successfull
        if(data.data !== undefined) {
          // add user info to authService-user
          authService.user.token = data.data.auth_token;
          authService.user.name = data.data.hunter_name;
          authService.user.id = data.data.hunter_id;
          authService.user.logged = true;
          // then redirect user to profile or explore?
          $location.path('/account/profile');

        }
      }).catch(function(err) {
        // Otherwise show error message
        console.log('Error: ' + err.data.error);
      });
  };
}
