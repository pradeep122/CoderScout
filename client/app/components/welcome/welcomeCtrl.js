'use strict';

angular.module('coderScout')
    .controller('welcomeCtrl', function($rootScope,
        $scope,
        apiRegistry,
        $stateParams,
        $location,
        utils,
        $cookieStore,
        dataService) {
        var testId = "";
        var validInvite = {};
        var init = function() {
            $scope.userDetails = {
                test: {}
            };
            checkValidityOfInvite();
        };

        var checkValidityOfInvite = function() {
            createCookie();
            apiRegistry.isValidInvite($stateParams.inviteId).then(function(successRes) {
                testId = successRes.data.testId;
                validInvite = successRes.data
            }, function(err) {
                $location.path("/error");
                setTimeout(function() {
                    $rootScope.$broadcast("errorResMsgBroadcast", err);
                }, 10);
            })
        };

        var createCookie = function() {
            $rootScope.uuid = utils.generateUUID();
            $cookieStore.put("uuid", $rootScope.uuid);
        }

        var createApplicant = function() {
            $scope.userDetails.invitation = validInvite;
            apiRegistry.createApplicant($scope.userDetails).then(function(successRes) {
                getTestReq();
            }, function(errorRes) {})
        }

        $scope.validateEmail = function() {
            var emailRegEx = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
            $scope.errorMsg = !emailRegEx.test($scope.userEmail);
        };

        $scope.getTestReq = function() {
            apiRegistry.getTest(testId).then(function(successRes) {
                dataService.setQuestionIds(successRes.data.questions);
                $location.path("/exam");
            });
        };

        //Initializing the controller
        init();
    });