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
        var validateApplicant = function() {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: "/api/applicant/validate/" + $rootScope.applicantId,
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.reject(errorResponse);
            });
            return deferred.promise;
        };

        var saveApplicantData = function(applicantData) {
            var deferred = $q.defer();
            $http({
                method: "PUT",
                url: "/api/applicant/" + $rootScope.applicantId + "/save",
                data: applicantData
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.reject(errorResponse);
            });
            return deferred.promise;
        };

        var submitApplicantData = function(applicantData) {
            var deferred = $q.defer();
            $http({
                method: "PUT",
                url: "/api/applicant/" + $rootScope.applicantId + "/submit",
                data: applicantData
            }).then(function(successResponse) {
                deferred.resolve(successResponse);
            }, function(errorResponse) {
                deferred.reject(errorResponse);
            });
            return deferred.promise;
        };

        return {
            isValidInvite: isValidInvite,
            getTest: getTest,
            getQuestions: getQuestions,
            saveSol: saveSol,
            execSol: execSol,
            submitExam: submitExam,
            getQuestion: getQuestion,
            validateApplicant: validateApplicant,
            createApplicant: createApplicant,
            saveApplicantData: saveApplicantData,
            submitApplicantData: submitApplicantData
        };
    });