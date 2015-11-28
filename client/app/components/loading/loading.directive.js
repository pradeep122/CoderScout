'use strict';

angular.module('coderScout')
    .directive('csLoading', function() {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/loading/loading.html'
        }
    });
