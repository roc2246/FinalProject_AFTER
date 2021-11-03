//Tracks the request
var xmlhttp;

//Checks if XMLHttpRequest is compatible with the browser
function compatibility() {
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
}

//Load Stats and Prices for each Resort Page
function loadPSDoc(fileName) {
  compatibility();
  xmlhttp.onreadystatechange = function() {
    trackResponse(setPS);
  };
  xmlhttp.open("GET", "resources/xml/" + fileName, true);
  xmlhttp.send();
}

//Load Restaurants and Hotels for each Resort Page
function loadRHDoc(fileName) {
  compatibility();
  xmlhttp.onreadystatechange = function() {
      trackResponse(setRH);
  };
  xmlhttp.open("GET", "resources/xml/" + fileName, true);
  xmlhttp.send();
}

//Sets the Data from Price and Statistics docs
function setPS() {
  document.getElementById("bitsofinfo").innerHTML = " ";
  var i;
  var xmlDoc = xmlhttp.responseXML;
  var x = xmlDoc.getElementsByTagName("category");
  for (i = 0; i < x.length; i++) {
      document.getElementById("bitsofinfo").innerHTML +=
        "<span class = 'details'>"+
        x[i].getElementsByTagName("cat")[0].childNodes[0].nodeValue +
        "</span> " +
        x[i].getElementsByTagName("data")[0].childNodes[0].nodeValue +
        "<br>";
      }
}

//Sets the Data from Restaurant and Hotel Docs
function setRH() {
  document.getElementById("bitsofinfo").innerHTML = " ";
  var i;
  var xmlDoc = xmlhttp.responseXML;
  var x = xmlDoc.getElementsByTagName("location");
  for (i = 0; i < x.length; i++) {
      document.getElementById("bitsofinfo").innerHTML +=
        "<a href=" + 
        x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue +
        " target = '_blank'>" +
        "<span class = 'details'>" +
        x[i].getElementsByTagName("place")[0].childNodes[0].nodeValue +
        "</span></a><br>";
      }
}

//Waits for a server response, then calls a function
function trackResponse(functName) {
    //Keeps the 'Failed Request' message from displaying during the request
    if (xmlhttp.readyState !=4){
        return;
    }
    if (xmlhttp.status==200 && xmlhttp.readyState ==4) {
        functName();
    } else {
        alert("Failed Request: " + xmlhttp.statusText);
    }
  }

