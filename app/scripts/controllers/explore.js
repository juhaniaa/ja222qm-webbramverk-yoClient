'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:ExploreCtrl
 * @description
 * # ExploreCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */
angular
  .module('hunterApp')
  .controller('ExploreCtrl', ExploreCtrl);

ExploreCtrl.$inject = ['$scope', 'HaAuthService', 'HaEventService', 'HaEventsMapService', 'HaHunterService', 'HaTagService'];

function ExploreCtrl($scope, authService, eventService, eventsMapService, hunterService, tagService) {

  var vm = this;
  $scope.map = eventsMapService.eventMap;
  $scope.eventMarkers = [];

  $scope.$watch( function () { return eventService.getCurrentEventList(); }, function (data) {
    vm.eventList = data;
    // add all these events as markers on the map

    var markers = [];

    var log = [];
    angular.forEach(data, function(value, key) {

      var eMarker = {
        latitude: value.position.lat,
        longitude: value.position.lng,
        title: value.description
      };

      eMarker["id"] = key;

      markers.push(eMarker);
    }, log);

    $scope.eventMarkers = markers;

  }, true);

  $scope.$watch( function () { return eventService.getFilter(); }, function (data) {
    vm.filterList = data.list;
  }, true);

  // when user presses "Show all events"
  vm.allEvents = function() {
    var eventsPromise = eventService.getAllEvents();
    eventsPromise
      .then(function(data) {
        eventService.setCurrentEventList(data.data);
      })
      .catch(function(err) {
        console.log('Error: ' + err);
      });
  };

  vm.allHunters = function() {
    var huntersPromise = hunterService.getAllHunters();
    huntersPromise
      .then(function(data) {
        eventService.setFilter(data.data, "hunters");
      })
      .catch(function(err) {
        console.log('Error: ' + err);
      });
  };

  vm.allTags = function() {
    var tagsPromise = tagService.getAllTags();
    tagsPromise
      .then(function(data) {
        eventService.setFilter(data.data, "tags");
      })
      .catch(function(err) {
        console.log('Error: ' + err);
      });
  };

  vm.filterEvents = function(filterId) {
    // get events by either hunter or tag depending on current List
    var filteredEventsPromise;
    var listType = eventService.getFilter().type;

    if(listType === "hunters") {
      filteredEventsPromise = eventService.getEventsByHunter(filterId);
    } else if(listType === "tags") {
      filteredEventsPromise = eventService.getEventsByTag(filterId);
    } else {
      console.log('Error: incorrect filter list')
    }
    filteredEventsPromise
      .then(function(data) {
        eventService.setCurrentEventList(data.data);
        console.log(data);
      })
      .catch(function(err) {
        console.log('Error: ' + err);
      });
  }

  vm.gotoEvent = function(position) {
    eventsMapService.setCenter({ latitude: position.lat, longitude: position.lng });
  }

  vm.queryEvents = function() {
    var eventsPromise = eventService.getEventsByQuery(vm.eventQuery);
    eventsPromise
      .then(function(data) {
        eventService.setCurrentEventList(data.data);
      })
      .catch(function(err) {
        console.log('Error: ' + err);
      });
  }
}
