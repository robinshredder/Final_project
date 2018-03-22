var socket = null;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {
  // Note the resource URL should match the config in app.js
  const url = 'ws://' + location.host + '/ws';
  socket = new ReconnectingWebsocket(url);


  // Received a message
  socket.onmessage = function(evt) {
    
//*----CODE----*\\

function fadePics(){
  var i;
  var x=  document.getElementsByClassName ("fadePics");
 for(i=0;i<x.length;i++){
 x[i].style.opacity = "0";
 }
 imgIndex++;
 if(imgIndex==x.length-1){
 imgIndex = 0;
 }
 
 x[imgIndex].style.opacity = "1";
 
 setTimeout(fadePics,1000);
 
}
fadePics();
