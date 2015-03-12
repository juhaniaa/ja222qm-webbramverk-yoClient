'use strict';

//service to manage tags with the help of trophyApiService
angular
  .module('hunterApp')
  .factory('HaTagService', HaTagService);

HaTagService.$inject = ['HaTrophyApiService'];

function HaTagService(trophyApiService){
  return {
    getAllTags : getAllTags
  };

  function getAllTags() {
    return trophyApiService.getCollection('tags');
  }
}
