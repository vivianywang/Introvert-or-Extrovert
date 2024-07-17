var result = document.getElementById("result");

var introverted = 0;
var extroverted = 0;

var questionCount = 0;

var restartButton = document.getElementById("restart");
restartButton.addEventListener("click", restart);

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", extrovert);
q1a2.addEventListener("click", introvert);

q2a1.addEventListener("click", extrovert);
q2a2.addEventListener("click", introvert);

q3a1.addEventListener("click", introvert);
q3a2.addEventListener("click", extrovert);



function extrovert(){
  extroverted += 1;
  questionCount +=1;

  console.log("questionCount = " + questionCount + " extroverted = " + extroverted);

  if (questionCount == 3){
    console.log("The Quiz is Done!");
    updateResult();
  }
}

function introvert(){
  introverted += 1;
  questionCount +=1;

  console.log("questionCount = " + questionCount + " introverted = " + introverted);

  if (questionCount == 3){
    console.log("The Quiz is Done!");
    updateResult();
  }
}

function updateResult(){
  if (introverted >= 2){
    console.log("You are introverted!");
    result.innerHTML = "You are an introvert!"
  } else if (extroverted >= 2){
    console.log("You are extroverted!");
    result.innerHTML = "You are an extrovert!"
  }
}

function restart(){
  introverted = 0;
  extroverted = 0;
  questionCount = 0;
  result.innerHTML = "Your result is...";
}