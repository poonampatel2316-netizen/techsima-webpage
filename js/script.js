$(document).ready(function () {
    $('#slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    });

   $('#client-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            12000: {
                items: 1,
            },
        },
    });
    $('#slide').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    });
});

   
