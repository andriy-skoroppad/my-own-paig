(function() {
    'use strict';

    angular.module('myApp', [
            'routing',
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