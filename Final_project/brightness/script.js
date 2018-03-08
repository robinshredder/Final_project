/*
 * Dimmer, body opacity changes depending on value of slider.
 */
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var sliderValue = (output.innerHTML = (slider.value));

dimmer();

function dimmer(){
    slider.oninput = function() {
        sliderValue = (output.innerHTML = (slider.value));
        sliderValue /= Math.pow(10, 2);                     // Move decimal sign 2 steps to the left
        output.innerHTML = this.value;
        window.document.getElementById("contentArea").style.opacity = sliderValue;
    };
}


