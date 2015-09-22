'use strict';

angular.module('mean.events').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('events page', {
      url: '/events/',
      templateUrl: 'events/views/index.html'
    });
  }
]);
