 $(document).ready(function(){
        $("[data-slick]").slick();
        $(".js-slider").slick({
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplaySpeed: 2000,
            prevArrow: '<span class="items-slider__arrow items-slider__arrow--left"></span>',
            nextArrow: ' <span class="items-slider__arrow items-slider__arrow--right"></span>',
            dots: true
        });
        $(".js-tells").click(function(){
            $(".tells-list__icon").toggleClass("tells-list__icon--rotate");
            $(".js-dropdown").slideToggle();
        })
    });
