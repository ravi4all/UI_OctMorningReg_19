window.addEventListener("load", initEvent);
var x;
var y;

function initEvent() {
    x = document.getElementById("box_1");
    y = document.getElementById("box_2");
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("mul").addEventListener("click", mul);
}

function add() {
    var z = parseInt(x.value) + parseInt(y.value);
    displayOutput(z);
}

function sub() {
    var z = parseInt(x.value) - parseInt(y.value);
    displayOutput(z);
}

function div() {
    var z = parseInt(x.value) / parseInt(y.value);
    displayOutput(z);
}

function mul() {
    var z = parseInt(x.value) * parseInt(y.value);
    displayOutput(z);
}

function displayOutput(z) {
    document.getElementById("res").innerHTML = z;
}