document.querySelector('button').addEventListener("click", changeBackground)

function changeBackground() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    var randomColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
}