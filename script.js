console.log("page loaded ...");

function showWeatherAlert(element) {
    alert("Loading weather report...");
}

function acceptCookies(id) {
    var element = document.querySelector(id);
    console.log(element);
    element.remove();
}