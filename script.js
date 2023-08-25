const inactiveWarning = 3;

const incrementTimer = () => {
    inactiveTimer++
    console.log(inactiveTimer) // DEBUG
}
const clearTimer = () => {
    prevTimer = inactiveTimer;
    inactiveTimer = 0
    if(tabInterval){
        window.clearInterval(tabInterval)
    }
    if(prevTimer >= inactiveWarning)
    alert(`This tab was inactive for ${prevTimer} seconds`);
}

var inactiveTimer = 0;
let prevTimer = 0;
var tabInterval;

document.addEventListener("visibilitychange", () => {
    console.log(document.visibilityState); // DEBUG
    if(document.hidden){
        tabInterval = window.setInterval(() => incrementTimer(), 1000)
    }
    else {
        clearTimer()
    }
});