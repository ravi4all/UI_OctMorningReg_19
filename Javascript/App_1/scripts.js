// window.addEventListener("load", function() {
//     // Event Binding - Bind the event with a callback function
//     document.getElementById("btn").addEventListener("click", show);
// })

window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("btn").addEventListener("click", show);
}

function show() {
    var username = document.getElementById("box_1").value;
    document.getElementById("result").innerHTML = username;
}