/* eslint-disable no-useless-concat */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-alert */
/* eslint-disable prefer-template */
// Buttons
const subBttn = document.getElementById('submit');
const srQBttn = document.getElementById('startresq');

// Text
const qLeftDis = document.getElementById('qR');
const qDisplay = document.getElementById('question');

// Textbox
const answInput = document.getElementById('answer');

// Main Content
const quizArea = document.getElementById('content');

// Stores the number of questions left
let qLeft = 4;

// Disables submit button before questions load
subBttn.disabled = true;

// Replaces the "Start the Quiz" button with the "Reload Quiz" button
function resetBttn() {
  srQBttn.setAttribute('value', 'Reload Quiz');
  srQBttn.setAttribute('onclick', 'location.reload()');
  quizArea.insertBefore(srQBttn, document.getElementById('script'));
}

// Loads the questions from the XML file
// eslint-disable-next-line no-unused-vars
function getQuestions() {
  qDisplay.firstChild.nodeValue = 'please wait...';
  // eslint-disable-next-line no-undef
  loadXML('questions.xml');
  subBttn.removeAttribute('disabled');
  qLeftDis.innerHTML = '<b>Questions Remaining:</b> ' + qLeft;
  resetBttn();
}

// Tracks Current Question Number
let qNo = 0;

// Stores correct answers
const answCorrect = [];

// Calculates user's score
function score() {
  return (answCorrect.length / 4) * 100 + '%';
}

// Displays Quiz Results
function displayResults() {
  // Creates heading for results
  const resultsHead = document.createElement('h2');
  quizArea.insertBefore(resultsHead, document.getElementById('script'));
  resultsHead.innerHTML = 'Results';

  // Creates details for results
  const results = document.createElement('div');
  quizArea.insertBefore(results, document.getElementById('script'));
  results.setAttribute('id', 'quizResults');
  results.innerHTML = "<span class='details'>Answers Correct:</span> "
    + answCorrect.length
    + "<br><span class='details'>Number of Questions:</span> " + '4'
    + '<br>'
    + "<span class='details'>Score:</span> " + score() + '</div>';
}

// Events that trigger once quiz is over
function endOfQuiz() {
  subBttn.disabled = true;
  displayResults();
}

// Displays the next question
function nextQuestion() {
  // eslint-disable-next-line no-undef
  const questions = xhttp.responseXML.getElementsByTagName('q');
  if (qNo < questions.length) {
    const currentQ = questions[qNo].firstChild.nodeValue;
    qDisplay.firstChild.nodeValue = currentQ;
    answInput.focus();
  } else {
    qDisplay.firstChild.nodeValue = "Click 'Reload Quiz' to reset the quiz data!";
    endOfQuiz();
  }
}

// Displays number of questions remaining
function displayQLeft() {
  while (qLeft <= 4) {
    qLeft -= 1;
    qLeftDis.innerHTML = '<b>Questions Remaining:</b> ' + qLeft;
    if (qLeft === 0) {
      qLeftDis.remove();
    }
    break;
  }
}

// Checks the user's answer
// eslint-disable-next-line no-unused-vars
function checkAnswer() {
  // eslint-disable-next-line no-undef
  const answers = xhttp.responseXML.getElementsByTagName('a');
  const currAnswer = answers[qNo].firstChild.nodeValue;
  if (currAnswer === answInput.value) {
    alert('Correct!');
    answCorrect.push(answInput.value);
  } else {
    alert('Incorrect. The correct answer is: ' + currAnswer);
  }
  qNo += 1;
  answInput.value = '';
  nextQuestion();
  displayQLeft();
}

/* Note: I realize that the value of "document.getElementById("script")" is null.
The reason I have it in my JS code is to make certain elements appear and rearrange
when needed. */
