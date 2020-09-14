var backToTop = $(".fas");

var scrollAmount = 150;

$(window).scroll(function() {
    if ($(this).scrollTop() > scrollAmount) {
        backToTop.fadeIn();
    } else {
        backToTop.fadeOut();
    }
});

document.querySelectorAll('.fab').forEach(item => {
    item.addEventListener('click', dap => {
        window.open("https://github.com/ciprianstn/portfolio", '_blank');
    })
})