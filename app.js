

const MyClockDisplay = document.querySelector("#MyClockDisplay");

function showTime() {

    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    if (hour < 10) {
        hour = "0" + hour;
    } else {
        hour = hour;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    } else {
        minutes = minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    } else {
        seconds = seconds;
    }

    var time = hour + " : " + minutes + " : " + seconds + "  " + session;

    // MyClockDisplay.innerText = time;
    MyClockDisplay.textContent = time;

    setInterval(showTime, 1000);
}
showTime();