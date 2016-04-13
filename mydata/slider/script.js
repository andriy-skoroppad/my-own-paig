$(document).ready(function(){
    var photoNamber=1;
    var namberOfPhoto=$('header>a').size();
    var hederWidth=$('header').css('width');
    var timeOfAnimation=600;
    var noclick=false;
    
    function righySkrol(){
        if(noclick){return;
        }else{
                noclick=true;
                var pravo=photoNamber+1;
                pravo=perevirka(pravo);
                photoNamber=perevirka(photoNamber);
                var eto='header>a:nth-of-type('+photoNamber+')';
                var after='header>a:nth-of-type('+pravo+')';
                $(after).css({'left': hederWidth}).removeClass( "hiden" ).addClass( "blok" );
                $('header>a').animate( {"left": '-='+hederWidth}, {queue:false}, timeOfAnimation);
                $(eto).removeClass( "blok" );
                setTimeout(function(){$(eto).addClass( "hiden" ); noclick=false;}, timeOfAnimation);
                photoNamber=photoNamber+1;
                photoNamber=perevirka(photoNamber);
            }
    }

    function leftSkrol(){
        if(noclick){return;
        }else{
                noclick=true;
                var livo=photoNamber-1;
                livo=perevirka(livo);
                photoNamber=perevirka(photoNamber);
                var eto='header>a:nth-of-type('+photoNamber+')';
                var befor='header>a:nth-of-type('+livo+')';
                $(befor).css({'left':'-'+hederWidth}).removeClass( "hiden" ).addClass( "blok" ).animate( {"left": '+='+hederWidth}, {queue:false}, timeOfAnimation);
                $(eto).animate( {"left": '+='+hederWidth}, {queue:false}, timeOfAnimation); 
                $(eto).removeClass( "blok" );
                setTimeout(function(){$(eto).addClass( "hiden" ); noclick=false;}, timeOfAnimation);
                photoNamber=photoNamber-1;
                photoNamber=perevirka(photoNamber);
            }
    }

    $('#right').click(righySkrol);

    $('#left').click(leftSkrol);

    //автоматичне прокручування картинок
    //  var nIntervId = setInterval(righySkrol, 5000);
    
    function perevirka(znachenja){
        if(znachenja<1){znachenja2=namberOfPhoto}else{if(znachenja>namberOfPhoto){znachenja2=1}else{znachenja2=znachenja}}
        return znachenja2;
    }
    
});
