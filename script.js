var [ milseconds, seconds, minutes, hours ] = [0,0,0,0];
var display = document.querySelector('.display')
var stopwatch = null;

const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')

start.addEventListener('click', () => {
    if(stopwatch!==null){
        clearInterval(stopwatch)
    }
    stopwatch = setInterval(startButton, 10);
})

pause.addEventListener('click', () => {
    clearInterval(stopwatch)
})

reset.addEventListener('click', () => {
    [ seconds, minutes, hours ] = [0, 0, 0]
    document.querySelector('.display').innerHTML = '00 : 00 : 00 : 00'
    clearInterval(stopwatch)
})

function startButton(){
    milseconds+=1
    if (milseconds == 100) {
        milseconds = 0
        seconds++

        if(seconds == 60){
            seconds = 0
            minutes++
    
            if(minutes == 60){
                minutes = 0
                hours++
            }
        }
    }

    var h = hours < 10 ? "0" + hours : hours
    var m = minutes < 10 ? "0" + minutes : minutes
    var s = seconds < 10 ? "0" + seconds : seconds
    var ms = milseconds < 10 ? "0" + milseconds : milseconds

    display.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`
}
