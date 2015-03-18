'use strict';

//service to manage requests to trophyApi
angular
  .module('hunterApp')
  .factory('HaTrophyApiService', HaTrophyApiService);

HaTrophyApiService.$inject = ['$http'];

function HaTrophyApiService($http){
  var apiUrl = 'http://127.0.0.1:3000/api/';
  var token = 'Token token=3acff13b44739f59cc7b9f735f67fbb7';
  return {
    getSingle       : getSingle,
    getCollection   : getCollection,
    getCollBySingle : getCollBySingle,
    getCollByQuery  : getCollByQuery,
    postHunterAuth  : postHunterAuth
  };

  // Single ex api/events/1

  function getSingle(resName, resId) { // ex resName:"events" resId:1
    var getSingleComplete, getSingleFailed;
    var req = {
      method: 'Get',
      url: apiUrl + resName + '/' + resId,
      headers: {
        'Authorization': token,
      },
      params: {
        'limit': '20'
      }
    };
    return $http(req);
  }

  // Collection ex api/events

  function getCollection(resName) { // ex resName:"events"
    var req = {
      method: 'Get',
      url: apiUrl + resName,
      headers: {
        'Authorization': token,
      },
      params: {
        'limit': '20'
      }
    };
    return $http(req);
  }

  // Collection by single ex api/tags/3/events

  function getCollBySingle(resName, filterName, filterId) { // ex resName:"events" filterName:"tags" filterId:3
    var req = {
      method: 'Get',
      url: apiUrl + filterName + '/' + filterId + '/' + resName,
      headers: {
        'Authorization': token,
      },
      params: {
        'limit': '20'
      }
    };
    return $http(req);
  }

  // Collection by query ex api/events/query?query=happy

  function getCollByQuery(resName, query) { // ex resName:"events"  query: "happy"
    var req = {
      method: 'Get',
      url: apiUrl + resName + '/query?query=' + query,
      headers: {
        'Authorization': token,
      },
      params: {
        'limit': '20'
      }
    };
    return $http(req);
  }

  // Post Authentication to get authToken api/auth

  function postHunterAuth(email, password) { // ex email:"hunter1@test.se" password: "asd123"
    var req = {
      method: 'Post',
      url: apiUrl + '/auth',
      params: {
        'email': email,
        'password': password
      }
    };

    return $http(req);
  }
}
