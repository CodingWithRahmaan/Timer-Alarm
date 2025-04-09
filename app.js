


  setInterval(function() {
    let abc = document.getElementById("abc");
let time = moment().format(' h:mm:ss a')
abc.innerHTML = time;

let alarmTime = document.getElementById("alarmTime").value;
if (alarmTime && time === alarmTime) {
    alert("Alarm ringing!");
}
}, 1000);