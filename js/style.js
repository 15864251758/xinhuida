$(function(){
    var swiper = new Swiper('.anli .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    var swiper = new Swiper('.shili .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 3,
        spaceBetween: 60,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 60
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
})