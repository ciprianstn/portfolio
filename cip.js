var backToTop = $(".fas");

var scrollAmount = 200;

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

document.querySelector('#small-projects-btn').addEventListener("click", openProjects);

function openProjects() {
    var smallProjects = window.open("/projects.html",
        "_self");
}

document.querySelector('#landing-pages-btn').addEventListener("click", openLanding);

function openLanding() {
    var landingPages = window.open("/landing.html",
        "_self");
}