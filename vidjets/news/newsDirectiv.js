
(function() {
    'use strict';

    angular
        .module('news')
        .directive('news', [News]);

    function News(){
        return {
            scope: {work: '=work'},
            restrict: 'E',
            replace: false,
            templateUrl: 'vidjets/news/news.html',
            link : function($scope, element, attrs, parentController){
                $scope.list = [];
                if($scope.work.data.length < 4){
                    $scope.list = $scope.work.data;
                } else {
                    for(var i = 0; i < 3; i++){
                        $scope.list.push(  $scope.work.data[i] )
                    }
                }

            }
        }
    }


})();