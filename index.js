const currentDayOfTheWeek = document.getElementById('currentDayOfTheWeek');

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = days[d.getDay()];

currentDayOfTheWeek.innerHTML = day;
                  

// Current UTC Time
function updateCurrentTime() {

    const currentUTCTimeElement = document.getElementById('currentUTCTime');
    const currentUTCTime = Date.now();

    currentUTCTimeElement.innerHTML = currentUTCTime.toString();

}

updateCurrentTime()
setInterval(updateCurrentTime, 100);