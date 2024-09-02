/**
 * Digital Basketball Scoreboard
 * 
 * This script manages a digital basketball scoreboard, allowing users to track
 * scores for both the home and away teams. It includes functions to increment
 * scores by 1, 2, or 3 points, as well as to reset the game, manage game quarters,
 * and control a countdown timer. Users can start, pause, and reset the timer, 
 * with visual updates reflected on the scoreboard interface.
 * @author BenjiRMZ
 * @version 1.0
 */

// Initialisierung der Score-Elemente und Variablen
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let scoreHome = 0;
let scoreGuest = 0;

homeScore.innerText = 0;
guestScore.innerText = 0;

/*
* Function to increment the home team's score by 1 point
*/
function homeIncrementOne() {
  if (scoreHome != 999 && scoreHome < 999) {
    scoreHome += 1;
    homeScore.innerText = scoreHome;
  }
}

/*
* Function to increment the home team's score by 2 point
*/
function homeIncrementTwo() {
  if (scoreHome != 999 && scoreHome < 999) {
    scoreHome += 2;
    homeScore.innerText = scoreHome;
  }
}

/*
* Function to increment the home team's score by 3 point
*/
function homeIncrementThree() {
  if (scoreHome != 999 && scoreHome < 999) {
    scoreHome += 3;
    homeScore.innerText = scoreHome;
  }
}

/*
* Function to increment the away team's score by 3 points
*/
function guestIncrementOne() {
  if (scoreGuest != 999 && scoreGuest < 999) {
    scoreGuest += 1;
    guestScore.innerText = scoreGuest;
  }
}

/*
* Function to increment the away team's score by 2 points
*/
function guestIncrementTwo() {
  if (scoreGuest != 999 && scoreGuest < 999) {
    scoreGuest += 2;
    guestScore.innerText = scoreGuest;
  }
}

/*
* Function to increment the away team's score by 3 points
*/
function guestIncrementThree() {
  if (scoreGuest != 999 && scoreGuest < 999) {
    scoreGuest += 3;
    guestScore.innerText = scoreGuest;
  }
}

/*
* Function to restart the game by resetting scores, quarter, and timer
*/
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

/*
* Function to start the countdown timer for the current quarter
*/
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

/*
* Function to reset the countdown timer to 2 minutes
*/
function resetTimer() {
  pauseTimer();
  countdown = 120;
  updateCountDown();
}

/*
* Function to pause the countdown timer
*/
function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

/*
* Function to update the countdown display on the scoreboard
*/
function updateCountDown() {
  let minutes = Math.floor(countdown / 60);
  let seconds = countdown % 60;
  //document.getElementById("timer").textContent = minutes + ":" + seconds;
  document.getElementById("timer").textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

/*
* Function to advance to the next quarter and reset the timer
*/
function nextQuarter() {
  if (currentQuarter < 4) {
    currentQuarter++;
    resetTimer();
    updateQuarterDisplay();
  } else {
    alert("Game Over!");
  }
}

/*
* Function to update the quarter display on the scoreboard
*/
function updateQuarterDisplay() {
  document.getElementById("quarter").textContent = currentQuarter;
}

