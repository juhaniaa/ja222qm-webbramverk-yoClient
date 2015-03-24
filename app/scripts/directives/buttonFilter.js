'use strict';

angular
  .module('hunterApp')
  .directive('haButtonFilter', haButtonFilter);

function haButtonFilter() {
  return {
    restrict: 'E',
    scope: {
      itemId: '@',
      itemName: '@'
    },
    template: '<button class="link" type="button">{{ itemName }}</button>',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        scope.test(attrs.itemId, attrs.itemName);
      })
    },
    controller: ["$scope", 'HaEventService', function($scope, eventService) {
      $scope.test = function(filterId, filterName) {

        // get events by either hunter or tag depending on current List
        var filteredEventsPromise;
        var listType = eventService.getFilter().type;
        var setFilter;

        console.log(filterName);
        console.log(filterId);

        if(listType === "hunters") {
          filteredEventsPromise = eventService.getEventsByHunter(filterId);
          setFilter = "Events by hunter: " + filterName;
        } else if(listType === "tags") {
          filteredEventsPromise = eventService.getEventsByTag(filterId);
          setFilter = "Events by tag: " + filterName;
        } else {
          console.log('Error: incorrect filter list')
        }
        filteredEventsPromise
          .then(function(data) {
            eventService.setCurrentEventList(data.data, setFilter);
            console.log(data);
          })
          .catch(function(err) {
            console.log('Error: ' + err);
          });

      }
      // $scope.doIt = function(lat, lng) {
      //   eventsMapService.setCenter({ latitude: parseFloat(lat), longitude: parseFloat(lng)});
      //   $scope.map = eventsMapService.getMap();
      // }
    }]
  }
}
