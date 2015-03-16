'use strict';

//Authentication service used to login/logout user
//and access current user info/state
// get jwt token by api/auth

angular
  .module('hunterApp')
  .factory('HaAuthService', HaAuthService);

HaAuthService.$inject = ['HaTrophyApiService'];

function HaAuthService(trophyApiService){
  var user = { name: null, token: null, logged: false };
  return {
    signIn  : signIn,
    user    : user
  };

  function signIn(email, password) {
    return trophyApiService.postHunterAuth(email, password);
  }
}
