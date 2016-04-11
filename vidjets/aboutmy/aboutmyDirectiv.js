
(function() {
    'use strict';

    angular
        .module('aboutmy')
        .directive('aboutmy', [Aboutmy]);

    function Aboutmy(){
        return {
            scope: {},
            restrict: 'E',
            replace: false,
            templateUrl: 'vidjets/aboutmy/aboutmy.html',
            link : function($scope, element, attrs, parentController){
                console.log('news');
            }
        }
    }


})();