'use strict';

const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Taylor Swift", title: "Cruel Summer", youtubeUrl: "https://www.youtube.com/watch?v=ic8j13piAhQ"
  }
];

//state
let puppyIsShown = false;

const h1Elem = document.querySelector('h1');
const puppyImgElem = document.querySelector('#puppySection img')


//change content
h1Elem.textContent = "Hello DOM";
h1Elem.classList.add('bg-dark', 'p-3');

const hideButton = document.querySelector('#puppySection button');

function renderPuppy(isShown){
  const divElem = document.createElement('div');

  if(isShown){
    const imgElement = document.createElement('img');
    imgElement.src = "img/puppy.jpg";
    imgElement.alt = "a cute puppy";
    divElem.appendChild(imgElement);
    document.querySelector('#imgBox').appendChild(divElem);

    hideButton.textContent = "Hide";
  }
  else {
    hideButton.textContent = "Show";
  }
}

renderPuppy(puppyIsShown);

//interactivity
// puppyImgElem.addEventListener('click', 
//   function(event) {
//     //change attributes
//     puppyImgElem.src = "img/husky.jpg";
//     puppyImgElem.alt - "a cute husky";
//   })



hideButton.addEventListener('click', function(event){
  console.log(event);

  //change the state
  puppyIsShown = !puppyIsShown;
  console.log("puppy now shown:", puppyIsShown);

  //re-render
  document.querySelector('#imgBox').innerHTML = ""; //clear out the old content
  renderPuppy(puppyIsShown); //"refresh" the content

})

//songs!

function createSongLink(songArtist, songTitle, url) {
  const newLiElem = document.createElement('li');
  const newAnchor = document.createElement('a');
  newAnchor.textContent = songArtist + " - " + songTitle;
  newAnchor.href = url;
  newLiElem.appendChild(newAnchor)
  return newLiElem;  
}

function renderSongList(songArray){
  const songListElem = document.querySelector('#dataSection ol');
  for(const songObj of songArray) {
    const songLink = createSongLink(songObj.artist, songObj.title, songObj.youtubeUrl)
    songListElem.appendChild(songLink);
  } 
}

renderSongList(songArray); //render the first time;


const formElem = document.querySelector('#formSection form');

formElem.addEventListener('submit', function(event){
  event.preventDefault();

  /* update the state content */

  //get the form data

  const artistElem = document.querySelector('#artistInput');
  const titleElem = document.querySelector('#titleInput');
  const youtubeElem = document.querySelector('#urlInput');

  const dropdownElem = document.querySelector('#dropdown');

  const artist = artistElem.value;
  const title = titleElem.value;
  const youtube = youtubeElem.value;

  const dropdownString = dropdownElem.value;
  console.log(dropdownString);

  const newSongObj = {
    artist: artist,
    title: title,
    youtubeUrl: youtube
  }
  songArray.push(newSongObj);

  //re-render
    //clear out
  const songListElem = document.querySelector('#dataSection ol');
  songListElem.innerHTML = "";
    //re-render
  renderSongList(songArray); //render the first time;

  artistElem.value = "";
  titleElem.value = "";
  youtubeElem.value = "";

  console.log("submitted!");
})



