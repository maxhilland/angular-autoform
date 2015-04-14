'use strict';

// Declare app level module which depends on views, and components
angular.module('autoform', [
  'ngRoute',
  'autoform.form',
  'autoform.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/form'});
}]);
