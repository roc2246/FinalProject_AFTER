/* eslint-disable prefer-template */
/* eslint-disable no-alert */
// Tracks the request
let xhttp;

// Waits for a server response, then calls a function
function trackResponse() {
  // Keeps the 'Failed Request' message from displaying during the request
  if (xhttp.readyState !== 4) {
    return;
  }
  if (xhttp.status === 200 && xhttp.readyState === 4) {
    // eslint-disable-next-line no-undef
    nextQuestion(); // Taken from quiz.js
  } else {
    alert('Failed Request: ' + xhttp.statusText);
  }
}

// Loads questions for the quiz
// eslint-disable-next-line no-unused-vars
function loadXML(fileName) {
  // Checks browser support for XMLHttpRequest
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {
    // eslint-disable-next-line no-undef
    xhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xhttp.onreadystatechange = trackResponse;
  xhttp.open('GET', 'resources/xml/' + fileName, true);
  xhttp.send();
}
