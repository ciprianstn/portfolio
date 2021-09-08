var backToTop = $(".fas");

var scrollAmount = 200;

$(window).scroll(function() {
    if ($(this).scrollTop() > scrollAmount) {
        backToTop.fadeIn();
    } else {
        backToTop.fadeOut();
    }
});

document.querySelectorAll('a[href="header"]').forEach(fas => {
    fas.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.fab').forEach(item => {
    item.addEventListener('click', dap => {
        window.open("https://github.com/ciprianstn", '_blank');
    })
})