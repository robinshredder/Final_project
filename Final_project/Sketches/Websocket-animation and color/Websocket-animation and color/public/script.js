
var socket = null;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {
  // Note the resource URL should match the config in app.js
  const url = 'ws://' + location.host + '/ws';
  socket = new ReconnectingWebsocket(url);

  // Connection has been established
  socket.onopen = function(evt) {
    console.log('Web socket opened: ' + url);
  };

  
  socket.onmessage = function(evt) {
 


    if (evt.data == "rainbow") {
      var circle=document.getElementById("cir");
      circle.style.background = "black";
      console.log("rainbow");
    }

    if (evt.data == "grey") {
      var css=document.getElementById("cssproperty");
      css = anime({
        targets: '#cssproperty .el',
        translateX: 200,
        backgroundColor: [
          {value: '#EE8262'}, // Or #FFFFFF
          {value: '#FCDC3B'},
          {value: '#FF4500'}
        ],
        
        direction: 'alternate',
        duration:500,
       loop:true
      }); 
      
      css.style.background="white";
      console.log("grey");
}

  };
}



function send(str) {
  
  socket.send(str);
}


document.addEventListener("keydown", function(event) {


  if (event.keyCode == '38') {

    console.log("rainbow");
       send("rainbow");
      // UP
    } 
    if (event.keyCode == '40') {

      console.log("grey");
         send("grey");
        // UP
      }
  }
);



