function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var day = now.toLocaleDateString('en-US', { weekday: 'long' });

    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('date').innerText = timeString;
    document.getElementById('day').innerText = day;
}
setInterval(updateTime, 1000);


var getFirstName = document.getElementById("firstName");
var getLastName = document.getElementById("lastName");
var getEmail = document.getElementById("email");
var getNum = document.getElementById("num");
var getLink = document.getElementById("link");

var error1 = document.getElementById("error1")
var error2 = document.getElementById("error2")
var error3 = document.getElementById("error3")
var error4 = document.getElementById("error4")

function save() {

    if (!getFirstName.value) {
        error1.style.display = "block";
        return
    }

    if (getFirstName.value === getFirstName.value) {
        error1.style.display = "none";
    }

    if (!getLastName.value) {
        error2.style.display = "block";
        return
    }

    if (getLastName.value === getLastName.value) {
        error2.style.display = "none";
    }

    if (!getEmail.value) {
        error3.style.display = "block";
        return
    }

    if (getEmail.value === getEmail.value) {
        error3.style.display = "none";
    }

    if (!getNum.value) {
        error4.style.display = "block";
        return
    }

    link.href = "index2.html"

    saveValue()
}

function saveValue() {
    localStorage.setItem("First Name", getFirstName.value);
    localStorage.setItem("Second Name", getLastName.value);
    localStorage.setItem("E Mail", getEmail.value);
    localStorage.setItem("Number", getNum.value);
}