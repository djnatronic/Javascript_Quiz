var timeEl = document.querySelector("#Timer");
var highscoreEl = document.querySelector("#HighScore");
var headerEl = document.querySelector("#header");
var textEl = document.querySelector("#TextArea");
var secondsLeft = 20;

const questionsAnswers = [
    {Question: "Commonly used Data types DO NOT include:",
     Answer1: "1. Strings",
     Answer2: "2. Booleans",
     Answer3: "3. Alerts",
     Answer4: "4. Floats"
    },
    {Question: "The condition in an if/else statement is enclosed within ____.",
    Answer1: "1. Quotes",
    Answer2: "2. Curly Brakcets",
    Answer3: "3. Parentheses",
    Answer4: "4. Square Brackets"
    },
    {Question: "Arrays in JavaScript can be used to store",
    Answer1: "1. Numbers and Strings",
    Answer2: "2. Arrays",
    Answer3: "3. Booleans",
    Answer4: "4. All of the Above"
    },
    {Question: "String values must be enclosed within ____ when being assigned to variables",
    Answer1: "1. Commas",
    Answer2: "2. Curly Brackets",
    Answer3: "3. Quotes",
    Answer4: "4. Parentheses"
    },
    {Question: "A very userful tool used during development and debugging for printing content to the debugger is:",
    Answer1: "1. JavaScript",
    Answer2: "2. terminal/bash",
    Answer3: "3. for loops",
    Answer4: "4. console.log"
    },


];
                      
 

highscoreEl.textContent = "View High Scores"
headerEl.textContent = "Test Test Test"
//document.getElementById("HighScore").style.marginRight = "50px";

function QuizBody() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft ;
      
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        headerEl.textContent = "Times Up!"
        return;
      }
  
    }, 1000);

}

function startQuiz(){
  headerEl.textContent = "Coding Quiz Challenge";
  textEl.textContent = "Try to Anser the following code-related questions within the time limit.  Keep in mind that incorrect answeres will penalize your score time by ten seconds!";
  button1.textContent = "Start Quiz"
  document.getElementById('button1').setAttribute('onclick','QuizBody()')
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  button5.style.display = "none";
  
}


function hideElement() {
  var x = document.getElementById("button2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


startQuiz()









