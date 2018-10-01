
$(document).ready(function () {
    $('html, body, *').mousewheel(function (e, delta) {
        // multiplying by 40 is the sensitivity, 
        // increase to scroll faster.
        this.scrollLeft -= (delta * 0.5);
        e.preventDefault();
    });

    let halfScreen = window.innerWidth / 2;

    $(window).scroll(function () {
        if ($(window).scrollLeft() == 0) {
            $('#slide1 .title-right').css('display', 'block');
            $('#slide1 .title-left').css('display', 'block');
        }
        if ($(window).scrollLeft() >= halfScreen * 0.5 && $(window).scrollLeft() <= halfScreen * 2) {
            $('#slide2 .title-right').css('display', 'block');
            $('#slide2 .title-left').css('display', 'block');
            $('#slide2 .title-left').css('z-index', '22');
            $('#slide1 .title-left').css('z-index', '0');
        }
        
        if ($(window).scrollLeft() >= halfScreen * 2 && $(window).scrollLeft() <= halfScreen * 3)  {
            $('#slide3 .title-right').css('display', 'block');
            $('#slide3 .title-left').css('display', 'block');
            $('#slide3 .title-left').css('z-index', '22');
            $('#slide1 .title-left').css('z-index', '0');
            $('#slide2 .title-left').css('z-index', '0');
        }
        if ($(window).scrollLeft() >= halfScreen * 3 && $(window).scrollLeft() <= halfScreen * 4) {
            $('#slide4 .title-right').css('display', 'block');
            $('#slide4 .title-left').css('display', 'block');
            $('#slide4 .title-left').css('z-index', '22');
            $('#slide1 .title-left').css('z-index', '0');
            $('#slide2 .title-left').css('z-index', '0');
            $('#slide3 .title-left').css('z-index', '0');
        }
        if ($(window).scrollLeft() <= halfScreen ) {
            $('#slide2 .title-right').css('display', 'none');
            $('#slide3 .title-right').css('display', 'none');
            $('#slide4 .title-right').css('display', 'none');
            $('#slide2 .title-left').css('display', 'none'); 
            $('#slide1 .title-left').css('z-index', '22'); 
        }
        if ($(window).scrollLeft() <= halfScreen * 2) {
            $('#slide3 .title-right').css('display', 'none');
            $('#slide4 .title-right').css('display', 'none');
            $('#slide3 .title-left').css('display', 'none');
        }
        if ($(window).scrollLeft() < halfScreen * 3) { 
            $('#slide4 .title-right').css('display', 'none');
            $('#slide4 .title-left').css('display', 'none');
        }
    });


    // $(".item").on("click","a", function (event) {
    //     event.preventDefault();
    //     var id  = $(this).attr('href'),
    //         left = $(id).offset().left;
    //     $('body,html').animate({scrollLeft: left}, 1500);
    // });
});


