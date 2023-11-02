$(function () {
    // Rate
    $(".header__image-rate").rateYo({
        starWidth: "36px",
        rating: 4.5,
        normalFill: "#D7D1C7",
        ratedFill: "#FFB648",
        readOnly: true,
        spacing: "1.25px",
        "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36" fill="none">' +
            '<path d="M15.3662 4.82936C16.5032 2.74454 19.4968 2.74453 20.6338 4.82936L22.9256 9.03174C23.3571 9.82292 24.1214 10.3782 25.0072 10.5441L29.7121 11.4252C32.0463 11.8623 32.9713 14.7093 31.3399 16.4349L28.0514 19.9132C27.4323 20.5681 27.1404 21.4666 27.2563 22.3603L27.8723 27.1072C28.1779 29.4621 25.756 31.2217 23.6107 30.2034L19.2865 28.1507C18.4724 27.7642 17.5276 27.7642 16.7135 28.1507L12.3893 30.2034C10.244 31.2217 7.82214 29.4621 8.12772 27.1072L8.74367 22.3603C8.85964 21.4666 8.5677 20.5681 7.94858 19.9132L4.66009 16.4349C3.02866 14.7093 3.95372 11.8623 6.28786 11.4252L10.9928 10.5441C11.8786 10.3782 12.6429 9.82293 13.0744 9.03174L15.3662 4.82936Z"/>' +
            '</svg>',
    });

    // Animations
    setInterval(() => {
        if ($(window).scrollTop() > $('.offer__list').offset().top - 750 && $(window).scrollTop() < $('.offer__list').children().last().offset().top) {
            $('.offer__list').children().filter(':nth-child(2n + 1)').addClass('anim-left')
            $('.offer__list').children().filter(':nth-child(2n)').addClass('anim-right')
        }
        if ($(window).scrollTop() > $('.follow__inner').offset().top - 750 && $(window).scrollTop() < $('.follow__inner').children().last().offset().top + 250) {
            $('.follow__inner').children().filter(':nth-child(2n + 1)').addClass('anim-top')
            $('.follow__inner').children().filter(':nth-child(2n)').addClass('anim-bottom')
        }
        if ($(window).scrollTop() > $('.numbers__list').offset().top - 750 && $(window).scrollTop() < $('.numbers__list').children().last().offset().top) {
            $('.numbers__list').children().filter(':nth-child(2n + 1)').addClass('anim-right')
            $('.numbers__list').children().filter(':nth-child(2n)').addClass('anim-left')
        }
        if ($(window).scrollTop() > $('.brands__list').offset().top - 650 && $(window).scrollTop() < $('.brands__list').children().last().offset().top) {
            $('.brands__list').children().filter(':nth-child(2n + 1)').addClass('anim-bottom')
            $('.brands__list').children().filter(':nth-child(2n)').addClass('anim-top')
        }
        if ($(window).scrollTop() > $('.questions__list').offset().top - 750 && $(window).scrollTop() < $('.questions__list').children().last().offset().top - 250) {
            $('.questions__list').children().filter(':nth-child(2n + 1)').addClass('anim-left')
            $('.questions__list').children().filter(':nth-child(2n)').addClass('anim-right')
        }
        if ($(window).scrollTop() > $('.contact__inner').offset().top - 750 && $(window).scrollTop() < $('.contact__inner').children().last().offset().top) {
            $('.contact__inner').children().filter(':nth-child(2n + 1)').addClass('anim-top')
            $('.contact__inner').children().filter(':nth-child(2n)').addClass('anim-bottom')
        }
        if ($(window).scrollTop() > $('.map__block').offset().top - 750 && $(window).scrollTop() < $('.map__block').children().last().offset().top + 500) {
            $('.map__block').children().filter(':nth-child(2n + 1)').addClass('anim-appearance')
        }
    }, 0);

    // Mix Plugin
    var mixer = mixitup('.blog__posts-list');

    // Slider
    $('.customers_slider').sliderPro({
        autoplay: false,
        width: '100%',
        height: 375,
        waitForLayers: true,
        autoHeight: true,
        fade: true,
        autoScaleLayers: false,
        touchSwipe: false,
    });
    // Slider arrows
    $('.customers__arrow-next').on('click', function (e) {
        e.preventDefault()
        $('.customers_slider').sliderPro('nextSlide')
    })
    $('.customers__arrow-prev').on('click', function (e) {
        e.preventDefault()
        $('.customers_slider').sliderPro('previousSlide')
    })

    // Cool Animation
    // var blocks = document.querySelectorAll('.block');

    // for (let block of blocks) {
    //     block.addEventListener('mousemove', function (e) {
    //         var rect = block.getBoundingClientRect();

    //         var middleX = (rect.left + rect.right) / 2;
    //         var middleY = (rect.top + rect.bottom) / 2;

    //         // var k = block.offsetWidth / block.offsetHeight;

    //         var x = 50 * (e.clientX - middleX) / middleX
    //         var y = 50 * (e.clientY - middleY) / middleY

    //         block.style.left = x / 50 + 'px';
    //         block.style.top = y / 50 + 'px';

    //         if (x < 0 && y < 0) {
    //             y -= y * 2;
    //             block.style.transform = 'perspective(17.5cm)' + 'rotateX(' + x + 'deg)' + 'rotateY(' + y + 'deg)';
    //         }
    //         else if (x > 0 && y < 0) {
    //             x -= x * 2;
    //             block.style.transform = 'perspective(17.5cm)' + 'rotateX(' + x + 'deg)' + 'rotateY(' + y + 'deg)';
    //         }
    //         else if (x > 0 && y > 0) {
    //             y -= y * 2;
    //             block.style.transform = 'perspective(17.5cm)' + 'rotateX(' + x + 'deg)' + 'rotateY(' + y + 'deg)';
    //         }
    //         else if (x < 0 && y > 0) {
    //             x -= x * 2;
    //             block.style.transform = 'perspective(17.5cm)' + 'rotateX(' + x + 'deg)' + 'rotateY(' + y + 'deg)';
    //         }
    //     });
    //     block.addEventListener('mouseout', function () {
    //         block.style.transform = 'perspective(none)' + 'rotateX(0deg)' + 'rotateY(0deg)';
    //     });
    // }

    // Accordion
    $('.questions__list-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).find('.questions__list-title').hasClass('questions__list-title--open') != true) {
            $('.questions__list-title').removeClass('questions__list-title--open')
            $('.questions__list-text').slideUp()
            $(this).find('.questions__list-title').addClass('questions__list-title--open')
            $(this).find('.questions__list-text').slideDown()
        }
        else {
            $(this).find('.questions__list-title').removeClass('questions__list-title--open')
            $('.questions__list-text').slideUp()
        }
    })

    // Smooth Scrolling to the block
    // $(".header__nav-item").on("click", "a", function (e) {
    // 	e.preventDefault(); //опустошим стандартную обработку
    // 	var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
    // 		top = $(id).offset().top; //определим высоту от начала страницы до якоря
    // $('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
    // });
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    //----------------------------------- Media ---------------------------------

    // Burger
    $('.burger, .overlay, .header__top-inner').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--open')
        $('.burger-btn').toggleClass('burger-btn--open')
        if ($('.header__top').hasClass('header__top--open')) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    })
});