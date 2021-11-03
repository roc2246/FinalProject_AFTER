//Creates a <source> tag so the Movie of the Week will display
var motwTag = document.createElement("source");
document.getElementById("video").appendChild(motwTag);
motwTag.setAttribute("id", "movieWeekly");

//Defines Movie Details and Parameters
class movie {
  constructor(Title, Year, Source){
    this.Title = Title;
    this.Year = Year;
    this.Source = Source;
  }
  URL(url, type) {
    document.getElementById("movieWeekly").setAttribute = ("type", "video/" + type);
    document.getElementById("movieWeekly").src = "MOTW/" + url;
    document.getElementById("video").load();
  }
}

//Objects to track movie details
let HHH = new movie(
  "The Hard, Hungry, and The Homeless",
  1992,
  "McEntire, Mike, director. The Hard, Hungry, and The Homeless. Mack Dawg Productions, 1992."
);

let DWP = new movie(
  "Down with People",
  2008,
  "McEntire, Mike, director. The Hard, Hungry, and The Homeless. Mack Dawg Productions, 2008."
);

let HALS = new movie(
  "Horgasm - A Love Story",
  2012,
  "Froystad, Tobias, director. Horgasm - A Love Story. Expect Films, 2012."
);

let FOAE = new movie(
  "Forum or Against'em",
  2008,
  "Pettit, Jeremy, director. Forum or Against'em. Forum Snowboards, 2008."
);

//Stores "moviedescription" element
var factCat = document.getElementsByClassName("moviedescription");

//Loads the movie of the week
function setMovie (movie, url, type){
  var i;
  for(i in movie) {  	
    factCat[0].innerHTML +=
    "<ul><li><span class ='details'>" + i +":</span> " + movie[i] + "</li>";
    }
  movie.URL(url, type);
}

//Assigns the Movie of the Week
var week = new Date().getDate();
switch(true){
  case (week <= 7):
    setMovie(HHH, "the_hard_the_hungry_and_the_homeless.mp4", "mp4");
  break;
  case (week <= 14):
    setMovie(DWP, "down_with_people.mp4", "mp4");
  break;
  case (week <= 21):
    setMovie(HALS, "horgasm_a_love_story.mp4", "mp4");
  break;
  case (week <= 28):
    setMovie(FOAE, "forum_or_against'em.webm", "webm");
  break;
  case (week <= 31):
    document.getElementById("movieWeekly").remove();
    document.getElementById("video").remove();

    //Creates "New Movie Coming Soon!" message
    var comingSoon = document.createElement("p");
    document.getElementById("movie").insertBefore(comingSoon, factCat[0]);
    comingSoon.innerHTML = "New Movie Coming Soon!";

    //Styles "New Movie Coming Soon!" message
    comingSoon.style.textAlign = "center";
    comingSoon.style.fontSize = "x-large";
    comingSoon.style.color = "#190000";

    //Creates message below "New Movie Coming Soon!"
    factCat[0].innerHTML = "Check back later";
    factCat[0].style.textAlign = "center";
  break;
}

