$(document).ready(function(){
    var altura = $('.menu').offset().top;

    $(window).on('scroll', function(){
        if ($(window).scrollTop() > altura) {
            $(".menu").addClass('menu-fixed');
            $(".contenedor").addClass('menu-fixed-margin');
        } else {
            $(".menu").removeClass('menu-fixed');
            $(".contenedor").removeClass('menu-fixed-margin');
        }
    });

    $(function(){
        $(".slider-galeria article:gt(0)").hide();
        setInterval(function(){
            $(".slider-galeria article:first-child").fadeOut(0).next('article').fadeIn(1000)
            .end().appendTo(".slider-galeria");},5000);
    });
});