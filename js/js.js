
$(document).ready(function () {
    $('html, body, *').mousewheel(function (e, delta) {
        this.scrollLeft -= (delta * 3);
        e.preventDefault();
    });

    let halfScreen = window.innerWidth / 2;
    console.log(halfScreen)
    $(window).scroll(function () {
        console.log($(window).scrollLeft())
        if ($(window).scrollLeft() == 0) {
            $('#slide1 .block-right').css('display', 'block');
            $('#slide1 .title-left').css('display', 'block');
        }
        if ($(window).scrollLeft() >= halfScreen * 0.5) {
            $('#slide1 .title-left').css('display', 'none');
            $('#slide2 .block-right').css('display', 'block');
        }
        if ($(window).scrollLeft() >= halfScreen * 0.9) {
            $('#slide2 .title-left').css('display', 'block');
            $('#slide2 .title-left').css('z-index', '2');
        }
        if ($(window).scrollLeft() >= halfScreen * 1.5) {
            $('#slide2 .title-left').css('display', 'none');
            $('#slide3 .block-right').css('display', 'block');
        }
        if ($(window).scrollLeft() >= halfScreen * 1.9) {
            $('#slide3 .title-left').css('display', 'block');
            $('#slide3 .title-left').css('z-index', '2');
        }
        if ($(window).scrollLeft() >= halfScreen * 2.5) {
            $('#slide3 .title-left').css('display', 'none');
            $('#slide4 .block-right').css('display', 'block');
        }
        if ($(window).scrollLeft() >= halfScreen * 2.9) {
            $('#slide5 .title-left').css('display', 'block');
        }

        if ($(window).scrollLeft() <= halfScreen * 0.65) {
            $('#slide2 .block-right').css('display', 'none');
            $('#slide3 .block-right').css('display', 'none');
            $('#slide4 .block-right').css('display', 'none');
        }

        if ($(window).scrollLeft() <= halfScreen * 0.92) {
            $('#slide2 .title-left').css('display', 'none'); 
            $('#slide5 .title-left').css('display', 'none');
        }
        if ($(window).scrollLeft() <= halfScreen * 1.66) {
            $('#slide3 .block-right').css('display', 'none');
            $('#slide4 .block-right').css('display', 'none');
        }
        if ($(window).scrollLeft() <= halfScreen * 1.94) {
            $('#slide3 .title-left').css('display', 'none');
            $('#slide5 .title-left').css('display', 'none');
        }
        if ($(window).scrollLeft() < halfScreen * 2.65) { 
            $('#slide4 .block-right').css('display', 'none');
            $('#slide4 .title-left').css('display', 'none');

        }
        if ($(window).scrollLeft() <= halfScreen * 2.93) {
            $('#slide5 .title-left').css('display', 'none');
        }
        if ($(window).scrollLeft() >= halfScreen * 2.9) {
            $('#slide1 .block-left').css('display', 'none');
        }
    });


    $(".item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            left = $(id).offset().left;
        $('body,html').animate({scrollLeft: left}, 1500);
    });

   
});
function modalOpen(number) {
    $(".video-modal" + number).show();
}
function modalClose(number) {
    $(".video-modal" + number).hide();
};


