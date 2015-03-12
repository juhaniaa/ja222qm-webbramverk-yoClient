'use strict';

//service to manage events with the help of trophyApiService
angular
  .module('hunterApp')
  .factory('HaEventService', HaEventService);

HaEventService.$inject = ['HaTrophyApiService'];

function HaEventService(trophyApiService){
  return {
    getEvent          : getEvent,
    getAllEvents      : getAllEvents,
    getEventsByTag    : getEventsByTag,
    getEventsByHunter : getEventsByHunter
  };

  function getEvent(resId) {
    return trophyApiService.getSingle('events', resId);
  }

  function getAllEvents() {
    return trophyApiService.getCollection('events');
  }

  function getEventsByTag(filterId) {
    return trophyApiService.getCollBySingle('events', 'tags', filterId);
  }

  function getEventsByHunter(filterId) {
    return trophyApiService.getCollBySingle('events', 'hunters', filterId);
  }
}
