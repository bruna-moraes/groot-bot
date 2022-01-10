const audio = document.getElementById('easter-egg-audio');
const image = document.getElementById('easter-egg-image');

function onClick() {
  if (image.src.includes('png')) {
    audio.play();
    image.src = 'images/gif-disco.gif';
  } else {
    audio.pause();
    image.src = 'images/image-disco.png';
  }
}
