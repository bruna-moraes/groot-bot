const audio = document.getElementById('easter-egg-audio');
const image = document.getElementById('easter-egg-image');

function onClick() {
  if (image.src.includes('png')) {
    audio.play();
    image.src = 'images/disc-gif.gif';
  } else {
    audio.pause();
    image.src = 'images/disc-image.png';
  }
}
