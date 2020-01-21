$(document).ready(function(){
    //Damos funcionalidad a nuestro Milenial windows98
    //Abrir el menu inicio al hacer click en el botón
    $('.btn-inicio').click(function (e) { 
        e.stopPropagation();
        $('.menu-inicio').toggle();
    });

    $('.misdocumentos').click((e) => {
        e.preventDefault(); 

    })
    $('.misdocumentos').dblclick((e) => {
        $('.windows-explorer').toggle();  
        $('#minimizado').addClass('ventana-abierta');
        $('.ventana-abierta').show().css('display', 'inline-block');
    })
    $('.minimizar').click((e) => {
        $('.windows-explorer').animate({
            top: 800,
            left: 0,
            height:0
        });
    });
    $('.cerrar').click(() =>{
        $('.windows-explorer').hide();
        $('.ventana-abierta').hide();
    });
    $('.maximizar').click(() => {
        var top = $(window).width();
        var height = $(window).height();
        $('.windows-explorer').animate({
            top: -20,
            left: 0
        });
        $('.window').animate({
            width: top,
            height: height
        })
    });


    $('.ventana-abierta').click((e) => {
        $('.windows-explorer').animate({
            top: 100,
            left: 300
        });
    })

    $('.icon').click((e) =>{
        
    })
    var hora = new Date(Date.now())
    var ampm = (hora >= 12) ? "PM" : "AM";
    var salida = hora.getHours() + ':' + hora.getMinutes() + ' ' + ampm;
    $('#reloj').html(salida);

    toggleVentanas();
 });
//funcion para ocultar el menu cuando pierde el focus y cambiar los estilos de las ventanas
 function toggleVentanas(){
    $(window).click((e) => {
        e.stopPropagation();       
        $('.menu-inicio').hide();
    })
}
