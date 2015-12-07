'use strict';

angular.module('coderScout', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ui.ace',
        'timer'
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
        }).state("home", {
            url: "/home",
            templateUrl: "app/components/home/home.html",
            controller: "homeCtrl"
        }).state("feedback", {
            url: "/feedback",
            templateUrl: "app/components/feedback/feedback.html",
            controller: "feedbackCtrl"
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
            .otherwise('/home');

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });;
    })
    .controller('appCtrl', function($rootScope) {});
