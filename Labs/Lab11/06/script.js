"use strict";

var options = {
    timeZone: 'Europe/Kyiv',
    timeZoneName:'longOffset',
    era: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
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
    d1.innerHTML = date.toLocaleString("en-GB", options);
}

function set(){
    let day = (document.getElementById("day").value);
    if (!isNaN(parseInt(day))) {
        day = parseInt(day);
    }
    else{ return;}
    date.setDate(date.getDate() + day);
    write();
    chBg()
}

function chBg(){
    let body = document.getElementById("body");
    let n = date.getUTCDate();
    if (n >= 0 & n <= 10) {
        body.style.background = "rgb(200, 50, 50)"
    }
    else if (n >= 11 & n <= 20) {
        body.style.background = "rgb(50, 200, 50)"
    }
    else if (n >= 21 & n <= 31) {
        body.style.background = "rgb(50, 50, 200)"
    }
}

document.onload(write(), chBg())