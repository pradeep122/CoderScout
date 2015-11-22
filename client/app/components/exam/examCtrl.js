'use strict';

angular.module('coderScout')
    .controller('examCtrl', function($scope, dataService, apiRegistry, $location) {
        function init() {
            getQuestionIds();
            $scope.questions = [];
        };
        $scope.questionNumber = "1";
        $scope.question = "write a program for palindrom";

        function getQuestionIds() {
            $scope.questionIds = dataService.getQuestionIds();
            if ($scope.questionIds) {
                $scope.getQuestion($scope.questionIds[0].questionId);
            } else {
                $location.path("/error");
            }
        };

        $scope.getQuestion = function(id) {
            apiRegistry.getQuestion(id).then(function(successRes) {
                $scope.questions.push(successRes.data);
                $scope.currentQuestion = successRes.data;
            }, function(errorRes) {})
        };

        $scope.getQuestionState = function() {
            apiRegistry.getQuestionState(id).then(function(successRes) {

            }, function(errorRes) {})
        };

        init();
    });