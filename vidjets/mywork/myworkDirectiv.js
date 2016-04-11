
(function() {
    'use strict';

    angular
        .module('mywork')
        .directive('mywork', [Mywork]);

    function Mywork(){
        return {
            scope: {},
            restrict: 'E',
            replace: false,
            templateUrl: 'vidjets/mywork/mywork.html',
            link : function($scope, element, attrs, parentController){
                console.log('news');
            }
        }
    }


})();