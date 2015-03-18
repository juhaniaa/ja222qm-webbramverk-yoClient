'use strict';

//service to manage events with the help of trophyApiService
angular
  .module('hunterApp')
  .factory('HaEventService', HaEventService);

HaEventService.$inject = ['HaTrophyApiService'];

function HaEventService(trophyApiService){
  var eventList = null;
  var filterList = null;
  return {
    getEvent            : getEvent,
    getAllEvents        : getAllEvents,
    getEventsByTag      : getEventsByTag,
    getEventsByHunter   : getEventsByHunter,
    getEventsByQuery    : getEventsByQuery,
    setCurrentEventList : setCurrentEventList,
    getCurrentEventList : getCurrentEventList,
    setFilterList       : setFilterList,
    getFilterList       : getFilterList
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

  function getEventsByQuery(query) {
    return trophyApiService.getCollByQuery('events', query);
  }

  function setCurrentEventList(newEventList) {
    eventList = newEventList
  }

  function getCurrentEventList() {
    return eventList;
  }

  function setFilterList(newFilterList) {
    filterList = newFilterList;
  }

  function getFilterList() {
    return filterList;
  }
}
