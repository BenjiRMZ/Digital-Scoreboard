let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


let scoreHome = 0
let scoreGuest = 0

homeScore.innerText = 0
guestScore.innerText = 0


function homeIncrementOne() {
    if(scoreHome != 999 && scoreHome < 999)
    {
          scoreHome += 1
          homeScore.innerText = scoreHome
    }
}


function homeIncrementTwo() {
  if(scoreHome != 999 && scoreHome < 999)
  {
    scoreHome += 2
    homeScore.innerText = scoreHome
  }
}

function homeIncrementThree() {
  if(scoreHome != 999 && scoreHome < 999)
  {
    scoreHome += 3
    homeScore.innerText = scoreHome
  }
}

function guestIncrementOne() {
  if(scoreGuest != 999 && scoreGuest < 999)
  {
    scoreGuest += 1
    guestScore.innerText = scoreGuest
  }
}


function guestIncrementTwo() {
  if(scoreGuest != 999 && scoreGuest < 999)
  {
    scoreGuest += 2
    guestScore.innerText = scoreGuest
  }
}

function guestIncrementThree() {
  if(scoreGuest != 999 && scoreGuest < 999)
  {
    scoreGuest += 3
    guestScore.innerText = scoreGuest
  }
}

function restartGame()
{
    scoreGuest = 0;
    scoreHome = 0;
    guestScore.innerText = scoreGuest
    homeScore.innerText = scoreHome
    countdown = 120;
    clearInterval(timer);
}


    let countdown = 120; // 2 minutes
    let timerInterval;
    let currentQuarter = 1;

    function startCountdown()
    {
        if(!timerInterval)
        {
            timerInterval = setInterval(() => 
            {
                if(countdown > 0)
                {
                    countdown--;
                    updateCountDown();
                }
                else 
                {
                    pauseTimer();
                    alert("Quarter Ended!");
                }
            }, 1000);
        }
        
    }

function pauseTimer()
{
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer()
{
    pauseTimer();
    countdown = 120;
    updateCountDown();
}


    function updateCountDown()
    {
      let minutes = Math.floor(countdown/60)
      let seconds = countdown % 60;
    
      if(seconds < 10)
      {
        seconds = "0" + seconds;
      }
    
      document.getElementById("timer").textContent = minutes + ":" + seconds;
    }


function nextQuarter() {
    if (currentQuarter < 4) {
        currentQuarter++;
        resetTimer();
         updateCountDown();
    } else {
        alert("Game Over!");
    }
}

function updateQuarterDisplay() {
    document.getElementById('quarter').textContent = currentQuarter;
}

