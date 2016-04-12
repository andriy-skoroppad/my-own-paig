(function(){
    'use strict';

    angular.module('myApp')
        .controller('mainController', ['$scope', '$resource', '$location', mainController]);

    /**
     *
     * @constructor
     */
    function mainController($scope, $resource, $location) {

        $scope.session = {};
        $scope.session.name = 'main';
        $scope.menu = [];
        $scope.title = '';
        var Request = $resource('json/main_page.json', {}, {'get' : { method : "GET", isArray : false }});
        Request.get().$promise.then(function (data) {
            console.log('data', data);
            $scope.title = data.title;
            $scope.menu = data.menu;
            console.log($scope.menu);
        });

        $scope.$watch('session.name', function(){

            console.log('mainController', $scope.session.name);
        });

        $scope.goToMainpage = function(){
            $scope.session.name = 'main';
        }
    };


})();