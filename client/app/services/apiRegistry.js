'use strict';

angular.module('coderScout')
    .factory('apiRegistry', function($http, $q) {
        var beginTest = function(useremail, accessKey) {
            var deferred = $q.defer();
            $http({

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
            beginTest: beginTest,
            getQuestions: getQuestions,
            saveSol: saveSol,
            execSol: execSol,
            submitExam: submitExam
        };
    });