
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
                $scope.changesHello = function(){
                    console.log(event.target.innerHTML);
                    $scope.hello = event.target.innerHTML;
                }
            }
        }
    }


})();