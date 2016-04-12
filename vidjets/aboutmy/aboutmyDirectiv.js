
(function() {
    'use strict';

    angular
        .module('aboutmy')
        .directive('aboutmy', [Aboutmy]);

    function Aboutmy(){
        return {
            scope: {session: '=session', about: '=about'},
            restrict: 'E',
            replace: false,
            templateUrl: 'vidjets/aboutmy/aboutmy.html',
            link : function($scope, element, attrs, parentController){
                console.log('news');
                $scope.session.title = $scope.about.title;
            }
        }
    }


})();