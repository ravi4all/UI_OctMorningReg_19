window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("mul").addEventListener("click", mul);
}

function add() {
    var x = document.getElementById("box_1").value;
    var y = document.getElementById("box_2").value;
    var z = parseInt(x) + parseInt(y);
    document.getElementById("res").innerHTML = z;
}

function sub() {
    var x = document.getElementById("box_1").value;
    var y = document.getElementById("box_2").value;
    var z = parseInt(x) - parseInt(y);
    document.getElementById("res").innerHTML = z;
}

function div() {
    var x = document.getElementById("box_1").value;
    var y = document.getElementById("box_2").value;
    var z = parseInt(x) / parseInt(y);
    document.getElementById("res").innerHTML = z;
}

function mul() {
    var x = document.getElementById("box_1").value;
    var y = document.getElementById("box_2").value;
    var z = parseInt(x) * parseInt(y);
    document.getElementById("res").innerHTML = z;
}