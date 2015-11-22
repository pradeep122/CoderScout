'use strict';

angular.module('coderScout')
    .controller('homeCtrl', function($scope) {
        $(document).ready(function() {
            $('textarea#textarea1').characterCounter();
        });
    });
