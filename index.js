let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


let scoreHome = 0
let scoreGuest = 0

homeScore.innerText = 0
guestScore.innerText = 0


function homeIncrementOne() {
    scoreHome += 1
    homeScore.innerText = scoreHome
}


function homeIncrementTwo() {
    scoreHome += 2
    homeScore.innerText = scoreHome
}

function homeIncrementThree() {
    scoreHome += 3
    homeScore.innerText = scoreHome
}

function guestIncrementOne() {
    scoreGuest += 1
    guestScore.innerText = scoreGuest
}


function guestIncrementTwo() {
    scoreGuest += 2
    guestScore.innerText = scoreGuest
}

function guestIncrementThree() {
    scoreGuest += 3
    guestScore.innerText = scoreGuest
}

function restartGame()
{
    scoreGuest = 0;
    scoreHome = 0;
    guestScore.innerText = scoreGuest
    homeScore.innerText = scoreHome
    countdown = 120;
}
    // my JS code 
    let countdown = 120; // 2 minutes
                    
    function updateCountDown()
    {
      let minutes = Math.floor(countdown/60)
      let seconds = countdown % 60;
    
      if(seconds < 10)
      {
        seconds = "0" + seconds;
      }
    
      document.getElementById("timer").textContent = minutes + ":" + seconds;
      countdown--;
      if(countdown < 0)
      {
        clearInterval(timer);
        document.getElementById("timer").textContent = "Over!";
      }
    }
    
    
    function startCountdown()
    {
      timer = setInterval(updateCountDown, 1000);
    }
