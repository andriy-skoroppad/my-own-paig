
(function() {
    'use strict';

    angular.module("routing")
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', routingConfig]);

    function routingConfig($stateProvider, $urlRouterProvider, $locationProvider){
        var config = {root : '/my_Web_paige/index.html'};

        $urlRouterProvider.otherwise(function($injector){
            $injector.get('$state').go('home');
        });

        $stateProvider
            .state('home', {
                url: '',
                cache: false,
                data: {},
                views: {
                    'content': {
                        templateUrl: 'routing/layot/home.html',
                        controller: function() {

                        }
                    }
                }
            })
            .state('home2', {
                url: '/',
                cache: false,
                data: {},
                views: {
                    'content': {
                        templateUrl: 'routing/layot/home.html',
                        controller: function() {

                        }
                    }
                }
            })
            .state('about', {
                url: '/about',
                cache: false,
                data: {},
                views: {
                    'content': {
                        templateUrl: 'routing/layot/about.html',
                        controller: function() {

                        }
                    }
                }
            })
            .state('myWork', {
                url: '/work',
                cache: false,
                data: {},
                views: {
                    'content': {
                        templateUrl: 'routing/layot/mywork.html',
                        controller: function() {

                        }
                    }
                }
            })
            .state('404',
            {
                views: {
                    'content': {
                        templateUrl: '404.html'
                    }
                }
            });

        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false,
        //    rewriteLinks: false
        //});
    }


})();