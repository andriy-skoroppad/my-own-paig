'use strict';//обрубує всякі нєдочоти

//функція полегчує ввід даних як jQeri
function elements(nameElement, numberOfElement){
    var elem, pochatok, osnova;
    pochatok=nameElement.match(/./)[0];
    osnova=nameElement.match(/\w+/)[0];
    if(pochatok==='.'){
        elem=document.getElementsByClassName(osnova)[numberOfElement]
    }else{
        if(pochatok==='#'){
            elem=document.getElementById(osnova)
        }else{
            elem=document.getElementsByTagName(osnova)[numberOfElement]
        }
    }
    return elem;
}
//витягує властивості css
function getElementComputedStyle(elem, prop){
  if (typeof elem!="object") elem = document.getElementById(elem);
  
  // external stylesheet for Mozilla, Opera 7+ and Safari 1.3+
  if (document.defaultView && document.defaultView.getComputedStyle)
  {
    if (prop.match(/[A-Z]/)) prop = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
    return document.defaultView.getComputedStyle(elem, "").getPropertyValue(prop);
  }
  
  // external stylesheet for Explorer and Opera 9
  if (elem.currentStyle)
  {
    var i;
    while ((i=prop.indexOf("-"))!=-1) prop = prop.substr(0, i) + prop.substr(i+1,1).toUpperCase() + prop.substr(i+2);
    return elem.currentStyle[prop];
  }
  
  return "";
}
//Прокрутка кросбраузерна
function getPageScroll() { 
if(window.pageXOffset != undefined) {
 
    return {
      left: pageXOffset,
      top: pageYOffset
    }
  } else{
    var html = document.documentElement;
    var body = document.body;

    var top = html.scrollTop || body && body.scrollTop || 0;
    top -= html.clientTop;

    var left = html.scrollLeft || body && body.scrollLeft || 0;
    left -= html.clientLeft;

    return { top: top, left: left };
  }
}




//scroll base

var ytop=0, visibl=false,topa=0;

elements('#doun',0).onclick=function() {

    var scrollToBotton = window.setInterval(function() {
        var pos2 = window.pageYOffset;
        if ( pos2 < ytop ) {
            window.scrollTo( 0, pos2 + 20 ); // how far to scroll on each step
        } else {
            window.clearInterval( scrollToBotton );ytop=0;
        }
    }, 5);};

elements('#top',0).onclick=function() {

    ytop = window.pageYOffset;
   if(window.pageYOffset>0) {var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if ( pos > 0 ) {
            window.scrollTo( 0, pos - 20 );
            visibl = pos < 100;// how far to scroll on each step
        } else {
            window.clearInterval( scrollToTop );
        }
    }, 5);}};

//Прилипаюче бокове штука в своєму <div>
 // document.documentElement.scrollHeight - высота веб-документа;
  // fotoIdani.offsetHeight - высота элемента

var fotoIdani = /*document.querySelector('.fotoIdani'),*/elements('.fotoIdani',0),
	dofotoIdani=getOffset(fotoIdani).top,
	donuzy=getOffset(elements('.line2',0)).top,
	hfotoIdani=fotoIdani.offsetHeight,
	hnuzy= +getElementComputedStyle(elements('.line2',0), 'height').replace(/px/, '');

window.onresize = function(){
    hfotoIdani=fotoIdani.offsetHeight;
    hnuzy= +getElementComputedStyle(elements('.line2',0), 'height').replace(/px/, '');
    donuzy=getOffset(elements('.line2',0)).top;
};
//прокрутка вверх і в низ із запамятовуванням місця
function asideScroll() {

var naprjam;
    if(topa<window.pageYOffset){naprjam="nuz";}else{naprjam="verh"}//показує в якому напрямку прокрутка
    topa=window.pageYOffset;                                         //задається новою позицією для порівняння
if(naprjam==="nuz"){visibl=false}

    if(window.pageYOffset> 100){
        elements('#top',0).className ='navigation'
    }else{  elements('#top',0).className ='nema'}

    if(visibl )
    {elements('#doun',0).className ='navigationdoun';}else{ elements('#doun',0).className ='nema'}



/*Прилипає до верху за рахунок висоти*/
if(dofotoIdani>getPageScroll().top){
	fotoIdani.style.top = '0';
	}else{
	if(dofotoIdani<getPageScroll().top && hnuzy < document.documentElement.scrollHeight-getPageScroll().top - hfotoIdani){
	fotoIdani.style.top =getPageScroll().top-dofotoIdani+'px'
	}else{if(hnuzy > document.documentElement.scrollHeight-getPageScroll().top - hfotoIdani){fotoIdani.style.top =donuzy-dofotoIdani-hfotoIdani+'px'}}
	}
}
window.addEventListener('scroll', asideScroll, false);

//З джаваскріпт сайта





//три функції які вертають висоту до верху в різних боаузерах з сайту

function getOffset(elem) {
    if (elem.getBoundingClientRect) {
       
        return getOffsetRect(elem)
    } else {
       
        return getOffsetSum(elem)
    }
}

function getOffsetSum(elem) {
    var top=0, left=0;
    while(elem) {
        top = top + parseInt(elem.offsetTop);
        left = left + parseInt(elem.offsetLeft);
        elem = elem.offsetParent;
    }

    return {top: top, left: left}
}

function getOffsetRect(elem) {
    // (1)
    var box = elem.getBoundingClientRect();

    // (2)
    var body = document.body;
    var docElem = document.documentElement;

    // (3)
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    // (4)
    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;

    // (5)
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) }
}