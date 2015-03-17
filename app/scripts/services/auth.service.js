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
    user    : user,
    logged  : logged,
    userName  : userName,
    userToken : userToken
  };

  function signIn(email, password) {
    return trophyApiService.postHunterAuth(email, password);
  }

  function logged() {
    return user.logged;
  }

  function userName() {
    return user.name;
  }

  function userToken() {
    return user.token;
  }
}
