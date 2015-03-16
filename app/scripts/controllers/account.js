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

  var someHunterId = 5; // this should be retrieved from the current user
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
