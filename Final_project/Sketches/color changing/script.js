 


/*
var animate, left=0, imgObj=null;

function init(){

   imgObj = document.getElementById('one');
   imgObj.style.position= 'absolute';
   imgObj.style.top = '240px';
   imgObj.style.left = '-300px';
   imgObj.style.visibility='hidden';

   moveRight();
}

function moveRight(){
    left = parseInt(imgObj.style.left, 10);

    if (10 >= left) {
        imgObj.style.left = (left + 5) + 'px';
        imgObj.style.visibility='visible';

        animate = setTimeout(function(){moveRight();},20); // call moveRight in 20msec

        //stopanimate = setTimeout(moveRight,20);
    } else {
        stop();
    }
    //f();
}

function stop(){
   clearTimeout(animate);
}

window.onload = function() {init();};


*/