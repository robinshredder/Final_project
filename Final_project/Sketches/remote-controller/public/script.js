var socket = null;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {
  // Note the resource URL should match the config in app.js
  const url = 'ws://' + location.host + '/ws';
  socket = new ReconnectingWebsocket(url);


  // Received a message
  socket.onmessage = function(evt) {
    
   //COLOR BACKGROUND ---------------------

    if (evt.data == "rainbow") {
      document.body.style.backgroundImage = "url('https://cdn.glitch.com/9903bcbc-9f8a-4d58-8032-9aa703a59e54%2Frainbow.gif?1521069415670')";
      console.log("rainbow");
    }

    
    if (evt.data == "magenta") {
      document.body.style.backgroundColor = "magenta";
      console.log("magenta");
    }
    if (evt.data == "red") {
      document.body.style.backgroundImage = "url('https://cdn.glitch.com/9903bcbc-9f8a-4d58-8032-9aa703a59e54%2Fred.gif?1521068876589')";
      console.log("red light");
    }

    if (evt.data == "yellow") {
      document.body.style.backgroundImage = "url('https://cdn.glitch.com/9903bcbc-9f8a-4d58-8032-9aa703a59e54%2Fyellow.gif?1521068704160')";
      console.log("yellow light");
    }

    

    

 //AUDIO not working cross-deviced ---------------------  

if (evt.data == "65") {
      console.log("SOUND1");
      document.getElementById("myAudio").play(); 
} 

if (evt.data == "83") {
  console.log("SOUND2");
  document.getElementById("myAudio2").play(); 
} 

if (evt.data == "68") {
  console.log("SOUND3");
  document.getElementById("myAudio3").play(); 
} 

if (evt.data == "70") {
  console.log("SOUND4");
  document.getElementById("myAudio4").play(); 
} 

if (evt.data == "90") {
  
  window.navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500]);
  console.log("VIBRATION");
} 




    };
  }


   
function send(str) {

  socket.send(str);
}



//COLOR BACKGROUND -----------------

document.addEventListener("keydown", function(event) {


  if (event.keyCode == '38') {
    console.log("rainbow");
       send("rainbow");
      // UP
    } 
   
   if (event.keyCode == '40') {
    console.log("yellow light");
      send("yellow");
     // DOWN
     
   }
     
     if (event.keyCode == '37') {
      console.log("magenta");
        send("magenta");
       //LEFT
       
       }
     
     if (event.keyCode == '39') {
      console.log("red light");
        send("red");
       //LEFT
       
     }

 //AUDIO not working cross-deviced ----------------

      if (event.keyCode == '65') {
        console.log('SOUND1');
        send("65");
        //A

      }

      if (event.keyCode == '83') {
        console.log('SOUND2');
        send("83");
        //S

      }

      if (event.keyCode == '68') {
        console.log('SOUND3');
        send("68");
        //D

      }

      if (event.keyCode == '70') {
        console.log('SOUND4');
        send("70");
        //F

      }

      if (event.keyCode == '90') {
          console.log('VIBRATION');
          send("90");
          //Z

      

      }
      
     });
