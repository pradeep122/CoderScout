'use strict';

angular.module('coderScout')
    .factory('dataService', function() {
        var data = {};

        function setQuestions(questionList) {
            data.questionList = questionList;
        };

        function getQuestions() {
            return data.questionList;
        };

        return {
            setQuestions: setQuestions,
            getQuestions: getQuestions
        }
    });