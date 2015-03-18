'use strict';

//service to manage events with the help of trophyApiService
angular
  .module('hunterApp')
  .factory('HaEventService', HaEventService);

HaEventService.$inject = ['HaTrophyApiService'];

function HaEventService(trophyApiService){
  var eventList = null;
  var filter = { list: null, type: null };

  return {
    getEvent            : getEvent,
    getAllEvents        : getAllEvents,
    getEventsByTag      : getEventsByTag,
    getEventsByHunter   : getEventsByHunter,
    getEventsByQuery    : getEventsByQuery,
    setCurrentEventList : setCurrentEventList,
    getCurrentEventList : getCurrentEventList,
    setFilter           : setFilter,
    getFilter           : getFilter
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

  function setFilter(newFilterList, type) {
    filter.list = newFilterList;
    filter.type = type;
  }

  function getFilter() {
    return filter;
  }
}
