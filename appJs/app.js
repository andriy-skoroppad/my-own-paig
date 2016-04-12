(function() {
    'use strict';

    angular.module('myApp', [
            'navigation',
            'news',
            'mywork',
            'aboutmy',
            'ngResource'
    ])
        .config(['$httpProvider', function ($httpProvider) {

        }])
        .run(['$rootScope', function($rootScope){

        }])
})();