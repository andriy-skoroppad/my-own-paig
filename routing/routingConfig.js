
(function() {
    'use strict';

    angular.module("routing")
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', routingConfig]);

    function routingConfig($stateProvider, $urlRouterProvider, $locationProvider){
        var config = {root : '/my_Web_paige/index.html'};

        $urlRouterProvider.otherwise(function($injector){
            $injector.get('$state').go('404');
        });

        $stateProvider
            .state('home', {
                url: config.root + '',
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
                url: config.root + '/about',
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
                url: config.root + '/work',
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

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: false
        });
    }


})();