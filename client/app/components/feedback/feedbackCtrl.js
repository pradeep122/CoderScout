'use strict';

angular.module('coderScout')
    .controller('feedbackCtrl', function($scope) {
        $(document).ready(function() {
            $('textarea#textarea1').characterCounter();
        });
    });
