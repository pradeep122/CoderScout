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
                value: 10
            }, {
                name: 'JavaScript',
                value: 56
            }, {
                name: 'C',
                value: 11
            }, {
                name: 'C++',
                value: 1
            }];
            $rootScope.userDetails = {
                // firstName: "Rohit",
                // lastName: "Kuncham",
                // test: {
                //     language: 56
                // }
            };
            // checkValidityOfInvite();
        };

        var checkValidityOfInvite = function() {
            $scope.loading = true;
            createCookie();
            apiRegistry.isValidInvite($stateParams.inviteId).then(function(successRes) {
                testId = successRes.data.testId;
                validInvite = successRes.data;
                delete $scope.loading;
            }, function(err) {
                delete $scope.loading;
            })
        };

        var createCookie = function() {
            $rootScope.uuid = utils.generateUUID();
            $cookieStore.put("uuid", $rootScope.uuid);
        }

        $scope.createApplicant = function() {
            $rootScope.userDetails.invitation = validInvite;
            $rootScope.applicantId = validInvite.email;
            apiRegistry.createApplicant($rootScope.userDetails).then(function(successRes) {
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
