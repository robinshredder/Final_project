var socket = null;
if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {
    // Note the resource URL should match the config in app.js
    const url = 'ws://' + location.host + '/ws';
    socket = new ReconnectingWebsocket(url);

    // Received a message
    socket.onmessage = function (evt) {
        //changes color
        if (evt.data == "colorOne") {
            document.getElementById("squareColor").style.background = "orange";
        }
        //changes color
        if (evt.data == "colorTwo") {
            document.getElementById("squareColor").style.background = "yellow";
        }
        //changes color
        if (evt.data == "colorThree") {
            document.getElementById("squareColor").style.background = "white";
        }
        //starts animation
        if(evt.data == "startAnime") {
            var customBezier = anime({
                targets: '#customBezier .el',
                translateX: 50,
                direction: 'alternate',
                duration:500,
                loop:true
            });
        }
    }
}

function send(str) {
    socket.send(str);
}

//Change background color of element

document.addEventListener("onclick", function(event) {
//sends string with keyboard input z
if (event.keyCode == '122') {
    send("colorOne");
}
//sends string with keyboard input x
if (event.keyCode == '120') {
    send("colorOne");
}
//sends string with keyboard input c
if (event.keyCode == '99') {
    send("colorOne");
}
if (event.keyCode == '13') {
    send("startAnime");
}
});
