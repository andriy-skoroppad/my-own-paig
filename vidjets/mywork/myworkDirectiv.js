
(function() {
    'use strict';

    angular
        .module('mywork')
        .directive('mywork', [Mywork]);

    function Mywork(){
        return {
            scope: {session: '=session', work: '=work'},
            restrict: 'E',
            replace: false,
            templateUrl: 'vidjets/mywork/mywork.html',
            link : function($scope, element, attrs, parentController){
                console.log('news');
                $scope.session.title = $scope.work.title;
                $scope.list = {};
                $scope.list.web = [];
                $scope.list.ing = [];
                for(var i = 0; i < $scope.work.data.length; i++){
                    if($scope.work.data[i].type == 'web' && $scope.work.data[i].show){
                        $scope.list.web.push($scope.work.data[i])
                    } else {
                        $scope.list.ing.push($scope.work.data[i])
                    }
                }
                console.log($scope.list);
            }
        }
    }


})();