$(window).on('load', function() {
    $('.preloader').addClass('doneload');
    $(".content").removeClass('loading');
    $(".content").fadeIn(4000);
});