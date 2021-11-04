$(document).ready(function(){
    // $('.main .galeria .foto p a').hide();
/// ANIMACION PARA HACER QUE EL MENU BAJE DE FORMA CONSECUTIVA
    $('.menu a').each(function(index,elemento){
        $(this).css({
            //PRIMERO PONEMOS CADA UNO DE LOS ELEMENTOS EN UN -200 PARA SUBIRLOS
            'top':'-200px'
        });
        //HACEMOS LA ANIMACION DICIENDO QUE EL TOP SEA 0
        // Y LO PONEMOS A 2 SEGUNDOS Y LE VAMOS AUMENTANDO 0.5SEGS A CADA UNO
        //PARA EL EFECTO CONSECUTIVO
        $(this).animate({
            'top': '0'
        },1500 + (index * 500));
    }); //TODO DENTRO DEL EACH PARA RECORRERLO COMO ARREGLO

///////////////////////////////////////////EFECTO HEADER//////////////////////////////////////
//PREGUNTAMOS SI LA PANTALLA ES MAYOR DE 800PX PARA QUE EJECUTE EL EFECTO
    if($(window).width() >800 ){
        //ACCEDEMOS A LOS TEXTOS DEL HEADER Y MODIFICAMOS SU CSS
        $('header .textos').css({
            //HACEMOS LOS TEXTOS INVISIBLES
            'opacity': '0',
            'marginTop': '0'
        });
//ACCEDEMOS DE NUEVO Y AHORA LO HACEMOS VISIBLE
        $('header .textos').animate({
            'opacity': '1',
            //C0N LA ANIMACION, MOVEMOS TODO DE 0 A -52 PARA EL EFECTO
            'marginTop': '-52px'
        }, 1500);
    }


  /////////////////////////////////SCROLL ELEMENTOS MENU HIPERVINCULO //////////////////////////
    if($(window).width() > 850 ){
     var acercaDe = $('#acerca-de').offset().top,
     menu = $('#platillos').offset().top,
     galeria = $('#galeria').offset().top,
     ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 300,
        },500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu - 10,
        },500);
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria,
        },500);
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('body').animate({
            scrollTop: ubicacion + 30,
        },500);
    });

    //BOTON DE REGRESAR ARRIBA PERSISTENTE
    var arriba = $('.menu').offset().top;
    $('.btn-flotante').on('click', function(e){
        e.preventDefault();
        $('body').animate({
            scrollTop: arriba,
        },1500);
    });
}


    /////////////////////////MEDIA QUERI DE EFECTOS //////////////////

    if($(window).width()> 800 && $(window).width() < 850 ){
        var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        arriba = $('#menu').offset().top,
        ubicacion = $('#ubicacion').offset().top;
   
       $('#btn-acerca-de').on('click', function(e){
           e.preventDefault();
           $('body').animate({
               scrollTop: acercaDe - 350,
           },500);
       });
   
       $('#btn-menu').on('click', function(e){
           e.preventDefault();
           $('body').animate({
              
               scrollTop: menu + 10,
           },500);
       });
   
       $('#btn-galeria').on('click', function(e){
           e.preventDefault();
           $('body').animate({
            
               scrollTop: galeria,
           },500);
       });
   
       $('#btn-ubicacion').on('click', function(e){
           e.preventDefault();
           $('body').animate({scrollTop: ubicacion + 50,},500);
       });

       $('.btn-flotante').on('click', function(e){
        e.preventDefault();
        $('body').animate({scrollTop: arriba ,},500);
    });
    }


    if($(window).width()> 700 && $(window).width() < 800 ){
        var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        arriba = $('#menu').offset().top,
        ubicacion = $('#ubicacion').offset().top;
   
       $('#btn-acerca-de').on('click', function(e){
           e.preventDefault();
           $('body').animate({
               scrollTop: acercaDe -160,
           },500);
       });
   
       $('#btn-menu').on('click', function(e){
           e.preventDefault();
           $('body').animate({
              
               scrollTop: menu + 10,
           },500);
       });
   
       $('#btn-galeria').on('click', function(e){
           e.preventDefault();
           $('body').animate({
            
               scrollTop: galeria,
           },500);
       });
   
       $('#btn-ubicacion').on('click', function(e){
           e.preventDefault();
           $('body').animate({scrollTop: ubicacion + 50,},500);
       });

       $('.btn-flotante').on('click', function(e){
        e.preventDefault();
        $('body').animate({scrollTop: arriba ,},500);
    });
    }


    if($(window).width()> 600 && $(window).width() < 700 ){
        var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        arriba = $('#menu').offset().top,
        ubicacion = $('#ubicacion').offset().top;
   
       $('#btn-acerca-de').on('click', function(e){
           e.preventDefault();
           $('body').animate({
               scrollTop: acercaDe -160,
           },500);
       });
   
       $('#btn-menu').on('click', function(e){
           e.preventDefault();
           $('body').animate({
              
               scrollTop: menu + 10,
           },500);
       });
   
       $('#btn-galeria').on('click', function(e){
           e.preventDefault();
           $('body').animate({
            
               scrollTop: galeria,
           },500);
       });
   
       $('#btn-ubicacion').on('click', function(e){
           e.preventDefault();
           $('body').animate({scrollTop: ubicacion + 50,},500);
       });

       $('.btn-flotante').on('click', function(e){
        e.preventDefault();
        $('body').animate({scrollTop: arriba ,},500);
    });
    }

    if($(window).width()> 500 && $(window).width() < 600 ){
        var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        arriba = $('#menu').offset().top,
        ubicacion = $('#ubicacion').offset().top;
   
       $('#btn-acerca-de').on('click', function(e){
           e.preventDefault();
           $('body').animate({
               scrollTop: acercaDe -160,
           },500);
       });
   
       $('#btn-menu').on('click', function(e){
           e.preventDefault();
           $('body').animate({
              
               scrollTop: menu + 10,
           },500);
       });
   
       $('#btn-galeria').on('click', function(e){
           e.preventDefault();
           $('body').animate({
            
               scrollTop: galeria,
           },500);
       });
   
       $('#btn-ubicacion').on('click', function(e){
           e.preventDefault();
           $('body').animate({scrollTop: ubicacion + 50,},500);
       });

       $('.btn-flotante').on('click', function(e){
        e.preventDefault();
        $('body').animate({scrollTop: arriba ,},500);
    });
    }


    if($(window).width()> 400 && $(window).width() < 500 ){
        var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        arriba = $('#menu').offset().top,
        ubicacion = $('#ubicacion').offset().top;
   
       $('#btn-acerca-de').on('click', function(e){
           e.preventDefault();
           $('body').animate({
               scrollTop: acercaDe - 70,
           },500);
       });
   
       $('#btn-menu').on('click', function(e){
           e.preventDefault();
           $('body').animate({
              
               scrollTop: menu + 7,
           },500);
       });
   
       $('#btn-galeria').on('click', function(e){
           e.preventDefault();
           $('body').animate({
            
               scrollTop: galeria,
           },500);
       });
   
       $('#btn-ubicacion').on('click', function(e){
           e.preventDefault();
           $('body').animate({scrollTop: ubicacion + 50,},500);
       });

       $('.btn-flotante').on('click', function(e){
        e.preventDefault();
        $('body').animate({scrollTop: arriba ,},500);
    });
    }

    if($(window).width()> 300 && $(window).width() < 400){
        var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        arriba = $('#menu').offset().top,
        ubicacion = $('#ubicacion').offset().top;
   
       $('#btn-acerca-de').on('click', function(e){
           e.preventDefault();
           $('body').animate({
               scrollTop: acercaDe -60, 
           },500);
       });
   
       $('#btn-menu').on('click', function(e){
           e.preventDefault();
           $('body').animate({
              
               scrollTop: menu,
           },500);
       });
   
       $('#btn-galeria').on('click', function(e){
           e.preventDefault();
           $(' body').animate({
            
               scrollTop: galeria,
           },500);
       });
   
       $('#btn-ubicacion').on('click', function(e){
           e.preventDefault();
           $('body').animate({scrollTop: ubicacion +50,
        },500);
       });

       $('.btn-flotante').on('click', function(e){
        e.preventDefault();
        $('body').animate({scrollTop: arriba ,
        },500);
    });
    }

    if($(window).width()> 200 && $(window).width() < 300){
        var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        arriba = $('#menu').offset().top,
        ubicacion = $('#ubicacion').offset().top;
   
       $('#btn-acerca-de').on('click', function(e){
           e.preventDefault();
           $('body').animate({
               scrollTop: acercaDe -60, 
           },500);
       });
   
       $('#btn-menu').on('click', function(e){
           e.preventDefault();
           $('body').animate({
              
               scrollTop: menu,
           },500);
       });
   
       $('#btn-galeria').on('click', function(e){
           e.preventDefault();
           $('body').animate({
            
               scrollTop: galeria,
           },500);
       });
   
       $('#btn-ubicacion').on('click', function(e){
           e.preventDefault();
           $('body').animate({scrollTop: ubicacion +50,
        },500);
       });

       $('.btn-flotante').on('click', function(e){
        e.preventDefault();
        $('body').animate({scrollTop: arriba ,
        },500);
    });
    }

});