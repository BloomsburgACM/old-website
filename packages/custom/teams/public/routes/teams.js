'use strict';

angular.module('mean.teams').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('teams page', {
      url: '/teams/',
      templateUrl: 'teams/views/index.html'
    });
  }
]);
