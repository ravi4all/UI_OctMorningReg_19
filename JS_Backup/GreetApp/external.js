// Event Binding
// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener("click", showName);
// });

window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("btn").addEventListener("click", showName);
}

function showName() {
    console.log("Function called...");
    var username = document.getElementById("box_1");
    // console.log(username.value);
    document.getElementById("result").innerHTML = username.value;
}