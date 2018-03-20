document.getElementById("mySong").addEventListener("click", vibrate);
var song =  document.getElementById("mySong");

//Vibrate once

setTimeout(vibrate(), 3000);

function vibrate(){
 window.navigator.vibrate([80, 50, 500]);
 song.play(); 
}

function pulse() {
  window.navigator.vibrate([50, 250, 50, 250, 50, 250, 50, 250, 50, 250, 50, 250, 50, 250, 50, 250, 50, 250, 50]);
}

function openended () {
  window.navigator.vibrate ([50, 200, 150, 200]);
}

function definite () {
  window. navigator.vibrate ([50, 200, 50, 200]);
}


