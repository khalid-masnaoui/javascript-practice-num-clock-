const clock = document.querySelector(".clock");


function setTime() {
    const date = new Date();
    let hours = date.getHours(); //0-23
    let minutes = date.getMinutes(); //0-59
    let seconds = date.getSeconds(); //0-59
    let timezone = "AM"

    if (hours > 12) {
        hours = hours - 12;
        timezone = "PM";

    };
    if (hours == 0) {
        hours = 12;
    };
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;

    };
    if (seconds < 10) {
        seconds = "0" + seconds;
        console.log(typeof(seconds))
    };
    const time = hours + ":" + minutes + ":" + seconds + " " + timezone;

    clock.textContent = time;
    setTimeout(setTime, 1000);



}
setTime();


{}