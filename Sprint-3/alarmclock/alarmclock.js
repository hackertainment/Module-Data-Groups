function showAlarm(second) {
  let minstr = Math.floor(second/60).toString().padStart(2, "0");
  let secstr = (second%60).toString().padStart(2, "0");    
  document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${minstr}:${secstr}`;
  if (second<=0) {
    playAlarm();
    clearInterval(timer);
  }
}

function setAlarm() {
  second = document.getElementById("alarmSet").value;
  showAlarm(second)
  timer = setInterval(function () {
    second--;
    showAlarm(second);
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
