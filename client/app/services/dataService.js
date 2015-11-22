'use strict';

angular.module('coderScout')
    .factory('dataService', function() {
        var data = {};

        function setQuestionIds(questionIdList) {
            data.questionIdList = questionIdList;
            alert(JSON.stringify(data.questionIdList));
        };

        function getQuestionIds() {
            return data.questionIdList;
        };

        return {
            setQuestionIds: setQuestionIds,
            getQuestionIds: getQuestionIds
        }
    });