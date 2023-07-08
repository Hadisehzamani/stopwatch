var timer = document.querySelector('.timer')
var laps = document.querySelector('.laps')
var startBtn = document.querySelector('.start')
var stopBtn = document.querySelector('.stop')
var restart = document.querySelector('.restart')
var lapBtn = document.querySelector('.lap')
var int;
var isRunning = false;
var msec = 0, sec = 0, min = 0, hour = 0;

function startTimer() {
    if (!isRunning) {
        int = setInterval(function() {
            msec += 10;
            if (msec == 1000) {
                msec = 0;
                sec++;
                if (sec == 60) {
                    sec = 0;
                    min++;
                    if (min == 60) {
                        min = 0;
                        hour++;
                    }
                }
            }
            var h = hour < 10 ? "0" + hour : hour;
            var m = min < 10 ? "0" + min : min;
            var s = sec < 10 ? "0" + sec : sec;
            var ms = msec < 10 ? "00" + msec : msec < 100 ? "0" + msec : msec;
            timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
        }, 10);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(int);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    timer.innerHTML = "00 : 00 : 00 : 000";
    laps.innerHTML = ""; 
    isRunning = false;
    laps.style.display = 'none';
}

function lapTimer() {
    if (isRunning) {
        var lapTime = timer.innerHTML;
        var lapItem = document.createElement('div');
        lapItem.classList.add('lap-item');
        lapItem.innerHTML = lapTime;
        laps.appendChild(lapItem);
        laps.style.display = 'block';
    }
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
restart.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);
