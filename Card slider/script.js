﻿new Swiper('.card-wrapper', {


    spaceBetween:30,
    
    loop: true,
    
    
    pagination: {
        el: '.swiper-pagination',
    },

    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView:1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});