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



  $scope.$watch( function () { return eventsMapService.getMap(); }, function (data) {
    $scope.map = data;
  }, true);

  $scope.$watch( function () { return eventService.getCurrentEventList(); }, function (data) {
    console.log(data);
    if(data != null && data.length > 0) {
      console.log("not nuul");
      console.log(data.length);
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
      console.log("emppty");
      vm.eventList = null;
    }

  }, true);

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

  vm.gotoEvent = function(position) {
    eventsMapService.setCenter({ latitude: position.lat, longitude: position.lng });
  };

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

  vm.allEvents();
}
