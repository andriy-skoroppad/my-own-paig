(function() {
    'use strict';

    angular.module('myApp', [
            'navigation',
            'news',
            'mywork',
            'aboutmy'
    ])
        .config(['$httpProvider', function ($httpProvider) {

        }])
        .run(['$rootScope', function($rootScope){

        }])
})();