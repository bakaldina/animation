
$(document).ready(function () {
    
    $('html, body, *').mousewheel(function (e, delta) {
        // multiplying by 40 is the sensitivity, 
        // increase to scroll faster.
        this.scrollLeft -= (delta * 30);
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
        }
        if ($(window).scrollLeft() >= halfScreen * 0.9) {
            $('#slide2 .title-left').css('display', 'block');
            $('#slide2 .title-left').css('z-index', '2');
        }
        if ($(window).scrollLeft() >= halfScreen * 0.8) {
            $('#slide2 .block-right').css('display', 'block');
        }
        if ($(window).scrollLeft() >= halfScreen * 1.4) {
            $('#slide2 .title-left').css('display', 'none');
        }
        if ($(window).scrollLeft() >= halfScreen * 1.9) {
            $('#slide3 .title-left').css('display', 'block');
            $('#slide3 .title-left').css('z-index', '2');
        }
        if ($(window).scrollLeft() >= halfScreen * 1.8) {
            $('#slide3 .block-right').css('display', 'block');
        }
        if ($(window).scrollLeft() >= halfScreen * 2.4) {
            $('#slide3 .title-left').css('display', 'none');
        }
        if ($(window).scrollLeft() >= halfScreen * 2.9) {
            $('#slide4 .title-left').css('display', 'block');
            $('#slide4 .title-left').css('z-index', '2');
        }
        if ($(window).scrollLeft() >= halfScreen * 2.8) {
            $('#slide4 .block-right').css('display', 'block');
        }
        if ($(window).scrollLeft() <= halfScreen * 2.83) {
            $('#slide4 .title-left').css('display', 'none');
        }
        if ($(window).scrollLeft() <= halfScreen * 0.7) {
            $('#slide2 .block-right').css('display', 'none');
            $('#slide3 .block-right').css('display', 'none');
            $('#slide4 .block-right').css('display', 'none');
            $('#slide2 .title-left').css('display', 'none'); 
        }
        if ($(window).scrollLeft() <= halfScreen * 1.7) {
            $('#slide3 .block-right').css('display', 'none');
            $('#slide4 .block-right').css('display', 'none');
            $('#slide3 .title-left').css('display', 'none');
        }
        if ($(window).scrollLeft() < halfScreen * 2.7) { 
            $('#slide4 .block-right').css('display', 'none');
            $('#slide4 .title-left').css('display', 'none');
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


