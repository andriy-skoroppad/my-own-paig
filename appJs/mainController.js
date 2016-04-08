(function(){
    'use strict';

    angular.module('myApp')
        .controller('mainController', ['$scope', '$location', mainController]);

    /**
     *
     * @constructor
     */
    function mainController($scope, $location) {
        $scope.myName = 'Скоропад Андрій';
        $scope.hello = 'Data wos sendet';
        $scope.$watch('hello', function(){
            console.log('mainController', $scope.hello);
        })


    };


})();