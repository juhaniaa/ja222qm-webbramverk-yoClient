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

ExploreCtrl.$inject = ['$scope', 'HaAuthService', 'HaEventService', 'HaEventsMapService'];

function ExploreCtrl($scope, authService, eventService, eventsMapService) {

  var vm = this;

  $scope.map = eventsMapService.map;

  var eventsPromise = eventService.getAllEvents();
  eventsPromise
    .then(function(data) {
    vm.eventList = data;
    console.log(data);
  }).catch(function(err) {
    console.log('Error: ' + err);
  });
}
