
function openFullscreen() {
    var elem = document.getElementById("wrapper");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
    else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
    else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    }
    else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
}

function sidebar_open() {
    document.getElementById("sidebar").style.display = "block";

}

function sidebar_close() {
    document.getElementById("sidebar").style.display = "none";
}

function showgadDiv() {
    document.getElementById("gadDiv").style.display = "block";
    document.getElementById("feederformDiv").style.display = "block";
}

window.addEventListener("message", function (event) {
    if (event.data === "showfeederdataDiv") {
        // Change the style of the element
        document.getElementById("feederdataDiv").style.display = "block";
    }
});