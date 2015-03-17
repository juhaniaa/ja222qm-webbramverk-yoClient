'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:AccountCtrl
 * @description profile page of user, should show user info
 * # AccountCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */

angular.module('hunterApp')
  .controller('AccountCtrl', AccountCtrl);

AccountCtrl.$inject = ['$scope', 'HaAuthService', 'HaEventService', 'HaEventsMapService'];

function AccountCtrl($scope, authService, eventService, eventsMapService) {

  var vm = this;
  vm.name = authService.userName(); // this should be retrieved from the current user
  var hunterId = authService.userId();

  $scope.map = eventsMapService.map;

  var eventsPromise = eventService.getEventsByHunter(hunterId);
  eventsPromise
    .then(function(data) {
    vm.eventList = data;
    console.log(data);
  }).catch(function(err) {
    console.log('Error: ' + err);
  });
}
