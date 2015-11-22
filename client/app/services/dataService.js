'use strict';

angular.module('coderScout')
    .factory('dataService', function() {
        var data = {};

        function setQuestions(questionList) {
            data.questionList = questionList;
        };

        function getQuestions() {
            return data.applicantData.test.questions;
        };

        function setApplicantData(applicantData) {
            data.applicantData = applicantData;
        }

        function getApplicantData() {
            return data.applicantData;
        }
        return {
            setQuestions: setQuestions,
            getQuestions: getQuestions,
            setApplicantData: setApplicantData,
            getApplicantData: getApplicantData
        }
    });