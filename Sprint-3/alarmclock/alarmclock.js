let timer = null;

function showAlarm(second) {
  let minstr = Math.floor(second/60).toString().padStart(2, "0");
  let secstr = (second%60).toString().padStart(2, "0");
  document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${minstr}:${secstr}`;
  if (second<=0) {
    clearInterval(timer);
    timer = null;
    playAlarm();
    document.querySelector("body").style.animation = "flash 0.5s cubic-bezier(1,0,0,1) 42";
    setTimeout(() => {
      document.querySelector("body").removeAttribute("style");
    }, 20000);
  }
}

function setAlarm() {
  second = document.getElementById("alarmSet").value;
  showAlarm(second)
  if (timer==null) {
    timer = setInterval(() => {
      if (second>0) {
        second--;
        showAlarm(second);
      }
    }, 1000);
  }
}

function pauseTimer() {
  if (timer!=null) {
    clearInterval(timer);
    timer = null;
    document.getElementById("pause").innerText = "Continue Timer";
  }
  else {
    document.getElementById("pause").innerText = "Pause Timer";
    [minstr, secstr] = document.getElementById("timeRemaining").innerHTML.slice(16).split(":");
    second = Number(minstr)*60+Number(secstr);
    timer = setInterval(() => {
      if (second>0) {
        second--;
        showAlarm(second);
      }
    }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("pause").addEventListener("click", () => {
    pauseTimer();
  });
});

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
