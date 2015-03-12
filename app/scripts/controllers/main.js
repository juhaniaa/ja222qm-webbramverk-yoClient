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

MainCtrl.$inject = ['$scope', 'HaAuthService', 'HaEventService'];

function MainCtrl($scope, HaAuthService, HaEventService) {


  var vm = this;

  vm.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  $scope.map = { center: { latitude: 60.2, longitude: 20 }, zoom: 9 };
  vm.authentication = HaAuthService.authentication;

  var eventsPromise = HaEventService.getAllEvents();
  eventsPromise
    .then(function(data) {
    vm.events = data;
  }).catch(function(err) {
    console.log('Error: ' + err);
  });
}
