'use strict';

/* jshint -W098 */
angular.module('mean.events').controller('EventsController', ['$scope', 'Global', 'Events',
  function($scope, Global, Events) {
    $scope.global = Global;
    $scope.package = {
      name: 'events'
    };
  }
]);
