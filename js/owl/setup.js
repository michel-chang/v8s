$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },        
        100:{
            items:5
        }
    }
})