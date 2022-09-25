"use strict";

var options = {
    timeZone: 'Europe/Kyiv',
    timeZoneName:'longOffset',
    era: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    //weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    hour12: 'true',
    minute: 'numeric',
    second: 'numeric',
    fractionalSecondDigits: 3
};

let date = new Date();

let d1 = document.getElementById("d1")
function write(){
    d1.innerHTML = "";
    d1.innerHTML += date.toLocaleString("en-GB", options);
}

function set(){
    let sec = (document.getElementById("sec").value);
    let msec = (document.getElementById("msec").value);
    if (!isNaN(parseInt(sec)) & !isNaN(parseInt(msec))) {
        sec = parseInt(sec);
        msec = parseInt(msec);
    }
    else{ return;}
    date.setSeconds(sec);
    date.setMilliseconds(msec);
    write();
}
document.onload(write())