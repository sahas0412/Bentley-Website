let daysbox = document.getElementById("days");
let hoursbox = document.getElementById("hours");
let minutesbox = document.getElementById("minutes");
let secondsbox = document.getElementById("seconds");

let totalseconds = (3*24*60*60)+(12*60*60)+(30*60)+45;

setInterval(function(){
    totalseconds = totalseconds - 1;
    let d = Math.floor(totalseconds/(24*60*60));
    let h = Math.floor((totalseconds % (3600*24))/(60*60));
    let m = Math.floor((totalseconds % 3600)/60);
    let s = Math.floor(totalseconds % 60);
    daysbox.innerHTML = d;
    hoursbox.innerHTML = h;
    minutesbox.innerHTML = m;
    secondsbox.innerHTML = s;

    if ( d < 10) {
        daysbox.innerHTML = "0" + d;
    }
    if ( h < 10) {
        hoursbox.innerHTML = "0" + h;
    }
    if ( m < 10) {
        minutesbox.innerHTML = "0" + m;
    }
    if ( s < 10) {
        secondsbox.innerHTML = "0" + s;
    }

}, 1000);

