$(function () {
    const MainVisual = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
    });


    const MainPackage = new Swiper('.main_package_slide', {
        slidesPerView: 3,
        spaceBetween: 30,
        scrollbar: {
            el: ".bar",
            hide: false,
            draggable: true,
            dragSize: 80,
        },
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        breakpoints: {
            1024: {
                slidesPerView: "3",
            },

            970: {
                slidesPerView: "2",
            },

            768: {
                slidesPerView: "2",
            },

            500: {
                slidesPerView: "2",
            },

            480: {
                slidesPerView: "1",
            },

            320: {
                slidesPerView: "1",
            },
        }
    });


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')

        }
    })
})

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })
});
$(function () {

    $('.header .mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.header .hb .inner .gnb').toggleClass('on');
    });
})

$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.to_top').fadeIn(500);
        } else {
            $('.to_top').fadeOut(500);
        }
    });

    $(".to_top").click(function () {
        $('html, body').animate({ scrollTop: 0 }, '1000');
    });

});