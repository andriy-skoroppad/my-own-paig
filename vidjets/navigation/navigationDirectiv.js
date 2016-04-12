
(function() {
    'use strict';

    angular
        .module('navigation')
        .directive('navigation', [Menu]);

    function Menu(){
        return {
            scope: {session: '=session', menu: '=menu'},
            restrict: 'E',
            replace: false,
            templateUrl: 'vidjets/navigation/navigation.html',
            link : function($scope, element, attrs, parentController){
                console.log('navigation');
                $scope.goTo = function( name ){
                    $scope.session.name = name;
                }
            }
        }
    }


})();