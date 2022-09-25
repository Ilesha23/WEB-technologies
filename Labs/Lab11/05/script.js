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
    rotate();
}

function set(){
    let day = (document.getElementById("day").value);
    if (!isNaN(parseInt(day))) {
        day = parseInt(day);
    }
    else{ return;}
    date.setDate(date.getDate() + day);////////////////////////////
    write();
}

function rotate(){
    let img = document.getElementById("img");
    img.style.transform = 'rotate(' + date.getDay() * 90 / 7 + 'deg)';
}

document.onload(write())