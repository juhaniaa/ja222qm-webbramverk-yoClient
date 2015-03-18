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

  $scope.$watch( function () { return eventService.getCurrentEventList(); }, function (data) {
    vm.eventList = data;
    console.log(data);
  }, true);

  $scope.$watch( function () { return eventService.getFilterList(); }, function (data) {
    vm.filterList = data;
    console.log(data);
  }, true);

  $scope.map = eventsMapService.map;

  // when user presses "Show all events"
  vm.allEvents = function() {
    var eventsPromise = eventService.getAllEvents();
    eventsPromise
      .then(function(data) {
        eventService.setCurrentEventList(data.data);
        console.log(data);
      })
      .catch(function(err) {
        console.log('Error: ' + err);
      });
  };

  vm.allHunters = function() {
    var huntersPromise = hunterService.getAllHunters();
    huntersPromise
      .then(function(data) {
        eventService.setFilterList(data.data);
      })
      .catch(function(err) {
        console.log('Error: ' + err);
      });
  };

  vm.allTags = function() {
    var tagsPromise = tagService.getAllTags();
    tagsPromise
      .then(function(data) {
        eventService.setFilterList(data.data);
      })
      .catch(function(err) {
        console.log('Error: ' + err);
      });
  };

}
