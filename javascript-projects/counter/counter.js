const newYears = "1 January 2021";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    console.log(days, hours, minutes, seconds);

    document.getElementById("d").innerHTML = days;
    document.getElementById("h").innerHTML = formatTime(hours);
    document.getElementById("m").innerHTML = formatTime(minutes);
    document.getElementById("s").innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown, 1000);