$(function () {

    $('.filtrer').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor === 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        contato = $('#contacto').offset().top;

    window.addEventListener('resize', function () {
        let equipo = $('#equipo').offset().top,
            servicio = $('#servicio').offset().top,
            trabajo = $('#trabajo').offset().top,
            contato = $('#contacto').offset().top;
    });
    const body = $('html, body');

    $('#enlace-inicio').click(function (e) {
        e.preventDefault();
        body.animate({
            scrollTop: 0
        }, 600);
    });

    $('#enlace-equipo').click(function (e) {
        e.preventDefault();
        body.animate({
            scrollTop: equipo-100
        }, 600);
    });

    $('#enlace-servicio').click(function (e) {
        e.preventDefault();
        body.animate({
            scrollTop: servicio-100
        }, 600);
    });
   
    $('#enlace-trabajo').click(function (e) {
        e.preventDefault();
        body.animate({
            scrollTop: trabajo-100
        }, 600);
    });
    $('#enlace-contacto').click(function (e) {
        e.preventDefault();
        body.animate({
            scrollTop: contato-100
        }, 600);
    });

});