
(function() {
    'use strict';

    angular
        .module('navigation')
        .directive('navigation', [Menu]);

    function Menu(){
        return {
            scope: {session: '=session'},
            restrict: 'E',
            replace: false,
            templateUrl: 'vidjets/navigation/navigation.html',
            link : function($scope, element, attrs, parentController){

                $scope.menu = $scope.session.menu;

                $scope.session.title = $scope.session.data.title;
                $scope.goTo = function( name ){
                    $scope.session.name = name;
                };
            }
        }
    }


})();