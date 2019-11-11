window.addEventListener("load", initEvent);
var rocketImg;
var missileImg;

function initEvent() {
    rocketImg = document.querySelector("#img_1");
    missileImg = document.querySelector("#missile");
    container = document.querySelector("#container");
    container.style.height = window.innerHeight + "px";
    container.addEventListener("mousemove", moveImg);
    container.addEventListener("click", shoot);
}

function moveImg() {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    rocketImg.style.left = mouseX - 80 + "px";
    rocketImg.style.top = mouseY - 75 + "px";
    missileImg.style.left = mouseX - 60 + "px";
    missileImg.style.top = mouseY - 30 + "px";
}

function shoot() {
    missileImg.className = "block";
    setTimeout(function() {
        missileImg.className = "";
    }, 500);
}