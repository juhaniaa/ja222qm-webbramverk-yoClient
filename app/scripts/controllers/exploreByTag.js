'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:ExploreByTagCtrl
 * @description
 * # ExploreByTagCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */
angular
  .module('hunterApp')
  .controller('ExploreByTagCtrl', ExploreByTagCtrl);

ExploreByTagCtrl.$inject = ['$scope', 'HaEventService', 'HaEventsMapService'];

function ExploreByTagCtrl($scope, eventService, eventsMapService) {

  var someId = 1; // this should be retrieved from routeParams
  var vm = this;

  $scope.map = eventsMapService.map;

  var eventsPromise = eventService.getEventsByTag(someId);
  eventsPromise
    .then(function(data) {
    vm.eventList = data;
    console.log(data);
  }).catch(function(err) {
    console.log('Error: ' + err);
  });
}
