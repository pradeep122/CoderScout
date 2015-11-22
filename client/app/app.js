'use strict';

angular.module('coderScout', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap'
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state("welcome", {
            url: "/welcome/:inviteId",
            templateUrl: "app/components/welcome/welcome.html",
            controller: "welcomeCtrl"
        }).state("error", {
            url: "/error/:code",
            templateUrl: "app/components/error/error.html",
            controller: function($stateParams, $rootScope, $scope) {
                $scope.errorObj = _.findWhere($rootScope.errorList, {
                    code: $stateParams.code
                });

            }
        });
        $urlRouterProvider
            .otherwise('/welcome');

        $locationProvider.html5Mode(true);
    })
    .controller('appCtrl', function($rootScope) {
        $rootScope.errorList = [{
            code: "701",
            message: 'Invalid Invitation'
        }, {

        }]
    });