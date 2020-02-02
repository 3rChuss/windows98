$(document).ready(function(){
    //Damos funcionalidad a nuestro Milenial windows98

    // THE HELL BLUE SCREEN ERROR /////////////////////////////////////////////////////////////
    var totalClicks = 0;
    var newRandom = Math.floor((Math.random() * 10) + 1);
    var audio = new Audio();
    audio.src="https://acmemkt.com/wp-content/uploads/2020/01/windows_xp_error.mp3";
    $('body').click(function (e) {
    totalClicks += 1;
    if (totalClicks == newRandom) {
        $('.pantallazo').toggle();
        audio.play();    
    }
    console.log('random ' + newRandom)
    console.log('click ' + totalClicks);
    });
    $(document).keydown( (e) => {
        if( $('.pantallazo').is(":visible")){
        $('.pantallazo').toggle();
        totalClicks = 0;
        newRandom = Math.floor((Math.random() * 10) + 1);
        }
    });

    // INICIO ///////////////////////////////////////////////////////////////////////////////////////////////
    $('.btn-inicio').click(function (e) { 
        e.stopPropagation();
        $('.menu-inicio').toggle();
    });
    //Añadimos las clases seleccionado a los iconos cuando los tocamos y si ya tenía la clase, la eliminamos
    $('.icon').click((e) => {
        var current = e.currentTarget;
        if ($(current).hasClass('seleccionado')){
            $(current).removeClass('seleccionado');
        }else{
            $('.icon').removeClass('seleccionado'); //elimina la de los otros iconos que pierden el foco
            $(current).addClass('seleccionado');
        }       
    });
    $('.menu-inicio').find('li:contains("Documentos")').click( () =>{
        $('.windows-explorer').toggle();
        $('.ventana-abierta').show().css('display', 'inline-block');
    });

    // ACCESOS DIRECTOS EN LA BARRA DE INICIO /////////////////////////////////////////////////////////////////
    $('.ventana-abierta').click((e) => {
        $('.windows-explorer').position().top === 800 ? maximizar() : 
        minimizar()
    });

    // WINDOWS EXPLORER Y SUS FUNCIONES BÁSICAS ////////////////////////////////////////////////////////////////
    $('.misdocumentos').dblclick((e) => {
        $('.windows-explorer').toggle();  
        $('#minimizado').addClass('ventana-abierta');
        $('.ventana-abierta').show().css('display', 'inline-block');
        $('.misdocumentos').removeClass('seleccionado');
        $('.objects').html($('.contenido-iconos').find('div').length + " Objetos");
    });
    $('.minimizar').click((e) => {
        minimizar();
    });
    $('.maximizar').click(() => {
        var top = $(window).width();
        var height = $(window).height();
        if ($('.windows-explorer').position().top === -20){
            $('.windows-explorer').animate({
                top: 100,
                left: 300
            });
            $('.window').animate({
                width: 700,
                height: 500
            })
        }else{
            $('.windows-explorer').animate({
                top: -20,
                left: 0
            });
            $('.window').animate({
                width: top,
                height: height
            })
        }
    });
    $('.cerrar').click(() =>{
        $('.windows-explorer').hide();
        $('.ventana-abierta').hide();
    });
    // Hacemos seleccionable los iconos de la carpeta
    $('.contenido-icono').click((e) => {
        e.preventDefault();
        var current = e.currentTarget;
        if ($(current).find('p').hasClass('seleccionado')){
            $(current).find('p').removeClass('seleccionado');
        }else{
            $('.contenido-icono').find('p').removeClass('seleccionado');
            $(current).find('p').addClass('seleccionado');
        }  
    });
    // abrimos los links con un doble click
    $('.contenido-icono').dblclick((e) => {
        window.open(($(e.currentTarget).find('a')[0].href));
    })
    
    //LLamamos a las funciones 
    actualizaReloj();
    setInterval(actualizaReloj, 1000); //actualiza el reloj cada minuto
    toggleVentanas();
 });

//funcion para ocultar el menu incio cuando hace click en cualquier sitio
 function toggleVentanas(){
    $(window).click((e) => {
        e.stopPropagation();       
        $('.menu-inicio').hide();
    });
}

function actualizaReloj(){
    var hora = new Date(Date.now())
    var ampm = (hora >= 12) ? "PM" : "AM";
    var salida = hora.getHours() + ':' + hora.getMinutes() + ' ' + ampm;
    $('#reloj').html(salida);
}

function minimizar(){
    $('.windows-explorer').animate({
        top: 800,
        left: 0,
        height: 0
    });
    $('#minimizado').removeClass('ventana-abierta');
    $('#minimizado').removeClass('stripped');
    $('#minimizado').addClass('lostfocus');
}

function maximizar(){
    $('.windows-explorer').animate({
        top: 100,
        left: 300,
        height: 500
    });
    $('#minimizado').addClass('ventana-abierta');
    $('#minimizado').addClass('stripped');
    $('#minimizado').removeClass('lostfocus');
}
