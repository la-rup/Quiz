// keep track of questions answered
var questionCount = 0;

// keep track of left scores
var leftScore = 0;

// keep track of right scores
var rightScore = 0;

// restart button variable
var restart = document.getElementById("restart");

// extra button to show result
var show = document.getElementById("show");

// results
var result = document.getElementById("result");

// get Q1 A1
var q1a1 = document.getElementById("q1a1");

// get Q1 A2
var q1a2 = document.getElementById("q1a2");

// get Q2 A1
var q2a1 = document.getElementById("q2a1");

// get Q2 A2
var q2a2 = document.getElementById("q2a2");

// get Q3 A1
var q3a1 = document.getElementById("q3a1");

// get Q3 A2
var q3a2 = document.getElementById("q3a2");

// Event Listeners
q1a1.addEventListener("click", pointToLeft);
q1a2.addEventListener("click", pointToRight);
q2a1.addEventListener("click", pointToLeft);
q2a2.addEventListener("click", pointToRight);
q3a1.addEventListener("click", pointToRight);
q3a2.addEventListener("click", pointToLeft);

restart.addEventListener("click", restartNow);

// function to add score to left
function pointToLeft (){
  leftScore++;
  questionCount++;
  console.log("Left Score: " + leftScore + " Question Count: " + questionCount);

  // quiz results
  if (questionCount == 3) {
  console.log("The quiz is done.");
    updateResult (); 
  }
  

}

//function to add score to right
function pointToRight (){
  rightScore++;
  questionCount++;
  console.log("Right Score: " + rightScore + " Question Count: " + questionCount);

  //quiz results
  if (questionCount == 3) {
  console.log("The quiz is done.");
    updateResult ();
  }
}

show.addEventListener("click", displayResult);

//Conditional statements
// restart button function
function restartNow (){
  leftScore = 0;
  rightScore = 0;
  questionCount = 0;
  result.innerHTML = "You Are... ";
  console.log("Left Score: " + leftScore + " Right Score: " + rightScore + " Question Count: " + questionCount);
}

// results function
function displayResult (){
  if (leftScore >= 2){
  result.innerHTML = "Left Brain Dominant!";
  console.log("You Are Left Brain Dominant");
  } else if (rightScore >= 2){
  result.innerHTML = "Right Brain Dominant!";
  console.log("You Are Right Brain Dominant");
  }

}
