var backToTop = $(".fas");

var scrollAmount = 150;

$(window).scroll(function() {
    if ($(this).scrollTop() > scrollAmount) {
        backToTop.fadeIn();
    } else {
        backToTop.fadeOut();
    }
});