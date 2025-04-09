const alarmSound = new Audio('asset/aaaaa.wav');
let aa = document.getElementById("aa");
let alarmTime 
let aed
let ee = document.getElementById("ee");





setInterval(function () {
    let abc = document.getElementById("abc");
    let currentTime = moment().format('HH:mm');
    abc.innerHTML = moment().format('h:mm:ss a'); 

    if (alarmTime && currentTime === alarmTime && !aed) {
        alarmSound.play(); 
        alarmTriggered = true;
    }

    if (currentTime !== aed) {
        alarmTriggered = false;
    }
}, 1000);




function setAlarm() {
    alarmTime = document.getElementById("alarmTime").value; 
    if (alarmTime) {
        Swal.fire({
            title: 'Alarm Set!',
            text: 'The alarm has been set.',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        aed = false; 
    } else {
        Swal.fire({
            title: 'Alarm!',
            text: 'Please set the alarm first ⏰',
            icon: 'warning',
            confirmButtonText: 'OK'
          });    
    }
}


function stopAlarm() {
    if(alarmTime){
            alarmSound.pause(); 
    aed = false;
    alarmTime = null;
    document.getElementById("alarmTime").value = ""; 
    Swal.fire({
        title: 'Alarm Stopped!',
        text: 'The alarm has been stopped.',
        icon: 'success',  
        confirmButtonText: 'OK'
      });
    }
    else {
        Swal.fire({
            title: 'Alarm!',
            text: 'Please set the alarm first ⏰',
            icon: 'warning',
            confirmButtonText: 'OK'
          });    
    }   
}