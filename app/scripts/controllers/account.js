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

    // check for updates on eventList
    $scope.$watch( function () { return eventService.getCurrentEventList(); }, function (data) {
      vm.eventList = data;
    }, true);

    vm.name = authService.userName();
    var hunterId = authService.userId();
    $scope.map = eventsMapService.eventMap;

    // get events by logged in hunter
    var eventsPromise = eventService.getEventsByHunter(hunterId);
    eventsPromise
      .then(function(data) {
        eventService.setCurrentEventList(data.data, "Events by hunter: " + authService.userName());
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
      tags.push({"name": value.trim()});
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

    // try to save event with eventservice
    var savePromise = eventService.addEvent(eventObj, authService.userToken());
    savePromise
      .then(function(data) {
        eventService.appendCurrentEventList(data.data);
      })
      .catch(function(err) {
        console.log('Error: ' + err.data);
      });
  }

  // delete chosen event
  vm.removeEvent = function(eventId) {
    var removedPromise = eventService.removeEvent(eventId, authService.userToken());
    removedPromise
      .then(function(data) {

        // remove the old event from the list
        eventService.popCurrentEventList(eventId);
      })
      .catch(function(err) {
        console.log('Error: ' + err.data);
      });
  }

  // let user edit chosen event
  vm.editEvent = function(eventObj) {
    vm.changeId = eventObj.id;
    vm.changeDesc = eventObj.description;
  }

  // send user-made changes to api
  vm.changeEvent = function() {

    var eventObj = { "event":
      {
        "description": vm.changeDesc,
      }
    };

    var eventId = vm.changeId;

    var savePromise = eventService.editEvent(eventObj, authService.userToken(), eventId);
    savePromise
      .then(function(data) {
        // remove the old event from the list
        eventService.popCurrentEventList(eventId);

        // add the new event to the list
        eventService.appendCurrentEventList(data.data);
      })
      .catch(function(err) {
        console.log('Error: ' + err.data);
      });
  }
}
