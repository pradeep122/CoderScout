'use strict';

angular.module('coderScout')
    .controller('examCtrl', function($scope, dataService, apiRegistry, $location, $interval) {
        var autoSaveTimerTask;

        function init() {
            validateApplicant();
            $scope.questionsList = [];
            $scope.currentQuestionIndex = -1;

        };


        function getQuestions() {
            $scope.questions = dataService.getQuestions();
            if ($scope.questions) {
                $scope.getQuestion($scope.questions[0].questionId);
                autoSaveApplicantData();
            } else {
                $location.path("/error");
            }
        };

        function validateApplicant() {
            apiRegistry.validateApplicant().then(function(successRes) {
                    dataService.setApplicantData(successRes.data);
                    var duration = successRes.data.test.duration;
                    $scope.examDuration = new Date().getTime() + ((duration == undefined) ? (20 * 1000) : successRes.data.test.duration);
                    getQuestions();
                },
                function(errorRes) {});
        };

        function autoSaveApplicantData() {
            autoSaveTimerTask = $interval(saveApplicantData, 10000);
        };

        function getSavedQuestions() {
            var questions = [];
            _.map($scope.questions, function(questionObj) {
                var fetchedQuestion = _.findWhere($scope.questionsList, {
                    _id: questionObj.questionId
                });
                if (fetchedQuestion) {
                    questions.push({
                        questionId: fetchedQuestion._id,
                        score: fetchedQuestion.score,
                        solution: fetchedQuestion.solution,
                        _id: questionObj._id
                    });
                }
            });
            return questions;
        };

        function saveApplicantData() {
            var applicantData = dataService.getApplicantData();
            applicantData.test.questions = getSavedQuestions();
            apiRegistry.saveApplicantData(applicantData).then(function() {

            }, function() {

            });
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

        $scope.submitApplicantData = function() {
            $interval.cancel(autoSaveTimerTask);
            var applicantData = dataService.getApplicantData();
            applicantData.test.questions = getSavedQuestions();
            apiRegistry.submitApplicantData(applicantData).then(function() {

            }, function() {
                alert('Submission Failed!');
            });
        };

        init();
    });