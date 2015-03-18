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

AccountCtrl.$inject = ['$scope', 'HaAuthService', 'HaEventService', 'HaEventsMapService', '$location'];

function AccountCtrl($scope, authService, eventService, eventsMapService, $location) {

  var vm = this;

  if(!authService.logged()) {
    $location.path('/');
  } else {
    $scope.$watch( function () { return eventService.getCurrentEventList(); }, function (data) {
      vm.eventList = data;
    }, true);

    vm.name = authService.userName(); // this should be retrieved from the current user
    var hunterId = authService.userId();

    $scope.map = eventsMapService.map;

    var eventsPromise = eventService.getEventsByHunter(hunterId);
    eventsPromise
      .then(function(data) {
        eventService.setCurrentEventList(data.data);
      })
      .catch(function(err) {
        console.log('Error: ' + err);
      });
  }

  vm.addEvent = function() {
    // build json object out of input fields
    var tagsArray = vm.tag.split(",");
    var tags = [];
    var log = [];
    angular.forEach(tagsArray, function(value, key) {
      tags.push({"name": value});
    }, log);

    var eventObj = { "event":
       {
        "description": vm.desc,
         "position_attributes": {
         "lat": vm.latitude,
         "lng": vm.longitude
         },
         "tags": tags
        }
      };

    var savePromise = eventService.addEvent(eventObj, authService.userToken());
    savePromise
      .then(function(data) {
        // show some nice message about added event
        eventService.appendCurrentEventList(data.data);
      })
      .catch(function(err) {
        console.log('Error: ' + err.data);
      });

  }

}
