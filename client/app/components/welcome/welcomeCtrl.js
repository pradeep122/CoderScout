'use strict';

angular.module('coderScout')
    .controller('welcomeCtrl', function($scope, apiRegistry, $stateParams) {
        $scope.validateEmail = function() {
            var emailRegEx = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
            $scope.errorMsg = !emailRegEx.test($scope.userEmail);
        };

        $scope.beginTestReq = function() {
            apiRegistry.beginTest($scope.userEmail, $stateParams.access_key).then(function() {

            });
        };
    });