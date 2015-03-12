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
    getCollBySingle : getCollBySingle
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
    return $http(req)
      .then(getSingleComplete)
      .catch(getSingleFailed);

    function getSingleComplete(res) {
      return res.data;
    }

    function getSingleFailed(err) {
      console.log('Error occured ' + err.data);
    }
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
    return $http(req)
      .then(getCollectionComplete)
      .catch(getCollectionFailed);

    function getCollectionComplete(res) {
      return res.data;
    }

    function getCollectionFailed(err) {
      console.log('Error occured ' + err.data);
    }
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
    return $http(req)
      .then(getCollBySingleComplete)
      .catch(getCollBySingleFailed);

    function getCollBySingleComplete(res) {
      return res.data;
    }

    function getCollBySingleFailed(err) {
      console.log('Error occured ' + err.data);
    }
  }
}