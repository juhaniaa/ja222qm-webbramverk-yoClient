'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:ExploreByHunterCtrl
 * @description
 * # ExploreByHunterCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */
angular
  .module('hunterApp')
  .controller('ExploreByHunterCtrl', ExploreByHunterCtrl);

ExploreByHunterCtrl.$inject = ['$scope', 'HaEventService', 'HaEventsMapService'];

function ExploreByHunterCtrl($scope, eventService, eventsMapService) {

  var someHunterId = 5; // this should be retrieved from routeParams
  var vm = this;

  $scope.map = eventsMapService.map;

  var eventsPromise = eventService.getEventsByHunter(someHunterId);
  eventsPromise
    .then(function(data) {
    vm.eventList = data;
    console.log(data);
  }).catch(function(err) {
    console.log('Error: ' + err);
  });
}
