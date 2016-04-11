(function() {
    'use strict';

    angular.module('myApp', [
            'navigation',
            'news'
    ])
        .config(['$httpProvider', function ($httpProvider) {

        }])
        .run(['$rootScope', function($rootScope){

        }])
})();