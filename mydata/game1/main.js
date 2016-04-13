"use strict";

//створення конструктора обєкту  (класу) блоки
function Blok( x, y, l, h, strong) {
  this.xx = x;
  this.yy = y ;
  this.l = l;
  this.h = h;
  this.strong = strong;
  
};

Blok.prototype.color = function () {
  var color;
  if(this.strong == 1){color = 'rgba(18, 0, 119, 0.56)';};
    if(this.strong == 2){color = 'rgba(18, 0, 119, 0.74)';};
    if(this.strong == 3){color = 'rgb(18, 0, 119)';};
  return color;
};

Blok.prototype.isnyje = function () {
  if(this.strong > 0){return true};
  return false;
};

Blok.prototype.x = function () {
  if ( this.isnyje() ) {return this.xx};
  return NaN;
};

Blok.prototype.y = function () {
  if ( this.isnyje() ) {return this.yy};
  return NaN;
}
//закінчення конструктора обєкту (класу) блоки

//Створення конструктора для мяча
function Ball() {
  this.x = 155;
  this.y = 400;
  this.color =  'rgb(0, 0, 0)';
  this.speed = 3;
  this.radius = 10;
  this.directionX = true;
  this.directionY = false;
}
//Закінчення конструктора мяча

//початок конструктора платформи
function Platform() {
   this.x = 155;
  this.y = 400;
  this.color =  'rgba(62, 61, 58, 0.82)';
  this.speed = 3;
  this.l = 100;
  this.h = 20;
}

//закінчення конструктора платформи

//звернення до листа гри
var canvasGame = document.getElementById( 'canvasGame' );
var  game = canvasGame.getContext( '2d' );

//карта квадратів
var map1 = [
  {x : 10, y : 5,  l : 50, h : 20, s : 1},
  {x : 70, y : 5,  l : 50, h : 20, s : 2},
  {x : 130, y : 5,  l : 50, h : 20, s : 3},
  {x : 190, y : 5,  l : 50, h : 20, s : 3},
  {x : 40, y : 30,  l : 50, h : 20, s : 2},
  {x : 100, y : 30,  l : 50, h : 20, s : 3},
  {x : 160, y : 30,  l : 50, h : 20, s : 3},
  {x : 220, y : 30,  l : 50, h : 20, s : 1},
  {x : 50, y : 150,  l : 50, h : 40, s : 3},
  {x : 150, y : 150,  l : 50, h : 40, s : 3},
  {x : 100, y : 80,  l : 50, h : 40, s : 3}
];

//створення самих квадратів
var bloks=[];
for ( var i = 0; i < map1.length;  i+=1 ) {
  //створення квадратів
  bloks[ i ] = new Blok( map1[i].x, map1[i].y, map1[i].l, map1[i].h, map1[i].s );
};

//створення мяча
  var ballPar = new Ball();

//створення платформи відбивної
var platform = new Platform();

//рух мяча
function balTochBlock() {
    //відбивання від кубів і знищення їх
  for (var i = 0; i < bloks.length; i++){
    if(bloks[i].strong !== 0){
      
//провірка чи доторкається блок до шара і якщо так то шар міняє напрям а блок втрачає один .strong
      if( ballPar.directionY == false && ballPar.x +  ballPar.radius  > bloks[ i ].x() && ballPar.x -  ballPar.radius < bloks[ i ].x() + bloks[ i ].l && ballPar.y - ballPar.radius < bloks [ i ].y()+ bloks[ i ].h  && ballPar.y  - ballPar.radius > bloks [ i ].y()+ bloks[ i ].h - (ballPar.speed + 1 )  ){
        ballPar.directionY = true;
        bloks[ i ].strong -=1;
        };
      
      if( ballPar.directionY == true && ballPar.x +  ballPar.radius > bloks[ i ].x() && ballPar.x -  ballPar.radius < bloks[ i ].x() + bloks[ i ].l && ballPar.y + ballPar.radius > bloks [ i ].y() && ballPar.y + ballPar.radius < bloks [ i ].y() + (ballPar.speed + 1 ) ){
        ballPar.directionY = false;
        bloks[ i ].strong -=1;
        };
      
      if( ballPar.directionX == true && ballPar.y +  ballPar.radius > bloks[ i ].y() && ballPar.y -  ballPar.radius  < bloks[ i ].y() + bloks[ i ].h && ballPar.x + ballPar.radius > bloks [ i ].x() && ballPar.x + ballPar.radius < bloks [ i ].x() + (ballPar.speed + 1 )) {
         ballPar.directionX = false
         bloks[ i ].strong -=1;
         };
      
      if( ballPar.directionX == false && ballPar.y +  ballPar.radius > bloks[ i ].y() && ballPar.y -  ballPar.radius  < bloks[ i ].y() + bloks[ i ].h && ballPar.x - ballPar.radius < bloks [ i ].x() + bloks[ i ].l && ballPar.x - ballPar.radius > bloks [ i ].x() + bloks[ i ].l - (ballPar.speed + 1 )) {
         ballPar.directionX = true
         bloks[ i ].strong -=1;
        };
     };
  };
};
function balTochPlatform() {
   //провірка чи доторкається блок до шара і якщо так то шар міняє напрям а блок втрачає один .strong
      if( ballPar.directionY == false && ballPar.x +  ballPar.radius  > platform.x && ballPar.x -  ballPar.radius < platform.x + platform.l && ballPar.y - ballPar.radius < platform.y+ platform.h  && ballPar.y  - ballPar.radius > platform.y+ platform.h - (ballPar.speed + 5 )  ){
        ballPar.directionY = true;
        };
      
      if( ballPar.directionY == true && ballPar.x +  ballPar.radius > platform.x && ballPar.x -  ballPar.radius < platform.x + platform.l && ballPar.y + ballPar.radius > platform.y && ballPar.y + ballPar.radius < platform.y + (ballPar.speed + 5 ) ){
        ballPar.directionY = false;
        };
      
      if( ballPar.directionX == true && ballPar.y +  ballPar.radius > platform.y && ballPar.y -  ballPar.radius  < platform.y + platform.h && ballPar.x + ballPar.radius > platform.x && ballPar.x + ballPar.radius < platform.x + (ballPar.speed + 5 )) {
         ballPar.directionX = false;
         };
      
      if( ballPar.directionX == false && ballPar.y +  ballPar.radius > platform.y && ballPar.y -  ballPar.radius  < platform.y + platform.h && ballPar.x - ballPar.radius < platform.x + platform.l && ballPar.x - ballPar.radius > platform.x + platform.l - (ballPar.speed + 5 )) {
         ballPar.directionX = true;
        };
};
function ballGo() {
  //Рух мяча в квадраті 300 х 500
  if ( ballPar.x > 300 - ballPar.radius ) { ballPar.directionX = false };
  if (  ballPar.x < 0 + ballPar.radius ){ ballPar.directionX = true};
  
  //сам рух в осі X
  if(  ballPar.directionX ) { ballPar.x = ballPar.x +  ballPar.speed; 
                }else{  ballPar.x = ballPar.x -  ballPar.speed; };
  
    //Рух мяча в квадраті 300 х 500
  if ( ballPar.y > 500 - ballPar.radius ) { ballPar.directionY = false };
  if (  ballPar.y < 0  + ballPar.radius){ ballPar.directionY = true};
  
  //Сам рух в осі Y
  if(  ballPar.directionY ) { ballPar.y = ballPar.y +  ballPar.speed; 
                }else{  ballPar.y = ballPar.y -  ballPar.speed; };
  

};
//керування платформою
//musha ryh
var mouse = { x : 0, y : 0};
canvasGame.onmousemove  = function(e) {
  mouse.x = e.offsetX==undefined?e.layerX:e.offsetX;
  mouse.y = e.offsetY==undefined?e.layerY:e.offsetY;
  };
//функція руху платформи
function controlOfPlatform() {
  if(mouse.y >= 350){
  platform.x = mouse.x - platform.l / 2;
  platform.y = mouse.y - platform.h / 2;
  if (mouse.y < 350 + platform.h/2){ platform.y = 350};
  if(mouse.y > 500- 1.5 * platform.h) { platform.y = 500 - 2 * platform.h};  
  if (mouse.x > 300 - platform.l / 2){ platform.x = 300 - platform.l};
  if( mouse.x < 0 +platform.l / 2) { platform.x = 0};
  };
};
//при закінченні гри
 var win = false;
function gameEnd () {
  function retur() {
    var alert =true;
    for(var i = 0; i < bloks.length; i++) {
      if (bloks[ i ].strong > 0) { alert = false};
    };
    return alert;
  };
  if( retur() && win ===false){setTimeout(function(){clearInterval(gameset)},100);
                win =true;}
  
};

//Функція початку прорисовки
function gameStart() {
   game.clearRect(0,0,300,500);
  
//ободок листа 
game.fillStyle = 'rgba(171, 248, 23, 0.4)';
game.fillRect(0, 0, 300, 500);
game.fillStyle = 'rgba(171, 248, 23, 1)';
game.fillRect(0, 350, 300, 150 - platform.h);
game.fillStyle = 'rgb(0, 0, 0)';
game.strokeRect(0, 0, 300, 500);
  
//створення квадратів (блоків)
for ( var i = 0; i < bloks.length;  i+=1 ){
  
   //промальовка 
  game.fillStyle = bloks[ i ].color();
  game.fillRect(bloks[ i ].x(), bloks[ i ].y(), bloks[ i ].l, bloks[ i ].h);  
};
  
  //  промальовка кола і платформи
  //промальовка мяча
  var ball = new Path2D();
  ball.arc( ballPar.x, ballPar.y, ballPar.radius, Math.PI * 2,  false);
  
  game.fillStyle = ballPar.color;
  game.fill( ball );
  
  game.fillStyle = platform.color;
  game.fillRect(platform.x, platform.y, platform.l, platform.h );
  
   //функція руху обєкта
  ballGo();
  balTochBlock();
  balTochPlatform();
  controlOfPlatform();
  //Перевіряє чи не кінець гри часом
  gameEnd ();
  //animation
//  window.requestAnimationFrame( gameStart );
};
var gameset = setInterval(gameStart, 10);


function creatMass(a1 , a2){
  var mass = [];
  for(var i = 0; i< a2 - a1 + 1; i++){
    mass[i] = a1 + i;
  };
   return mass;
};

function massCheck(mass1, mass2) {
  var mass = [];
  for (var i = 0; i < mass1.length ; i++) {
    for (var o = 0; o < mass2.length ; o++) {
      if(mass1[i] == mass2 [o]) {
        mass.push(mass1[i]);
//        return true;
        };
    };
  };
  if (!mass[0]) return NaN;
  var massM = [ mass[0], mass[mass.length-1]];
  return massM;
}

var x11 = 5, x12 = 25, y11 = 5, y12 = 35;
var x21 = 0, x22 = 10, y21 = 10, y22 = 40;


var massX1 = creatMass (x11,  x12);
var massY1 = creatMass (y11,  y12);
var massX2 = creatMass (x21,  x22);
var massY2 = creatMass (y21,  y22);

var peresichennjaX = massCheck(massX1, massX2);
var peresichennjaY = massCheck(massY1, massY2);
console.log(peresichennjaX);
console.log(peresichennjaY);

