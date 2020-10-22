$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
    });
    $(".mo-modal-overlay").fadeIn(500)
    $(".mo-modal").addClass("mo-modal-in");
});
$(document).ready(function () {
    ///////// **modal** /////////
    $('.mo-modal-overlay').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
    });
    $('.mo-modal').click(function (e) {
        e.stopPropagation();
    });
    $('.mo-modal-close').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
    });
    ///////// **Select** /////////
    if ($(window).width() > 767) {
        $('.mo-search-select').select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: $('.mo-search-form')
        });
    }

    if ($(window).width() <= 767) {
        $(".mo-search-select").addClass("mobile-select");
        $(".search-select-cont").addClass('mobile-select-cont');
        $(".mobile-select-cont").removeClass('search-select-cont');
    }
    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });
    //////////** cats slider **//////////
    var catswiper = new Swiper('.cats-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.cats-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.cats-slider .swiper-button-next',
            prevEl: '.cats-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });
    //////////** cats slider **//////////
    var catswiper = new Swiper('.cats-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.cats-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.cats-slider .swiper-button-next',
            prevEl: '.cats-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });
    //////////** products slider **//////////
    var productswiper = new Swiper('.products-slider.best-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.best-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.best-slider .swiper-button-next',
            prevEl: '.products-slider.best-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2.2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2.5,
                spaceBetween: 23,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 23,
            },
        },
    });
    //////////** products slider **//////////
    var productswiper = new Swiper('.products-slider.offer-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.offer-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.offer-slider .swiper-button-next',
            prevEl: '.products-slider.offer-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2.2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2.5,
                spaceBetween: 23,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 23,
            },
        },
    });
    //////////** products slider **//////////
    var productswiper = new Swiper('.products-slider.new-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.new-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.new-slider .swiper-button-next',
            prevEl: '.products-slider.new-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2.2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2.5,
                spaceBetween: 23,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 23,
            },
        },
    });

    //////////** brands slider **//////////
    var brandswiper = new Swiper('.brands-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.brands-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.brands-slider .swiper-button-next',
            prevEl: '.brands-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
            1199: {
                slidesPerView: 6,
                spaceBetween: 40,
            },
        },
    });

    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-head").addClass("mo-accordion");
        $(".foot-nav").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    //////////** mega menu **//////////
    if ($(window).width() >= 768) {
        $(".cats-a").click(function () {
            $(".sub-ul").slideToggle()
        });
    }
    if ($(window).width() <= 767) {
        $(".menu-icon").click(function () {
            $("nav").slideToggle()
            $("body").toggleClass("overflow")
            $(".menu-icon").toggleClass("active")
        });
        $('.drop-btn>.nav-a,.drop-btn>.cats-a').click(function () {
            $(".drop-btn>.nav-a,.drop-btn>.cats-a").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings().css('display') == 'none') {
                $(this).siblings().slideDown(500);
            } else {
                $(this).siblings().slideUp(500);
            }
            $(".drop-btn>.nav-a,.drop-btn>.cats-a").not(this).siblings().slideUp(500);
        })
        $('.sub2-btn>.sub-a').click(function () {
            $(".sub2-btn>.sub-a").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings().css('display') == 'none') {
                $(this).siblings().slideDown(500);
            } else {
                $(this).siblings().slideUp(500);
            }
            $(".sub2-btn>.sub-a").not(this).siblings().slideUp(500);
        })
    }

    if ($(window).width() <= 991) {
        $(".top-setting").click(function () {
            $(this).toggleClass("active")
        });
    }
    $(".header-message span.close").click(function () {
        $(".header-message").slideUp()
    });
});