// Initialisierung der Score-Elemente und Variablen
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let scoreHome = 0;
let scoreGuest = 0;

homeScore.innerText = 0;
guestScore.innerText = 0;

// Funktionen zur Inkrementierung der Home-Score
function homeIncrementOne() {
  if (scoreHome != 999 && scoreHome < 999) {
    scoreHome += 1;
    homeScore.innerText = scoreHome;
  }
}

function homeIncrementTwo() {
  if (scoreHome != 999 && scoreHome < 999) {
    scoreHome += 2;
    homeScore.innerText = scoreHome;
  }
}

function homeIncrementThree() {
  if (scoreHome != 999 && scoreHome < 999) {
    scoreHome += 3;
    homeScore.innerText = scoreHome;
  }
}

// Funktionen zur Inkrementierung der Guest-Score
function guestIncrementOne() {
  if (scoreGuest != 999 && scoreGuest < 999) {
    scoreGuest += 1;
    guestScore.innerText = scoreGuest;
  }
}

function guestIncrementTwo() {
  if (scoreGuest != 999 && scoreGuest < 999) {
    scoreGuest += 2;
    guestScore.innerText = scoreGuest;
  }
}

function guestIncrementThree() {
  if (scoreGuest != 999 && scoreGuest < 999) {
    scoreGuest += 3;
    guestScore.innerText = scoreGuest;
  }
}

// Funktion zum Neustart des Spiels
function restartGame() {
  scoreGuest = 0;
  scoreHome = 0;
  currentQuarter = 0;
  updateQuarterDisplay();
  guestScore.innerText = scoreGuest;
  homeScore.innerText = scoreHome;
  pauseTimer();
  countdown = 120;
  updateCountDown();
}

// Timer- und Quarter-Funktionen
let countdown = 120; // 2 minutes
let timerInterval;
let currentQuarter = 1;

function startCountdown() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (countdown > 0) {
        countdown--;
        updateCountDown();
      } else {
        pauseTimer();
        alert("Quarter Ended!");
      }
    }, 1000);
  }
}

function resetTimer() {
  pauseTimer();
  countdown = 120;
  updateCountDown();
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function updateCountDown() {
  let minutes = Math.floor(countdown / 60);
  let seconds = countdown % 60;

  //document.getElementById("timer").textContent = minutes + ":" + seconds;
  document.getElementById("timer").textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function nextQuarter() {
  if (currentQuarter < 4) {
    currentQuarter++;
    resetTimer();
    updateQuarterDisplay();
  } else {
    alert("Game Over!");
  }
}

function updateQuarterDisplay() {
  document.getElementById("quarter").textContent = currentQuarter;
}

