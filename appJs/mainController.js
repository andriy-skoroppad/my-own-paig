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
        $scope.hello = {};
        $scope.hello.data = 'main';
        $scope.paige = 'main';

        $scope.$watch('hello.data', function(){
            //$scope.paige = $scope.hello;
            console.log('mainController', $scope.hello.data, $scope.paige );
        })
        $scope.$watch('paige', function(){
            //$scope.paige = $scope.hello;
            console.log('mainController', $scope.hello, $scope.paige );
        })
        $scope.changesHello = function(){

            $scope.hello.data = 'Скоропад Андрій';
        }
    };


})();