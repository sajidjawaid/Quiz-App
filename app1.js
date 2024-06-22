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

localStorage.getItem("First Name");
var name1 = document.getElementById("firstName");
var name2 = document.getElementById("lastName");
name1.innerHTML =" " + localStorage.getItem("First Name");
name2.innerHTML =" " + localStorage.getItem("Second Name")