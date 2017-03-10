"use strict";
function Food(){
  this.x = getRundom(0, 300);
  this.y = getRundom(0, 500);
  console.log(this)
}
//get random namber
function getRundom(fromNamber, toNamber){
  return Math.round( Math.random() * (toNamber - fromNamber) + fromNamber );
}

function Snake(name){
  this.level =  0;
  this.name = name;
  this.body = [[50,55], [50, 60], [50, 65], [50, 70], [50, 75], [50, 80], [50, 85]];
  this.directionX = -1;
  this.directionY = 0;
  this.speed = 1;
  document.body.onkeydown = this.change.bind(this);
  document.body.onkeyup = this.changeup.bind(this);
}
Snake.prototype.change = function(event){
  console.log(event.keyCode)
  switch (event.keyCode) {
    case 38:
      this.directionX = 0;
      this.directionY = -1;
      break;
    case 40:
      this.directionX = 0;
      this.directionY = 1;
      break;
    case 37:
      this.directionX = -1;
      this.directionY = 0;
      break;
    case 39:
      this.directionX = 1;
      this.directionY = 0;
      break;
    case 16:
      this.speed = 5;
      break;
    default:
      // statements_def
      break;
  }
}
Snake.prototype.changeup = function(event){
  
  switch (event.keyCode) {
    case 16:
      this.speed = 1;
      break;
    default:
      // statements_def
      break;
  }
}
Snake.prototype.muve = function(){
  var speed = 5 * this.speed ;
  var head = [this.body[0][0] + (this.directionX * speed), this.body[0][1] + (this.directionY * speed)];
  if(this.body[0][0] + (this.directionX * speed) > 300){
    head[0] = 0;
  } else if(this.body[0][0] + (this.directionX * speed) < 0){
    head[0] = 300;
  };
  if(this.body[0][1] + (this.directionY * speed) > 500){
    head[1] = 0;
  } else if(this.body[0][1] + (this.directionY * speed) < 0){
    head[1] = 500;
  };

  this.body.pop();
  this.body.unshift(head);
  return this.body;
}
Snake.prototype.drow = function(canvas){
  for(var i = 0, length1 = this.body.length; i < length1; i++){
    var bobyPart = canvas.getContext( '2d' );
    bobyPart.fillStyle = '#000'; 
    bobyPart.fillRect( this.body[i][0], this.body[i][1], 5, 5);
  
    
  }
}
Snake.prototype.eat = function(array){
  this.body.push(array);
  this.level += 1;
}

//звернення до листа гри
var canvasGame = document.getElementById( 'canvasGame' );
var  game = canvasGame.getContext( '2d' );


var snake = new Snake("Andriy");
var food = new Food();

function chackIfEat(){
  if(( snake.body[0][0] < food.x + 3 && snake.body[0][0] > food.x - 3 ) && ( snake.body[0][1] < food.y + 3 && snake.body[0][1] > food.y - 3 ) ){
    return true;
  };
  return false;
}
//Функція початку прорисовки
function gameStart() {
   game.clearRect(0,0,300,500);
  
//ободок листа 
game.fillStyle = 'rgba(171, 248, 23, 0.4)';
game.fillRect(0, 0, 300, 500);
game.fillStyle = 'rgba(171, 248, 23, 1)';
game.fillStyle = 'rgb(0, 0, 0)';
game.strokeRect(0, 0, 300, 500);

game.fillStyle = '#FF5722';
game.fillRect(food.x, food.y, 5, 5);

  
if( chackIfEat() ){
  snake.eat();
  food = new Food();
}
snake.muve();
snake.drow(canvasGame);
game.font="10px Arial";
game.fillText("Lvl:" + snake.level,10, 10); 
  //  промальовка кола і платформи
  //промальовка мяча

  // var ball = new Path2D();
  // ball.arc( 10, 100, 2, Math.PI * 2,  false);
  
  // game.fillStyle = '#ffffff';
  // game.fill( ball );
  
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
var gameset = setInterval(gameStart, 100);
// gameStart();

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

