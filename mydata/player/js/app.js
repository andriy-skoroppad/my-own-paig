var app = angular.module('blog', []);
app.controller('myPlayerController',['$scope', '$q','$http', '$httpBackend', myPlayerController]);
app.controller('bodyController',['$scope', bodyController]);

function bodyController($scope){
    $scope.key = function (event) {
        console.log(event.keyCode);
        $scope.send = event.keyCode;
    };
    $scope.send = null;
};

function myPlayerController($scope, $q, $http, $httpBackend){

    function chekLength(streng){
        return streng
    };


    $scope.sound = 'Нема музики';
    $scope.player = document.getElementById('myaudio');
    var mySounds = [];
    $scope.playlist = [];
    var progress = document.getElementsByClassName('progress')[0];
    var volume = document.getElementsByClassName('volume')[0];
    $scope.musicProgress = 0;
    $scope.volumeProgress = 50;
    $scope.indexCarentSong = 0;
    $scope.playListVisible = true;
    var isExistPlaylist = false;
    $scope.playlistShow = function (){
        $scope.playListVisible = !$scope.playListVisible;

    }

    $scope.nextSound = function (){
        try {
            if($scope.indexCarentSong + 1 < $scope.playlist.length){
                $scope.indexCarentSong += 1;
            } else {
                $scope.indexCarentSong = 0;
            };
            $scope.selectSound($scope.playlist[$scope.indexCarentSong], $scope.indexCarentSong);
            //$scope.player.src = $scope.playlist[$scope.indexCarentSong].url;
        } catch (err) {
            console.info("no file in list" + err);
            console.log($scope.send);
        };


    };

    $scope.preSound = function (){
        try {
            if ($scope.indexCarentSong - 1 > -1) {
                $scope.indexCarentSong -= 1;
            } else {
                $scope.indexCarentSong = $scope.playlist.length - 1;
            }
            ;
            $scope.selectSound($scope.playlist[$scope.indexCarentSong], $scope.indexCarentSong);
        } catch (err) {
            console.info("no file in list" + err);
        };
    };

    $scope.play = function(){
        console.log('play');
        $scope.player.play();
        console.log($scope.player.duration);
    };
    $scope.pause = function(){
        console.log('pause');
        $scope.player.pause();
    };

    $scope.selectSound = function (object, index){
        $scope.player.src = object.url;
        $scope.sound = object.soundName;
        $scope.indexCarentSong = index;
        $scope.player.volume = $scope.volumeProgress/100;
    }

    $scope.player.addEventListener("timeupdate", function(){
        $scope.musicProgress = 100 * Math.round($scope.player.currentTime) / Math.round( $scope.player.duration);
        if($scope.musicProgress >= 100){
            $scope.nextSound();
        };
        $scope.$digest();
    }, true);




    //add muving of song text
    volume.addEventListener("click", function(e) {
        if (!e) {
            e = window.event;
        }
        try {
            if(!$scope.player.duration){
                return;
            }
            $scope.volumeProgress = e.offsetX * 100 / volume.clientWidth;
            $scope.player.volume = $scope.volumeProgress/100;
            $scope.$digest();
        }
        catch (err) {
            if (window.console && console.error("Error:" + err));
        }
    }, true);


    progress.addEventListener("click", function(e) {
        if (!e) {
            e = window.event;}
        try {
            if(!$scope.player.duration){
                return;
            }
            $scope.player.currentTime = Math.round($scope.player.duration) * (e.offsetX / progress.clientWidth);
            $scope.$digest();
        }
        catch (err) {
            if (window.console && console.error("Error:" + err));
        }
    }, true);
    //----



    function modificatPlayList(){

        var myNextIndex = 0;
        function addToPlaylist(){
            if(mySounds.length == myNextIndex){
                $scope.$digest();
                if ( !isExistPlaylist ){
                    $scope.selectSound($scope.playlist[$scope.indexCarentSong], $scope.indexCarentSong);
                    isExistPlaylist = true;
                }
                return;
            }
            var reader = new FileReader();
            var file = mySounds[myNextIndex];
            reader.readAsDataURL(file);

            reader.onload = function () {
                var obj = {};
                //player.src = reader.result;
                obj.soundName = chekLength(file.name);
                obj.url = reader.result;
                obj.index = $scope.playlist.length + 1;
                $scope.playlist.push(obj);
                myNextIndex +=1;
                addToPlaylist();
            };
        };
        addToPlaylist();
    };



    var drg = function(e){
        e.stopPropagation();
        e.preventDefault();
    };
    var element = document.getElementsByClassName('footerOfPlayer')[0]; // узел, на который будем "сбрасывать" файлы

    element.addEventListener("dragenter", drg, false); // событие при наведении указателя
    element.addEventListener("dragover", drg, false); // событие при покидании мыши области элемента
    element.addEventListener("drop", function(e){ // непосредственно "сброс"
        if(!e.dataTransfer.files) return;
        e.stopPropagation();
        e.preventDefault();

        //e.dataTransfer.files // тот же список файлов, что и у инпута

        read(e.dataTransfer.files);
    }, false);

    function read(files){
        mySounds = [];
        for(var i = 0; i < files.length; i++){
            mySounds.push(files[i]);
        }
        modificatPlayList();
    };

    $scope.dropStart = function (){

    };

    //-----------------promise-------------------
    $http.get('http/my.txt').then(function(response){
        console.log(response.data);
    });



    var first  = $http.get("http/my.txt");
    var second = $http.get("http/my.txt");
    var third  = $http.get("http/my.txt");

    $q.all([first, second, third]).then(function(result) {
            var tmp = [];
            angular.forEach(result, function(response) {
            tmp.push(response.data);
        });
        return tmp;
    }).then(function(tmpResult) {
        console.log(tmpResult);
    });
    //--------------------------------------------------


}

var listener = {
    set : set,
    go : go,
    elements : {}
};

function set(name, fun){
    if( !listener.elements[name] ){//createElement if does not exist element
        listener.elements[name] = document.createElement( name );
    };

    listener.elements[name].addEventListener('click', fun);
}
function go(name){
    if( !listener.elements[name] ){
        console.warn('This name ( ' + name + ' ) does not exist.');
        return false;
    }
    listener.elements[name].click();
    return true;
}
listener.go('data-my');
listener.set('data-my', function(){
    console.log('data-my');
});
listener.set('data-my', function(){
    console.log('data-my2');
});
