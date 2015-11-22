'use strict';

angular.module('coderScout', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ui.ace'
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state("welcome", {
            url: "/welcome/:access_key",
            templateUrl: "app/components/welcome/welcome.html",
            controller: "welcomeCtrl"
        });
        $urlRouterProvider
            .otherwise('/welcome');

        $locationProvider.html5Mode(true);
    });
