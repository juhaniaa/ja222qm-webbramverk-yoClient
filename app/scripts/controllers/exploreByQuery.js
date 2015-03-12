'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:ExploreByQueryCtrl
 * @description
 * # ExploreByQueryCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */
angular
  .module('hunterApp')
  .controller('ExploreByQueryCtrl', ExploreByQueryCtrl);

ExploreByQueryCtrl.$inject = ['$scope', 'HaEventService', 'HaEventsMapService'];

function ExploreByQueryCtrl($scope, eventService, eventsMapService) {

  var someQuery = 'happy'; // this should be retrieved from routeParams
  var vm = this;

  $scope.map = eventsMapService.map;

  var eventsPromise = eventService.getEventsByQuery(someQuery);
  eventsPromise
    .then(function(data) {
    vm.eventList = data;
    console.log(data);
  }).catch(function(err) {
    console.log('Error: ' + err);
  });
}
