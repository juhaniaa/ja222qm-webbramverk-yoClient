'use strict';

//service to manage hunters with the help of trophyApiService
angular
  .module('hunterApp')
  .factory("HaHunterService", HaHunterService);

HaHunterService.$inject = ["HaTrophyApiService"];

function HaHunterService(trophyApiService){
  return {
    getAllHunters : getAllHunters
  };

  function getAllHunters() {
    return trophyApiService.getCollection("hunters");
  }
}
