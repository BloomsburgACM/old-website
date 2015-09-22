'use strict';

/* jshint -W098 */
angular.module('mean.teams').controller('TeamsController', ['$scope', 'Global', 'Teams',
  function($scope, Global, Teams) {
    $scope.global = Global;
    $scope.package = {
      name: 'teams'
    };
  }
]);
