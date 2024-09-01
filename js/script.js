$(document).ready(function() {

    ///////// **searchbox** /////////
    $('.search-icon').click(function() {
        $('#search-overlay').fadeIn(200);
        $('.search-box').addClass("open_search-box");
      });
    
      $('.close-btn').click(function() {
        $('#search-overlay').fadeOut(200);
        $('.search-box').removeClass("open_search-box");
      });

    ///////// **mobile size** /////////
    $('#navbtn').click(function () {
        $('.main-nav').addClass('open-nav');
        $('.nav-overlay').addClass('on');
        });
    
        $('.close-nav').click(function () {
        $('.main-nav').removeClass('open-nav');
        $('.nav-overlay').removeClass('on');
        });
    
        $('.nav-overlay').click(function () {
        $('.close-nav').trigger('click');
        });

        //////////** user account menu**//////////
        if ($(window).width() < 992) {
            $('.account-cont').on('click', function() {
                $('.account-list').toggleClass('toggle_menu');
            });
        }

        //////////** fixed header on scroll back**//////////
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();

        $(window).scroll(function() {
            var st = $(this).scrollTop();

            // Scroll down and past the navbar
            if (st > lastScrollTop && st > navbarHeight + delta) {
                $('header').addClass('header-up');
            } else {
                // Scroll up or near top
                $('header').removeClass('header-up');
            }
            // Toggle fixed header class based on scroll position
            if (st >= 400) {
                $('header').addClass('header-fixed');
            } else {
                $('header').removeClass('header-fixed');
            }

            lastScrollTop = st; // Update last scroll position
        });

    ///////// **main Slider** /////////
    var mainSlider = new Swiper('.main-slider .swiper-container', {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        preloadImages: false,
        updateOnWindowResize: true,
            
        // If we need pagination
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        // Navigation arrows   
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
        });

        ///////// **New Arrivalls Slider** /////////
        var newArrivall = new Swiper('.arrivals-row .swiper-container', {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                    delay: 2000,
                },
            speed: 500,
            updateOnWindowResize: true,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.arrivals-row .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.arrivals-row .swiper-button-next',
                prevEl: '.arrivals-row .swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
        });
        ///////// **New Best Seller** /////////
        var newArrivall = new Swiper('.bestseller-row .swiper-container', {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                    delay: 2000,
                },
            speed: 500,
            updateOnWindowResize: true,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.bestseller-row .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.bestseller-row .swiper-button-next',
                prevEl: '.bestseller-row .swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
        });

        var acc = document.getElementsByClassName("foot-accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
        }


        //////////** fixed arrow to top**//////////
        $(".arrow-up").click(function () {
            $("html,body").animate(
            {
                scrollTop: 0,
            },
            1500
            );
        });
        $(this).scrollTop() >= 500
            ? $(".arrow-up").fadeIn(300)
            : $(".arrow-up").fadeOut(300);

        $(window).scroll(function () {
            $(this).scrollTop() >= 500
            ? $(".arrow-up").fadeIn(300)
            : $(".arrow-up").fadeOut(300);
        });
});