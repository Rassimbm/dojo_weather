console.log("page loaded ...");

var messageAlrt = document.querySelector(".main-bottom"); 

function showWeatherAlert() {
    alert("Loading weather report...");
}

function acceptCookies() {
    messageAlrt.remove();
}

function celToFah(celsius){
    return (celsius * 9/5) + 32;
}

function convertTempUnit(element) {
    console.log(element.value);
    for(var i = 1; i < 9; i++){
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = tempSpan.innerText
        console.log(celToFah(tempVal));
    }
}