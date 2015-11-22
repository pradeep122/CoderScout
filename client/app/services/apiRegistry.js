'use strict';

angular.module('coderScout')
    .factory('apiRegistry', function($http, $q, $rootScope) {
        var isValidInvite = function(inviteId) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: "/api/invitation/" + inviteId,
                params: {
                    uuid: $rootScope.uuid
                }
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.resolve("errorResponse" + errorResponse);
            });
            return deferred.promise;
        }
        var getTest = function(useremail, accessKey) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: "/api/test/" + inviteId,
                params: {
                    uuid: $rootScope.uuid
                }
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.resolve("errorResponse" + errorResponse);
            });
            return deferred.promise;
        };
        var getQuestions = function() {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: "/api/questions/multiple" + inviteId,
                params: {
                    uuid: $rootScope.uuid
                }
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.resolve("errorResponse" + errorResponse);
            });
            return deferred.promise;
        };
        var saveSol = function() {
            var deferred = $q.defer();
            $http({
                method: "PUT",
                url: "/api/applicant/" + inviteId + "/test",
                params: {
                    uuid: $rootScope.uuid
                }
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.resolve("errorResponse" + errorResponse);
            });
            return deferred.promise;
        };
        var execSol = function() {
            var deferred = $q.defer();
            $http({

            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.resolve("errorResponse" + errorResponse);
            });
            return deferred.promise;
        };
        var submitExam = function() {
            var deferred = $q.defer();
            $http({

            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.resolve("errorResponse" + errorResponse);
            });
            return deferred.promise;
        };
        return {
            isValidInvite: isValidInvite,
            getTest: getTest,
            getQuestions: getQuestions,
            saveSol: saveSol,
            execSol: execSol,
            submitExam: submitExam
        };
    });