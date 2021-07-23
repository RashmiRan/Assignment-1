const displayResult = document.getElementById("display");
let hr = 0;
let min = 0;
let sec = 0;
let flag = true;

setInterval("stopwatchCycle()", 1000);

function start() {
  if (flag == true) {
    flag = false;
    stopwatchCycle();
  }
}
function stop() {
  if (flag == false) {
    flag = true;
  }
}

function reset() {
  displayResult.innerHTML = "00:00:00";
  hr = 0;
  sec = 0;
  min = 0;
}

function stopwatchCycle() {
  if (flag == false) {
    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    displayResult.innerHTML = hr + ":" + min + ":" + sec;
  }
}
