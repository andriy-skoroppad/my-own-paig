"use strict";
function Food(){
  this.x = getRundom(0, 300);
  this.y = getRundom(0, 500);
}
//get random namber
function getRundom(fromNamber, toNamber){
  return Math.round( Math.random() * (toNamber - fromNamber) + fromNamber );
}

function Snake(name){
  this.name = name;
  this.body = [[50,50], [50, 52], [50, 54]];
}
Snake.prototype.muve = function(speed, directionX, directionY){
  var head = [this.body[0][0] + (directionX * speed), this.body[0][1] + (directionY * speed)];
  this.body.pop();
  this.body.unshift(head);
  return this.body;
}
//звернення до листа гри
var canvasGame = document.getElementById( 'canvasGame' );
var  game = canvasGame.getContext( '2d' );




//Функція початку прорисовки
function gameStart() {
   game.clearRect(0,0,300,500);
  
//ободок листа 
game.fillStyle = 'rgba(171, 248, 23, 0.4)';
game.fillRect(0, 0, 300, 500);
game.fillStyle = 'rgba(171, 248, 23, 1)';
game.fillStyle = 'rgb(0, 0, 0)';
game.strokeRect(0, 0, 300, 500);
  

  
  //  промальовка кола і платформи
  //промальовка мяча
  var ball = new Path2D();
  ball.arc( 10, 100, 2, Math.PI * 2,  false);
  
  game.fillStyle = '#ffffff';
  game.fill( ball );
  
  // game.fillStyle = platform.color;
  // game.fillRect(platform.x, platform.y, platform.l, platform.h );
  
  //  //функція руху обєкта
  // ballGo();
  // balTochBlock();
  // balTochPlatform();
  // controlOfPlatform();
  // //Перевіряє чи не кінець гри часом
  // gameEnd ();
  //animation
//  window.requestAnimationFrame( gameStart );
};

//------------------------------------****-----------------
// var gameset = setInterval(gameStart, 10);
gameStart();

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

