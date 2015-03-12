'use strict';

//service to hold the google map object
angular
  .module('hunterApp')
  .factory('HaEventsMapService', HaEventsMapService);


function HaEventsMapService(){
  return {
    map: { center: { latitude: 60.2, longitude: 20 }, zoom: 9 }
  }
}
