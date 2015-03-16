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

AccountSignInCtrl.$inject = ['$scope', 'HaAuthService'];

function AccountSignInCtrl($scope, authService) {

  var vm = this;
  var email = "hunter1@test.se";
  var password = "asd123";

  vm.test = "hello";

  // when user presses "Sign In"
  vm.signIn = function(){
    console.log("User pressed sign in");

    // Try sign in to api
    var userPromise = authService.signIn(email, password);
    userPromise
      .then(function(data) {
        // If successfull
        if(data.data !== undefined) {
          // add user info to authService-user
          authService.user.token = data.data.auth_token;
          authService.user.name = data.data.hunter_name;
          authService.user.id = data.data.hunter_id;
          authService.user.logged = true;
          console.log("info might have been added to user service");
        }
        // then redirect user to explore
        console.log("now there should be a redirect");
        console.log(data);
      }).catch(function(err) {
        // Otherwise show error message
        console.log('Error: ' + err.data.error);
      });
  };
}
