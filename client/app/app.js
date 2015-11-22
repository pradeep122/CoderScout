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
            url: "/welcome/:inviteId",
            templateUrl: "app/components/welcome/welcome.html",
            controller: "welcomeCtrl"
        }).state("exam", {
            url: "/exam",
            templateUrl: "app/components/exam/exam.html",
            controller: "examCtrl"
        }).state("error", {
            url: "/error",
            templateUrl: "app/components/error/error.html",
            controller: function($stateParams, $rootScope, $scope) {
                $scope.$on("errorResMsgBroadcast", function(event, data) {
                    $scope.errorObj = {
                        code: data.status,
                        message: (data.status == 500) ?
                            "Internal Server Error" : data.data
                    };
                })
            }
        });
        $urlRouterProvider
            .otherwise('/error');

        $locationProvider.html5Mode(true);
    })
    .controller('appCtrl', function($rootScope) {});