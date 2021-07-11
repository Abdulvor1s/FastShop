$(document).ready(function(){
    $('.product__carousel').owlCarousel();    
    $('.more__carousel').owlCarousel();

});

$('.product__carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('.more__carusel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})

$('#open__categ').click(function() {
    $('#mobile__cat').toggle();
})

$('.component_link').click(() => {
    $('.component_sub').toggle();
})


// .smartphone:hover+.link__helper {
// 	visibility: visible;
// }