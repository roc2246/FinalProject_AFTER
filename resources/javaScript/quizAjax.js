//Tracks the request
var xhttp;

//Loads questions for the quiz
function loadXML(fileName) {
  //Checks browser support for XMLHttpRequest
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = trackResponse;
  xhttp.open("GET", "resources/xml/" + fileName, true);
  xhttp.send();
}

//Waits for a server response, then calls a function
function trackResponse() {
    //Keeps the 'Failed Request' message from displaying during the request
    if (xhttp.readyState !=4){
        return;
    }
    if (xhttp.status==200 && xhttp.readyState ==4) {
        nextQuestion(); //Taken from quiz.js
    } else {
        alert("Failed Request: " + xhttp.statusText);
    }
  }

