// create timer
var timeLeft = document.querySelector(".timer");

// set time limit
var secondsLeft = 30; // instead, say something like 15seconds*number of questions in array = time limit?
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft + " seconds remaining";

        // when time runs out..
        if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        timeLeft.textContent = "Time's up!";
    }
  },1000);
} // end setTime function

// create array of questions/answers
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    }
  ]; //end questions array


// create global variables for question, choices, answers
let currentQuestion = questions[0].question;
let choices = questions[0].choices;
let answer = questions[0].answer;

// display choices as buttons
function displayChoices() {
  for (var i = 0; i < choices.length; i++) {
    var answers = document.createElement("button")
    answers.innerHTML = choices[i]
    document.getElementById("choicesText").appendChild(answers);
  };
}

// clear the screen
function clearText() {
  document.getElementById('headerText').innerHTML = currentQuestion;
  document.getElementById('choicesText').innerHTML = "";
}




    // display question and choices (buttons) in html
    // add on click event to choices that moves to next question and:
        // compare clicked answer to correct answer
        // display right/wrong
        // if wrong, subtract 10s from timeLeft
    // final question has submit button
        // on click stores timeLeft to local storage
        // displays end page

// function timeUp() {
//   timeLeft.textContent = "Time's up!";

// //   var imgEl = document.createElement("img");

// //   imgEl.setAttribute("src", "images/image_1.jpg");
// //   mainEl.appendChild(imgEl);

// }