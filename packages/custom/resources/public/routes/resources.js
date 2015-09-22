'use strict';

angular.module('mean.resources').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('resources page', {
      url: '/resources/',
      templateUrl: 'resources/views/index.html'
    });
  }
]);
