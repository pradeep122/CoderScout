'use strict';

angular.module('coderScout')
    .controller('examCtrl', function($scope, dataService, apiRegistry, $location) {
        function init() {
            validateApplicant();
            $scope.questionsList = [];
            $scope.currentQuestionIndex = -1;
        };


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
                dataService.setApplicantData(successRes.data);
                getQuestions();
            }, function(errorRes) {})
        };

        $scope.getQuestion = function(id) {
            var question = _.findWhere($scope.questionsList, {
                _id: id
            });
            if (question) {
                $scope.currentQuestion = question;
                $scope.currentQuestionIndex = _.indexOf($scope.questionsList, question);
            } else {
                apiRegistry.getQuestion(id).then(function(successRes) {
                    $scope.questionsList.push(successRes.data);
                    $scope.currentQuestionIndex++;
                    $scope.currentQuestion = $scope.questionsList[$scope.currentQuestionIndex];
                }, function(errorRes) {})
            }
        };

        $scope.nextQuestion = function() {
            var index = $scope.questions[$scope.currentQuestionIndex];
            $scope.getQuestion($scope.questions[index + 1].questionId);
        };

        $scope.saveApplicantData = function() {
            var applicantData = dataService.getApplicantData();
            applicantData.text.questions = $scope.questionsList;
            apiRegistry.saveApplicantData(applicantData).then(function() {

            }, function() {

            });

        };

        init();
    });