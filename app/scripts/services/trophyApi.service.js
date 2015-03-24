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
    postNewHunter   : postNewHunter,
    postHunterAuth  : postHunterAuth,
    addSingle       : addSingle,
    editSingle      : editSingle,
    removeSingle    : removeSingle
  };

  // Single ex api/events/1

  function getSingle(resName, resId) { // ex resName:"events" resId:1
    var getSingleComplete, getSingleFailed;
    var req = {
      method: 'Get',
      url: apiUrl + resName + '/' + resId,
      headers: {
        'Authorization': token,
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
      }
    };
    return $http(req);
  }


  // Post to create new Hunter account api/hunters

  function postNewHunter(name, email, password, passwordConfirmation) { // ex name: "hunter7" email:"hunter7@test.se" password: "asd123" passwordConfirmation: "asd123"
    var req = {
      method: 'Post',
      url: apiUrl + '/hunters',
      headers: {
        'Authorization': token,
      },
      params: {
        'name': name,
        'email': email,
        'password': password,
        'password_confirmation': passwordConfirmation
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

  // Post add new resource ex api/events

  function addSingle(resName, eventObj, authToken) { // ex resName: "events" eventObj: "{ "event": {"description": "I am still happy", "position_attributes": { "lat": 60.207225, "lng": 20.269015 }, "tags":  [  {"name": "yolo"},  {"name": "haha"}, {"name": "rekt"} ] } }"
    // make post request with raw json object

    var req = {
      method: 'Post',
      url: apiUrl + '/events',
      headers: {
        'Authorization': token,
        'X-JWT': authToken
      },
      data: eventObj
    };

    return $http(req);
  }

  // Put edit resource ex api/events/1

  function editSingle(resName, eventObj, authToken, resId) { // ex resName: "events" eventObj: "{ "event": {"description": "I am still happy", "position_attributes": { "lat": 60.207225, "lng": 20.269015 }, "tags":  [  {"name": "yolo"},  {"name": "haha"}, {"name": "rekt"} ] } }" authToken: 123xxx resId: 1
    // make put request with raw json object

    var req = {
      method: 'Put',
      url: apiUrl + '/events/' + resId,
      headers: {
        'Authorization': token,
        'X-JWT': authToken
      },
      data: eventObj
    };

    return $http(req);
  }

  // Delete remove resource ex api/events/1

  function removeSingle(resName, resId, authToken) { // ex resName: "events" resId: 1 authToken: 123xxx

    var req = {
      method: 'Delete',
      url: apiUrl + '/events/' + resId,
      headers: {
        'Authorization': token,
        'X-JWT': authToken
      }
    };

    return $http(req);
  }
}
