'use strict';

//service to hold the google map object
angular
  .module('hunterApp')
  .factory('HaEventsMapService', HaEventsMapService);


function HaEventsMapService(){
  var eventMap = { center: { latitude: 60.2, longitude: 20 }, zoom: 9 };

  return {
    eventMap      : eventMap,
    setCenter     : setCenter
  };

  function setCenter(newCenter) {
    eventMap.center = newCenter;
  }
}
