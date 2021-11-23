/* eslint-disable vars-on-top */
/* eslint-disable no-restricted-syntax */
/* eslint-disable space-infix-ops */
/* eslint-disable guard-for-in */
/* eslint-disable prefer-template */
/* eslint-disable default-case */
// Creates a <source> tag so the Movie of the Week will display
const motwTag = document.createElement('source');
document.getElementById('video').appendChild(motwTag);
motwTag.setAttribute('id', 'movieWeekly');

// Defines Movie Details and Parameters
class Movie {
  constructor(Title, Year, Source) {
    this.Title = Title;
    this.Year = Year;
    this.Source = Source;
  }

  static URL(url, type) {
    document.getElementById('movieWeekly').setAttribute = ('type', 'video/' + type);
    document.getElementById('movieWeekly').src = 'MOTW/MOTW_movies/' + url;
    document.getElementById('video').load();
  }
}

// Objects to track movie details
const HHH = new Movie(
  'The Hard, Hungry, and The Homeless',
  1992,
  'McEntire, Mike, director. The Hard, Hungry, and The Homeless. Mack Dawg Productions, 1992.',
);

const DWP = new Movie(
  'Down with People',
  2008,
  'McEntire, Mike, director. The Hard, Hungry, and The Homeless. Mack Dawg Productions, 2008.',
);

const HALS = new Movie(
  'Horgasm - A Love Story',
  2012,
  'Froystad, Tobias, director. Horgasm - A Love Story. Expect Films, 2012.',
);

const FOAE = new Movie(
  "Forum or Against'em",
  2008,
  "Pettit, Jeremy, director. Forum or Against'em. Forum Snowboards, 2008.",
);

// Stores "moviedescription" element
const factCat = document.getElementsByClassName('moviedescription');

// Loads the movie of the week
function setMovie(movie, url, type) {
  let i;
  for (i in movie) {
    factCat[0].innerHTML += "<ul><li><span class ='details'>" + i +':</span> ' + movie[i] + '</li>';
  }
  Movie.URL(url, type);
}

// Assigns the Movie of the Week
const week = new Date().getDate();
switch (true) {
  case (week <= 7):
    setMovie(HHH, 'the_hard_the_hungry_and_the_homeless.mp4', 'mp4');
    break;
  case (week <= 14):
    setMovie(DWP, 'down_with_people.mp4', 'mp4');
    break;
  case (week <= 21):
    setMovie(HALS, 'horgasm_a_love_story.mp4', 'mp4');
    break;
  case (week <= 28):
    setMovie(FOAE, 'forum_or_againstem.webm', 'webm');
    break;
  case (week <= 31):
    document.getElementById('movieWeekly').remove();
    document.getElementById('video').remove();

    // Creates "New Movie Coming Soon!" message
    // eslint-disable-next-line no-var
    var comingSoon = document.createElement('p');
    document.getElementById('movie').insertBefore(comingSoon, factCat[0]);
    comingSoon.innerHTML = 'New Movie Coming Soon!';

    // Styles "New Movie Coming Soon!" message
    comingSoon.style.textAlign = 'center';
    comingSoon.style.fontSize = 'x-large';
    comingSoon.style.color = '#190000';

    // Creates message below "New Movie Coming Soon!"
    factCat[0].innerHTML = 'Check back later';
    factCat[0].style.textAlign = 'center';
    break;
}
