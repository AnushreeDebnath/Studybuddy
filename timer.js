let timer;
let defaultMinutes = 1;
let timeRemaining = defaultMinutes * 60;

// ✅ Sounds
const tickSound = new Audio("https://actions.google.com/sounds/v1/alarms/clock_ticking.ogg");
tickSound.volume = 0.9;
tickSound.preload = 'auto';

const alarmSound = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
alarmSound.volume = 0.8;
alarmSound.preload = 'auto';

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  document.getElementById("timer").innerText =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    // ✅ Countdown ticking for last 10 seconds
    if (timeRemaining <= 10 && timeRemaining > 0) {
      const tickClone = tickSound.cloneNode(); // clone to allow overlapping
      tickClone.play().catch((err) => {
        console.warn("Tick sound failed:", err);
      });
    }

    if (timeRemaining <= 0) {
      clearInterval(timer);
      timer = null;

      // ✅ Play alarm sound
      alarmSound.play().catch((err) => {
        console.warn("Alarm sound failed:", err);
      });

      alert("⏰ Time's up!");

      if (defaultMinutes > 0) {
        fetch("http://127.0.0.1:3001/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            duration: defaultMinutes,
            completedAt: new Date().toISOString(),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("✅ Session saved:", data);
          })
          .catch((err) => {
            console.error("❌ Error saving session:", err);
          });
      }

      timeRemaining = defaultMinutes * 60;
      updateTimerDisplay();
    }
  }, 1000);
}


function stopTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    console.log("⏹️ Timer stopped.");
  }
}

function resetTimer() {
  stopTimer();
  timeRemaining = defaultMinutes * 60;
  updateTimerDisplay();
}

// Optional: Change default timer (in minutes)
function setTimer(minutes) {
  defaultMinutes = minutes;
  resetTimer();
}

// ✅ Hook buttons from HTML (if using IDs)
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

// ✅ Initial display
updateTimerDisplay();


