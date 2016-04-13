// function OpenContent(element){
//  var elem = this._elem = element;
//  this._numberOfElement = 0;
//  for (var o = 0; o < this._elem.length; o++) {
// 		elem[o].onclick = this._onClick.bind(this);
// 	};
// };

// OpenContent.prototype._open = function(){
// 	this.openBlock = this._elem[this._numberOfElement].getElementsByClassName('contentClose')[0];
// 	this.openBlock.style.height = this.openBlock.scrollHeight + 'px';
// }

// OpenContent.prototype._close = function(i){
// 	this.openBlock = this._elem[i].getElementsByClassName('contentClose')[0];
// 	this.openBlock.style.height = '0';
// }

// OpenContent.prototype._height = function(i){
// 	this.openBlock = this._elem[i].getElementsByClassName('contentClose')[0];
// 	return this.openBlock.style.height;
// }

// OpenContent.prototype._onClick = function(objekt){
// 	for (var i = 0; i < this._elem.length; i++) {
// 		if(this._height>0) this._close(i);
// 	};
// 	// console.log(this._elem[0]);
// 	console.log(objekt);
// 	// this._open();

// 	// this.openBlock = objekt.getElementsByClassName('contentClose')[0];
// 	// this._open();
// }

// var block = document.getElementsByClassName('statja');
// // var od = document.getElementsByClassName('contentClose');
// // var upod = document.getElementsByClassName('open');

// var MenuAkshan = new OpenContent(block);
// //
//
//function Voter(options) {
//  var elem = this._elem = options.elem;
//  this._voteElem = elem.querySelector('.vote');
//
//  elem.onmousedown = function() {
//    return false;
//  };
//
//  elem.onclick = this._onClick.bind(this);
//}
//
//Voter.prototype._onClick = function(event) {
//  if (event.target.closest('.down')) {
//    this._voteDecrease();
//  } else if (event.target.closest('.up')) {
//    this._voteIncrease();
//  }
//};
//
//
//Voter.prototype._voteIncrease = function() {
//  this._voteElem.innerHTML = +this._voteElem.innerHTML + 1;
//};
//
//Voter.prototype._voteDecrease = function() {
//  this._voteElem.innerHTML = +this._voteElem.innerHTML - 1;
//};
//
//Voter.prototype.setVote = function(vote) {
//  this._voteElem.innerHTML = +vote;
//};

// var od = document.getElementsByClassName('contentClose')[1];
// var upod = document.getElementsByClassName('open')[1];
// upod.onclick = function(){
//   od.style.height = od.scrollHeight + 'px';
//   console.log('klik')
// };
//----------------------------------------------------------------------------------------------
// function OpenContent (statja) {
// 	this.statja = statja;
// 	for (var i = 0; i < statja.length; i++) {

// 	var openB = statja[i].getElementsByClassName('open')[0];
	
// 	openB.onclick = this._open;

// };
// };

// OpenContent.prototype._open = function(){
// console.log(this.parentElement.getElementsByClassName('contentClose')[0]);
// 	this._contentClose = this.parentElement.getElementsByClassName('contentClose')[0];
		
// 	// var content = this.parentElement.getElementsByClassName('contentClose')[0];

// 		if (this._contentClose.style.height == "0px" || this._contentClose.style.height == "")	{
// 			close();
// 			this._contentClose.style.height = this._contentClose.scrollHeight + 'px';
// 			}else{ 
// 				close();
// 			};
		
// 	};




// OpenContent.prototype._close = function(){

// 	for (var i = 0; i < this.statja.length; i++) {
// 		this.statja[i].getElementsByClassName('contentClose')[0].style.height = "0";

// 	};
// };

//---------------------------------------------------------------------------------------------

function OpenContent2 (element) {
	this._element = element;
	this._parent = element.parentElement;
	this._botom = element.querySelector('.open');
	this._contents = element.getElementsByClassName('contentClose')[0];
	this._botom.onclick = this._onClick.bind(this);
};

OpenContent2.prototype._open = function () {
	this._contents.style.height = this._contents.scrollHeight + 'px';
};

OpenContent2.prototype._close = function () {
	var allElementContent = this._parent.getElementsByClassName('contentClose');
	for (var i = 0; i < allElementContent.length; i++) {
		allElementContent[i].style.height = "0";
	};
};

OpenContent2.prototype._check = function () {
	if(this._contents.style.height == "0px" || this._contents.style.height == "" ) return true;
	return false;
};

OpenContent2.prototype._onClick = function () {
  if(this._check()) {
	 this._close();
	 this._open();
  }else{
	 this._close();
  };
};


var statja = document.getElementsByClassName('statja');
var openMenu = {};
for (var i = 0; i < statja.length; i++) {
	openMenu["part" + i] = new OpenContent2 (statja[i]);
};
//-------------------------------------------------------------------------------------------




function Slider(element) {
  this._element = element;
  this._bloks = this._element.getElementsByClassName('blok');
  this._left = this._element.getElementsByClassName('left')[0];
  this._rigth = this._element.getElementsByClassName('rigth')[0];
  this._navMin = this._element.getElementsByClassName('navigation')[0];
  this._maximum = this._bloks.length;
  this._navigation(this._navMin, this._bloks.length);
  this._position = {
    left:  this._maximum - 1,
    center: 0,
    rigth: 1
  };
  this.animation = {
    duration : 2
  };

  this._naprjam = {
    left: -1,
    rigth: 1
  };

  this._left.onclick = this._muvL.bind(this);
  this._rigth.onclick = this._muvR.bind(this);
  this._navMin.onclick = this._skrollsTo.bind(this);
};

Slider.prototype._navigation = function (to, namberElement){
  for (var i = 0; i < namberElement; i++) {
    var a = document.createElement('a');
    a.name = i;
    a.className = 'nochacked';
    to.appendChild(a);
  };
  to.getElementsByTagName('a')[0].className = "chacked";
};

Slider.prototype._skrollsTo =function(event){
  var aMass = this._navMin.getElementsByTagName('a');
  var target = event.target || event.srcElement;  
  for (var i = 0; i < aMass.length; i++) {
    if(target == aMass[i]){
      this._skrolls(i);
    };
  };
};


Slider.prototype._muvL = function (){
  this._muv(this._naprjam.left);
};

Slider.prototype._muvR = function (){
  this._muv(this._naprjam.rigth);
};

Slider.prototype._navMinAnim1 = function(){
  var aMass = this._navMin.getElementsByTagName('a');
  for (var i = 0; i < aMass.length; i++) {
    aMass[i].className = 'nochacked';
  };
};
Slider.prototype._navMinAnim2 = function(activElement){
  var aMass = this._navMin.getElementsByTagName('a');
  aMass[activElement].className = 'chacked';
};

Slider.prototype._muv = function (naprjam){
  var steep = 100/(this.animation.duration * 1000 / 60);
  var progres = 0;
  var animation = setInterval(function(){
    progres += steep;
    if(progres > 0 && progres < 100){this._navMinAnim1()};
    if(progres >=100){progres = 100;};
  this._bloks[this._position.center].style.left = 0 - progres * naprjam + "%";
  this._bloks[this._position.rigth].style.left = 100 - progres * naprjam + "%";
  this._bloks[this._position.left].style.left = 0 - 100 - progres * naprjam + "%";
    
    if(progres == 100) {
      clearInterval(animation);
      
      this._position.center = this._perevirka(this._position.center + 1 * naprjam);
      this._position.left = this._perevirka(this._position.left + 1 * naprjam);
      this._position.rigth = this._perevirka(this._position.rigth + 1 * naprjam);
      this._navMinAnim2(this._position.center);
    };
  }.bind(this), 1000/60);
};
//-------------------------------------------------------------------
//не використовується
Slider.prototype._muvLeft = function (){
  var time = this.animation.duration || 1000;
  var steep = 100/(this.animation.duration * 1000 / 60);
  var progres = 0;
  var animation = setInterval(function(){
    
    progres += steep;
    if(progres >=100){progres = 100;};
     console.log(progres);
  this._bloks[this._position.center].style.left = 0 - progres + "%";
  this._bloks[this._position.rigth].style.left = 100 - progres + "%";
  this._bloks[this._position.left].style.left = 0 - 100 - progres + "%";
    
    if(progres == 100) {
      clearInterval(animation);
      console.log(this._position);
      this._position.center = this._perevirka(this._position.center + 1);
      this._position.left = this._perevirka(this._position.left + 1);
      this._position.rigth = this._perevirka(this._position.rigth + 1);
      
    };
  }.bind(this), 1000/60); 
};
//не використовується
Slider.prototype._muvRigth = function (){
  var time = this.animation.duration || 1000;
  var steep = 100/(this.animation.duration * 1000 / 60);
  var progres = 0;
  var animation = setInterval(function(){
    
    progres += steep;
    if(progres >=100){progres = 100;};
     console.log(progres);
  this._bloks[this._position.center].style.left = 0 + progres + "%";
  this._bloks[this._position.rigth].style.left = 100 + progres + "%";
  this._bloks[this._position.left].style.left = 0 - 100 + progres + "%";
    
    if(progres == 100) {
      clearInterval(animation);
      console.log(this._position);
      this._position.center = this._perevirka(this._position.center - 1);
      this._position.left = this._perevirka(this._position.left - 1);
      this._position.rigth = this._perevirka(this._position.rigth - 1);
      
    };
  }.bind(this), 1000/60); 
};
//-------------------------------------------------------------------

Slider.prototype._perevirka = function (znachenja){
  if ( znachenja >=0 && znachenja <= this._maximum - 1) return znachenja;
  if(znachenja > this._maximum - 1) return 0;
  if(znachenja < 0) return this._maximum - 1;
};

Slider.prototype._skrolls = function (toElement) {
  var steep = 100/(this.animation.duration / 3 * 1000 / 60);
  var progres = 0;
  var animation = setInterval(function(){
    
    progres += steep;
    if(progres > 0 && progres < 80){this._navMinAnim1()};
    if(progres >=100){progres = 100;};
  this._bloks[this._position.center].style.left = 0 - progres + "%";
  this._bloks[this._position.rigth].style.left = 100 - progres + "%";
  this._bloks[this._position.left].style.left = 0 - 100 - progres + "%";
    
    if(progres == 100) {
      clearInterval(animation);
      
      this._position.center = this._perevirka(this._position.center + 1);
      this._position.left = this._perevirka(this._position.left + 1);
      this._position.rigth = this._perevirka(this._position.rigth + 1);
      this._navMinAnim2(this._position.center);
      if(this._position.center != toElement){this._skrolls(toElement);};
    };
  }.bind(this), 1000/60);
};


var ss = document.getElementsByClassName('slider')[0];
var slid1 = new Slider(ss);
//-----------------------------------------------------------------------





//--------------------------------------------------------------------------------------------

// var statja = document.getElementsByClassName('statja');
// for (var i = 0; i < statja.length; i++) {

// 	var openB = statja[i].getElementsByClassName('open')[0];
	
// 	openB.onclick = function (){

// 		var content = this.parentElement.getElementsByClassName('contentClose')[0];

// 		if (content.style.height == "0px" || content.style.height == "")	{
// 			close();
// 			content.style.height = content.scrollHeight + 'px';
// 			}else{ 
// 				close();
// 			};
// 	};

// };

// function close(){
		
// 	for (var i = 0; i < statja.length; i++) {
// 		statja[i].getElementsByClassName('contentClose')[0].style.height = "0";
		
// 	};

// };

