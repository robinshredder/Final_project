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

}
}

function send(str) {
	socket.send(str);
}

