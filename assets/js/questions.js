$(document).ready(function() {


    // create timer
    var timeLeft = document.querySelector(".timer");
    var timerInterval;
    // set time limit
    var secondsLeft = 75; // instead, say something like 15seconds*number of questions in array = time limit?
    function setTime() {
        timerInterval = setInterval(function() { //assignment
            secondsLeft--;
            timeLeft.textContent = secondsLeft + " seconds remaining";

            // when time runs out..
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                timeLeft.textContent = "Time's up!";
            }
        }, 1000);
    } // end setTime function

    // create array of questions/answers
    var questions = [{
            question: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts"
        }, {
            question: "The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: "parentheses"
        }, {
            question: "Which built-in method combines the text of two strings and returns a new string?",
            choices: ["append()", "concat()", "attach()", "None of the above"],
            answer: "concat()"
        }, {
            question: "What is the HTML tag under which one can write the JavaScript code?",
            choices: ["<javascript>", "<scripted>", "<xxxx>", "<js>"],
            answer: "<xxxx>"
        }, {
            question: "What is the correct syntax for referring to an external script called 'script.js'?",
            choices: ["<xxxx src='script.js'>", "<xxxx href='script.js'>", "<xxxx src='script.js'>", "<xxxx name='script.js'>"],
            answer: "<xxxx src='script.js'>"
        }

    ]; //end questions array


    //hide score form
    let scoreForm = document.getElementById('scoreForm');
    scoreForm.style.visibility = 'hidden';
    let scoreBtn = document.getElementById('submit-btn')

    // create global variables for question, choices, answers

    let questionIndex = 0
    let currentQuestion = questions[0].question;
    let choices = questions[0].choices;
    let answer = questions[0].answer;

    function updateGlobals() {
        currentQuestion = questions[questionIndex].question;
        choices = questions[questionIndex].choices;
        answer = questions[questionIndex].answer;

        displayChoices()
    }

    // display choices as buttons
    function displayChoices() {
        clearText()
        for (var i = 0; i < choices.length; i++) {
            // setup answer choice buttons
            var answers = document.createElement("btn-group-vertical")
            answers.className = "btn btn-light"

            //remove submit button
            scoreBtn.style.visibility = 'hidden';

            // on click events
            answers.innerText = choices[i]
            document.getElementById("choicesText").appendChild(answers);
            answers.addEventListener('click', function(event) {
                event.preventDefault()
                let userAnswer = this.innerText;
                if (userAnswer === answer) {

                } else {
                    secondsLeft = secondsLeft - 10;
                }
                if (questionIndex == questions.length - 1) {
                    gameOver()
                } else {
                    //advance   
                    questionIndex++
                    updateGlobals()
                }
            })
        };
    }

    function gameOver() {
        // stop time
        clearInterval(timerInterval);

        // display game over in 'time remaining' field
        timeLeft.innerText = 'Game over!';

        //pull current clock value as score
        let finalScore = secondsLeft;

        //display the score and input fields
        document.getElementById('headerText').innerHTML = `Your score is ${finalScore}`;
        document.getElementById('choicesText').innerHTML = "";
        scoreForm.style.visibility = 'visible';

        // store score in local storage
        localStorage.setItem('finalScore', JSON.stringify(finalScore));
    }

    // clear the screen
    function clearText() {
        document.getElementById('headerText').innerHTML = currentQuestion;
        document.getElementById('choicesText').innerHTML = "";
        document.getElementsByClassName('btn-primary').innerHTML = "";
    }

    // create on-click event attached to start quiz button
    $('.start-btn').on('click', function(event) {
        event.preventDefault()
        setTime();
        displayChoices();
    });

    // create on-click to store name in local storage
    var finalScoreBtn = document.querySelector('#submit-score');
    finalScoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let name = document.querySelector('#name').value; // insert var name line here
        localStorage.setItem('name', name);
    });

    // create on-click to view highscore
    var highscoreBtn = document.querySelector('.btn-link');
    highscoreBtn.addEventListener('click', function(viewHighscores) {
        if ((secondsLeft === 75) || (gameOver)) {
            viewHighscores.preventDefault();
            document.getElementById('headerText').innerHTML = "";
            document.getElementById('choicesText').innerHTML = `${localStorage.getItem('name')} ...................................... ${localStorage.getItem('finalScore')}`;
            scoreForm.style.visibility = 'hidden';
        } else {}
    })

}); // end document ready