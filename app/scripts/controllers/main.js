'use strict';

/**
 * @ngdoc function
 * @name ja222qmWebbramverkYoClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ja222qmWebbramverkYoClientApp
 */
angular
  .module('hunterApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', 'HaAuthService', 'HaEventService', 'HaEventsMapService'];

function MainCtrl($scope, authService, eventService, eventsMapService) {

  var vm = this;

  vm.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.map = eventsMapService.map;

  vm.authentication = authService.authentication;

  var eventsPromise = eventService.getAllEvents();
  eventsPromise
    .then(function(data) {
    vm.events = data;
  }).catch(function(err) {
    console.log('Error: ' + err);
  });
}
