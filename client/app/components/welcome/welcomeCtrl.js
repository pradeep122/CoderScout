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
            $scope.testLanguages = [{
                name: 'Java',
                value: 1
            }, {
                name: 'JavaScript',
                value: 2
            }, {
                name: 'C',
                value: 3
            }, {
                name: 'C++',
                value: 4
            }];
            $scope.userDetails = {
                firstName: "Rohit",
                lastName: "Kuncham",
                test: {
                    language: 1
                }
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

        $scope.createApplicant = function() {
            $scope.userDetails.invitation = validInvite;
            $rootScope.applicantId = validInvite.email;
            apiRegistry.createApplicant($scope.userDetails).then(function(successRes) {
                $location.path("/exam");
            }, function(errorRes) {})
        }

        $scope.validateEmail = function() {
            var emailRegEx = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
            $scope.errorMsg = !emailRegEx.test($scope.userEmail);
        };

        //Initializing the controller
        init();
    });