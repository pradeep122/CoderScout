'use strict';

angular.module('coderScout', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state("welcome", {
      url : "/welcome",
      templateUrl : "app/components/welcome/welcome.html",
      controller : "welcomeCtrl"
    });
    $urlRouterProvider
      .otherwise('/welcome');

    $locationProvider.html5Mode(true);
  });
