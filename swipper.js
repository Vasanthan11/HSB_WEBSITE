var swiper = new Swiper(`.mySwiper`, {
    slidesPerView: 3,
    spaceBetween: 5,
    pagination: {
        el: `.swiper-pagination`,
        clickable: true,
    },
    breakpoints: {

        200: {
            slidesPerView: 1
        },

        576: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 1.20,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 2.15,
            spaceBetween: 10
        },

    }
});