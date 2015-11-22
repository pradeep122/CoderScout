'use strict';

angular.module('coderScout')
    .factory('apiRegistry', function($http, $q, $rootScope) {
        var isValidInvite = function(inviteId) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: "/api/invitation/validate/" + inviteId,
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.reject(errorResponse);
            });
            return deferred.promise;
        }
        var createApplicant = function(userDetails) {
            var deferred = $q.defer();
            $http({
                method: "POST",
                url: "/api/applicant/create/",
                data: userDetails
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.reject(errorResponse);
            });
            return deferred.promise;
        }
        var getTest = function(testId) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: "/api/test/" + testId,
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.reject(errorResponse);
            });
            return deferred.promise;
        };
        var getQuestions = function() {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: "/api/questions/multiple" + inviteId,
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.reject(errorResponse);
            });
            return deferred.promise;
        };
        var saveSol = function() {
            var deferred = $q.defer();
            $http({
                method: "PUT",
                url: "/api/applicant/" + inviteId + "/test",
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.reject(errorResponse);
            });
            return deferred.promise;
        };
        var execSol = function() {
            var deferred = $q.defer();
            $http({

            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.reject(errorResponse);
            });
            return deferred.promise;
        };
        var submitExam = function() {
            var deferred = $q.defer();
            $http({

            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.reject(errorResponse);
            });
            return deferred.promise;
        };
        var getQuestion = function(questionId) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: "/api/question/" + questionId,
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.reject(errorResponse);
            });
            return deferred.promise;
        }
        return {
            isValidInvite: isValidInvite,
            getTest: getTest,
            getQuestions: getQuestions,
            saveSol: saveSol,
            execSol: execSol,
            submitExam: submitExam,
            getQuestion: getQuestion
        };
    });