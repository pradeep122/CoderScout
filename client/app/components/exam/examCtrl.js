'use strict';

angular.module('coderScout')
    .controller('examCtrl', function($scope, dataService, apiRegistry, $location) {
        function init() {
            validateApplicant();
            $scope.questionsList = [];
        };
        $scope.questionNumber = "1";
        $scope.question = "write a program for palindrom";

        function getQuestions() {
            $scope.questions = dataService.getQuestions();
            if ($scope.questions) {
                $scope.getQuestion($scope.questions[0].questionId);
            } else {
                $location.path("/error");
            }
        };

        function validateApplicant() {
            apiRegistry.validateApplicant().then(function(successRes) {
                dataService.setQuestions(successRes.data.test.questions);
                getQuestions();
            }, function(errorRes) {})
        };

        $scope.getQuestion = function(id) {
            apiRegistry.getQuestion(id).then(function(successRes) {
                $scope.questionsList.push(successRes.data);
                $scope.currentQuestion = successRes.data;
            }, function(errorRes) {})
        };

        $scope.nextQuestion = function() {
            var index = _.indexOf($scope.questions, _.findWhere($scope.questions, {
                questionId: $scope.currentQuestion._id
            }));
            $scope.getQuestion($scope.questions[index + 1].questionId);
        };

        init();
    });