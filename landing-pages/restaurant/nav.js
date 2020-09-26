document.getElementById("hamburger").addEventListener("click", navbar);

function navbar() {
    var element = document.querySelector("nav");
    element.classList.toggle("hide");
}