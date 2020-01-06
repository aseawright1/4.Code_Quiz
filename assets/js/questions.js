// create timer
var timeLeft = document.querySelector(".timer");

// set time limit
var secondsLeft = 5; // instead, say something like 15seconds*number of questions in array = time limit

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft + " seconds remaining";

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      timeLeft.textContent = "Time's up!";
    }
  },1000);
}

// function timeUp() {
//   timeLeft.textContent = "Time's up!";

// //   var imgEl = document.createElement("img");

// //   imgEl.setAttribute("src", "images/image_1.jpg");
// //   mainEl.appendChild(imgEl);

// }

//setTime(); // end create timer