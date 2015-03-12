'use strict';

//Authentication service used to login/logout user
//and access current user info/state
// get jwt token by api/auth
angular
  .module('hunterApp')
  .service('HaAuthService', HaAuthService);

function HaAuthService(){
  this.login = function() {

  };

  // this should go through trophyApiService

  this.authentication = false;
}
