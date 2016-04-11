
(function() {
    'use strict';

    angular
        .module('news')
        .directive('news', [News]);

    function News(){
        return {
            scope: {},
            restrict: 'E',
            replace: false,
            templateUrl: 'vidjets/news/news.html',
            link : function($scope, element, attrs, parentController){
                console.log('news');
            }
        }
    }


})();