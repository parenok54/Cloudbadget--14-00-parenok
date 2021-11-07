$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000

    });
});


$('#demoDefaultSelection').ddslick({
    defaultSelectedIndex:0
});

$('.mobile-btn').on('click', function (){
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header__menu').toggleClass('show-menu');
    $('.header__menu-link').toggleClass('show-link');
});


$('.menu a nav').on('click', function (){
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header__menu').removeClass('show-menu');
    $('.header__menu-link').removeClass('show-link');
});
