'use strict';

angular.module('coderScout')
    .controller('welcomeCtrl', function($rootScope, $scope, apiRegistry, $stateParams, $location, utils, $cookieStore) {
        var init = function() {
            checkValidityOfInvite();
        };

        var checkValidityOfInvite = function() {
            createCookie();
            apiRegistry.isValidInvite($stateParams.inviteId).then(function() {
                $location.path("/error/701");
            }, function(err) {
                $location.path("/error/701");
            })
        };

        var createCookie = function() {
            $rootScope.uuid = utils.generateUUID();
            $cookieStore.put("examSession", $rootScope.uuid);
        }

        $scope.validateEmail = function() {
            var emailRegEx = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
            $scope.errorMsg = !emailRegEx.test($scope.userEmail);
        };

        $scope.beginTestReq = function() {
            apiRegistry.beginTest($scope.userEmail, $stateParams.inviteId).then(function() {

            });
        };

        //Initializing the controller
        init();
    });