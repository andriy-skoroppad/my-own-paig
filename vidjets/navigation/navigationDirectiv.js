
(function() {
    'use strict';

    angular
        .module('navigation')
        .directive('navigation', [Menu]);

    function Menu(){
        return {
            scope: {hello: '=hello'},
            restrict: 'E',
            replace: false,
            templateUrl: 'vidjets/navigation/navigation.html',
            link : function($scope, element, attrs, parentController){
                console.log('navigation');
                $scope.changesHello = function(){
                    $scope.hello.data = event.target.innerHTML;
                    $scope.paige = 'wwww';
                }
            }
        }
    }


})();