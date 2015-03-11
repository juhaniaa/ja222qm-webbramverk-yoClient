'use strict';

//Authentication service used login/logout user
//and access current state
angular
  .module('hunterApp')
  .service("HAAuthService", HAAuthService);


function HAAuthService(){
  this.login = function(userName, userPassword) {



  };




  this.authentication = false;
}
