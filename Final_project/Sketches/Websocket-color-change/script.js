var socket = null;
if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);


//Websocket, making sure a color changes happen to everyone viewing the webpage when a checkbox is checked
function ready() {
	const url = 'wss://' + location.host + '/ws';
	socket = new ReconnectingWebsocket(url);
	socket.onmessage = function(evt) {
		
		
    //If black box is checked, change background color to black
    if (evt.data == 'blackChecked') {
			document.getElementById('Black').checked = true;
			document.body.style.backgroundColor = "black";
		}
		if (evt.data == 'blackUnchecked') {
			document.getElementById('Black').checked = false;
document.body.style.backgroundColor = "white";		}
		
		
		
		//If red box is checked, change background color to red
      if (evt.data == 'redChecked') {
			document.getElementById('Red').checked = true;
			document.body.style.backgroundColor = "red";
		}
    
		if (evt.data == 'redUnchecked') {
			document.getElementById('Red').checked = false;
document.body.style.backgroundColor = "white";		}
    
		
    
    //If green box is checked, change background color to green
    if (evt.data == 'greenChecked') {
			document.getElementById('Green').checked = true;
			document.body.style.backgroundColor = "green";
		}
    
		if (evt.data == 'greenUnchecked') {
			document.getElementById('Green').checked = false;
document.body.style.backgroundColor = "white";		}
  
		
    
    //If blue box is checked, change background color to blue 
        if (evt.data == 'blueChecked') {
			document.getElementById('Blue').checked = true;
			document.body.style.backgroundColor = "blue";
		}
    
		if (evt.data == 'blueUnchecked') {
			document.getElementById('Blue').checked = false;
document.body.style.backgroundColor = "white";		}

}
}




function send(str) {
	socket.send(str);
}

//Checking if the boxes are checked 
document.addEventListener('DOMContentLoaded', function () {
      var checkboxBlack = document.getElementById('Black');
  var checkboxRed = document.getElementById('Red');
  var checkboxGreen = document.getElementById('Green');
    var checkboxBlue = document.getElementById('Blue');

  //Black checkbox
  checkboxBlack.addEventListener('change', function () {
      if (checkboxBlack.checked) {
        // do this
        console.log('Black Checked');
        send('blackChecked');
      } else {
        // do that
        console.log('Black not checked');
        send('blackUnchecked');

      }
    });
  
