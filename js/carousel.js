// JavaScript for adding 
// slider for multiple images 
// shown at once

$(document).ready(function() {
    $('.slider').slick({
        // arrows: true,
        // dots: true,
        // adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 1000,
        easing: 'ease',
        // easing: '_linear',
        // infinite: true,
        // autoplay: true,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotsHover: false,
        // swipe: true,
        // touchThreshold: 10,
        // touchMove: true,
        // veticalSwiping: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ],
        mobileFirst: false
    });
});