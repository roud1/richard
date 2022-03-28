$(document).ready(function(){
    $( function() {
        $( "#accordion" ).accordion();
    } );
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});
