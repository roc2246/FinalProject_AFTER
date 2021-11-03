//Buttons
var subBttn = document.getElementById("submit");
var srQBttn = document.getElementById("startresq");

//Text
var qLeftDis = document.getElementById("qR");
var qDisplay = document.getElementById("question");

//Textbox
var answInput = document.getElementById("answer");

//Main Content
var quizArea = document.getElementById("content");

//Disables submit button before questions load
subBttn.disabled = true;

//Replaces the "Start the Quiz" button with the "Reload Quiz" button
function resetBttn() {
  srQBttn.setAttribute("value", "Reload Quiz");
  srQBttn.setAttribute("onclick", "location.reload()");
  quizArea.insertBefore(srQBttn, document.getElementById("script"));
}

//Loads the questions from the XML file
function getQuestions() {
  qDisplay.firstChild.nodeValue="please wait...";
  loadXML("questions.xml");
  subBttn.removeAttribute("disabled");
  qLeftDis.innerHTML = "<b>Questions Remaining:</b> " + qLeft;
  resetBttn();
}

//Tracks Current Question Number
var qNo = 0;

//Displays the next question
function nextQuestion() {
  var questions = xhttp.responseXML.getElementsByTagName("q");
  if (qNo < questions.length) {
    var currentQ = questions[qNo].firstChild.nodeValue;
    qDisplay.firstChild.nodeValue = currentQ;
    answInput.focus();
  } else {
    qDisplay.firstChild.nodeValue="Click 'Reload Quiz' to reset the quiz data!";
    endOfQuiz();
    }
}

//Stores correct answers
var answCorrect = [];

//Checks the user's answer
function checkAnswer() {
  var answers = xhttp.responseXML.getElementsByTagName("a");
  var currAnswer = answers[qNo].firstChild.nodeValue;
  if (currAnswer == answInput.value) {
    alert("Correct!");
    answCorrect.push(answInput.value);
  }
  else {
    alert("Incorrect. The correct answer is: " + currAnswer);
  }
  qNo = qNo + 1;
  answInput.value="";
  nextQuestion();
  displayQLeft();
}

//Stores the number of questions left
var qLeft = 4;

//Displays number of questions remaining
function displayQLeft() {
  while (qLeft <= 4) {
    qLeft = qLeft - 1;
    qLeftDis.innerHTML = "<b>Questions Remaining:</b> " + qLeft;
    if (qLeft == 0) {
        qLeftDis.remove();
       }
    break;
  }
}

//Events that trigger once quiz is over
function endOfQuiz() {
  subBttn.disabled = true;
  displayResults();
}

//Calculates user's score
function score () {
  return (answCorrect.length / 4)*100 + "%";
}

//Displays Quiz Results
function displayResults () {
  //Creates heading for results
  var resultsHead = document.createElement("h2");
  quizArea.insertBefore(resultsHead, document.getElementById("script"));
  resultsHead.innerHTML = "Results";

  //Creates details for results
  var results = document.createElement("div");
  quizArea.insertBefore(results, document.getElementById("script"));
  results.setAttribute("id", "quizResults");
  results.innerHTML =
    "<span class='details'>Answers Correct:</span> " +
    answCorrect.length +
    "<br><span class='details'>Number of Questions:</span> " + "4" + 
	"<br>" +
    "<span class='details'>Score:</span> " + score(); +
    "</div>";
}

/*Note: I realize that the value of "document.getElementById("script")" is null.
The reason I have it in my JS code is to make certain elements appear and rearrange
when needed.*/