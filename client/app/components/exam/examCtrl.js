'use strict';

angular.module('coderScout')
    .controller('examCtrl', function($scope, dataService, apiRegistry, $location, $interval) {
        var autoSaveTimerTask, getCompilationStatusTask;

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
                getTestDetails(successRes.data.test.testId);
                getQuestions();
            });
        };

        function getTestDetails(testId) {
            apiRegistry.getTest(testId).then(function(response) {
                var duration = response.data.duration;
                $scope.examDuration = new Date().getTime() + ((duration == undefined) ? (2000 * 1000) : (duration * 60 * 1000));
            });
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

            });
        };

        function getCompilationStatus() {
            apiRegistry.getCompilationStatus($scope.currentQuestion.link).then(function(response) {
                $interval.cancel(getCompilationStatusTask);
            }, function() {
                $interval.cancel(getCompilationStatusTask);
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
                });
            }
        };

        $scope.nextQuestion = function() {
            var index = $scope.questions[$scope.currentQuestionIndex];
            $scope.getQuestion($scope.questions[index + 1].questionId);
        };

        $scope.compileCode = function() {
            var reqObj = {
                questionId: $scope.currentQuestion._id,
                data: {
                    solution: $scope.currentQuestion.solution,
                    input: 3
                }
            }
            apiRegistry.compileCode(reqObj).then(function(response) {
                $scope.currentQuestion.link = response.data.link;
                getCompilationStatusTask = $interval(getCompilationStatus, 2000);
            });
        };

        $scope.submitApplicantData = function() {
            $interval.cancel(autoSaveTimerTask);
            var applicantData = dataService.getApplicantData();
            applicantData.test.questions = getSavedQuestions();
            apiRegistry.submitApplicantData(applicantData).then(function() {
                $location.path('/feedback');
            });
        };

        init();
    });
