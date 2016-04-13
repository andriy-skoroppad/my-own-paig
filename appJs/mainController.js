(function(){
    'use strict';

    angular.module('myApp')
        .controller('mainController', ['$scope', '$resource', '$location', '$state', mainController]);

    /**
     *
     * @constructor
     */
    function mainController($scope, $resource, $location, $state) {
        $scope.work = {};
        $scope.about = {};

        $scope.session = {};
        $scope.session.name = 'home';
        $scope.session.title = '';
        var Request = $resource('json/main_page.json', {}, {'get' : { method : "GET", isArray : false }});
        Request.get().$promise.then(function (data) {
            $scope.session.data = data;
            $scope.session.menu = data.menu;
        });
        var GetWorks = $resource('json/my_work.json', {}, {'get' : { method : "GET", isArray : false }});
        GetWorks.get().$promise.then(function (data) {
            $scope.work = data;
        });
        var aboutMy = $resource('json/about_my.json', {}, {'get' : { method : "GET", isArray : false }});
        aboutMy.get().$promise.then(function (data) {
            $scope.about = data;
        });

        //$scope.$watch('session.title', function(){
        //
        //    console.log('mainController', $scope.session.name);
        //});

        $scope.goToMainpage = function(){
            $scope.session.name = 'home';
            $state.go('home', {}, {reload: true});
        }
    };


})();