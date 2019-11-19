window.addEventListener("load", initEvent);
var x;
var y;

function initEvent() {
    x = document.getElementById("box_1");
    y = document.getElementById("box_2");
    document.getElementById("add").addEventListener("click", calc);
    document.getElementById("sub").addEventListener("click", calc);
    document.getElementById("div").addEventListener("click", calc);
    document.getElementById("mul").addEventListener("click", calc);
}

function calc() {
    var opr = event.srcElement.innerHTML;
    console.log(opr);
    var f_num = x.value;
    var s_num = y.value;
    var expression = f_num + opr + s_num;
    // eval - evaluate
    var result = eval(expression);
    displayOutput(result);
}

function displayOutput(z) {
    document.getElementById("res").innerHTML = z;
}