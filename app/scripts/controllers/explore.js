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
  $scope.eventMarkers = [];

  // check for changes on map
  $scope.$watch( function () { return eventsMapService.getMap(); }, function (data) {
    $scope.map = data;
  }, true);

  // check for changes in eventlist
  $scope.$watch( function () { return eventService.getCurrentEventList(); }, function (data) {

    if(data != null && data.length > 0) {

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
    } else {
      vm.eventList = null;
    }

  }, true);

  // check for changes in filter
  $scope.$watch( function () { return eventService.getFilter(); }, function (data) {
    vm.filterList = data.list;
    vm.eventsHeader = data.name;
    vm.filtersHeader = data.type;
  }, true);

  // when user presses "Show all events"
  vm.allEvents = function() {
    var eventsPromise = eventService.getAllEvents();
    eventsPromise
      .then(function(data) {
        eventService.setCurrentEventList(data.data, "All events");
      })
      .catch(function(err) {
        console.log('Error: ' + err);
      });
  };

  // get all hunters to filter by
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

  // get all tags to filter by
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

  // center map to specific event
  vm.gotoEvent = function(position) {
    eventsMapService.setCenter({ latitude: position.lat, longitude: position.lng });
  };

  // get events by user search words
  vm.queryEvents = function() {
    if(vm.eventQuery) {
      var eventsPromise = eventService.getEventsByQuery(vm.eventQuery);
      eventsPromise
        .then(function(data) {
          eventService.setCurrentEventList(data.data, "Events with: '" + vm.eventQuery + "'");
          vm.eventsHeader = "Events with '" + vm.eventQuery + "'";
        })
        .catch(function(err) {
          console.log('Error: ' + err);
        });
    }
  };

  // get all events on page-load
  vm.allEvents();
}
