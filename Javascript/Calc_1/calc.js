window.addEventListener("load", initEvent);
var f_num;
var s_num;

function initEvent() {
    f_num = document.getElementById("box_1");
    s_num = document.getElementById("box_2");
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("mul").addEventListener("click", mul);
}

function add() {
    var result = parseInt(f_num.value) + parseInt(s_num.value);
    showResult(result);
}

function mul() {
    var result = parseInt(f_num.value) * parseInt(s_num.value);
    showResult(result);
}

function sub() {
    var result = parseInt(f_num.value) - parseInt(s_num.value);
    showResult(result);
}

function div() {
    var result = parseInt(f_num.value) / parseInt(s_num.value);
    showResult(result);
}

function showResult(result) {
    document.getElementById("box_3").value = result;
}