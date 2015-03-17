'use strict';

//Authentication service used to login/logout user
//and access current user info/state
// get jwt token by api/auth

angular
  .module('hunterApp')
  .factory('HaAuthService', HaAuthService);

HaAuthService.$inject = ['HaTrophyApiService'];

function HaAuthService(trophyApiService){
  var user = { name: null, token: null, id: null, logged: false };
  return {
    signIn  : signIn,
    signOut : signOut,
    user    : user,
    logged  : logged,
    userName  : userName,
    userToken : userToken,
    userId    : userId
  };

  function signIn(email, password) {
    return trophyApiService.postHunterAuth(email, password);
  }

  function signOut() {
    user.name = null;
    user.token = null;
    user.id = null;
    user.logged = false;
    return true;
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

  function userId() {
    return user.id;
  }
}
