window.addEventListener("load", initEvent);
var counter = 0;

function initEvent() {
    document.getElementById("inc").addEventListener("click", incCounter);
    document.getElementById("dec").addEventListener("click", decCounter);
}

function incCounter() {
    counter += 1;
    document.getElementById("count").innerHTML = counter;
}

function decCounter() {
    counter -= 1;
    document.getElementById("count").innerHTML = counter;
}