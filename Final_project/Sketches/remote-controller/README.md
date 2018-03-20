<h1> Remote controller </h1>
With this remote controller one can control and change different backgrounds with keyboard commands on different devices when connected to web sockets.

<b> Getting Started </b>
1) Download the package, all files are needed to set up the web socket. 
2) Open terminal and write $ cd <i>put web socket file here</i>
3) By typing npm start you will open a personal localhost, you will get a number ex. localhost:4040
4) To open localhost on another device write your IP adress in the search field of your browser ex. 10.3.28.128:4040

<b> Prerequisites </b>
You will need to install npm before using the websocket.

Link to npm install: https://docs.npmjs.com/cli/install

Find different keycodes here: https://www.asciitable.com/

<b> Give examples </b>

<u>Receive a message</u>

  socket.onmessage = function(evt) {

    if (evt.data == "image") {
      document.body.style.backgroundImage = "url('insert URL')";
      console.log("image");
    }


<u>Send a message</u>


function send(str) {

  socket.send(str);
}



<u>By using keydown, activate the event</u>
document.addEventListener("keydown", function(event) {


  if (event.keyCode == 'yourkeycode') {
    console.log("image");
       send("image");
      
    } 
