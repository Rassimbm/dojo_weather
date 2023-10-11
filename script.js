console.log("page loaded ...");

var messageAlrt = document.querySelector(".main-bottom"); 

function showWeatherAlert() {
    alert("Loading weather report...");
}

function acceptCookies() {
    messageAlrt.remove();
}

function cel2Fah(celsius){
    return Math.round((celsius * 9/5) + 32);
}
function fah2Cel(fahrenheit){
    return Math.round((fahrenheit - 32) * 5/9);
}

function convertTempUnit(element) {
    console.log(element.value);
    for(var i = 1; i < 9; i++){
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = tempSpan.innerText;
        if(element.value == "°C") {
            tempSpan.innerText = fah2Cel(tempVal);
        } else{
            tempSpan.innerText = cel2Fah(tempVal);
        }
    }
}