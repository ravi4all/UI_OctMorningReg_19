window.addEventListener("load", initEvents);

function initEvents() {
    username = document.querySelector("#box_1");
    email = document.querySelector("#box_2");
    pwd = document.querySelector("#box_3");
    c_pwd = document.querySelector("#box_4");
    span = document.querySelectorAll(".err");

    username.addEventListener("blur", checkName);
    email.addEventListener("keyup", validateEmail);
    c_pwd.addEventListener("change", confirmPassword);
}

function checkName() {
    var str = username.value;
    if (str == "") {
        span[0].innerHTML = "Please fill this field";
    } else {
        span[0].innerHTML = "";
    }
}

function confirmPassword() {
    var pwd_1 = pwd.value;
    var pwd_2 = c_pwd.value;
    if (pwd_1 == pwd_2) {
        span[3].innerHTML = "Password Match";
    } else {
        span[3].innerHTML = "Password do not Match";
    }
}

function validateEmail() {
    var id = email.value;
    var pattern = /[a-z|0-9]\w+[@]\w+[.]\w{2,3}/;
    if (pattern.test(id)) {
        span[1].innerHTML = "Valid";
    } else {
        span[1].innerHTML = "Invalid";
    }
}