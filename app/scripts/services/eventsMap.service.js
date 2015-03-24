'use strict';

//service to hold the google map object
angular
  .module('hunterApp')
  .factory('HaEventsMapService', HaEventsMapService);


function HaEventsMapService(){
  var eventMap = { center: { latitude: 60.2, longitude: 20 }, zoom: 9 };

  return {
    getMap      : getMap,
    setCenter   : setCenter
  };

  function getMap() {
    return eventMap;
  }

  function setCenter(newCenter) {
    console.log(eventMap);
    eventMap.center = newCenter;
  }
}
