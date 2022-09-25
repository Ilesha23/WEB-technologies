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
    minute: 'numeric',
    second: 'numeric'
};

let date = new Date();

let d1 = document.getElementById("d1")
function write(){
    d1.innerHTML = "";
    d1.innerHTML += date.toLocaleString("en-GB", options);
}

function set(){
    let day = (document.getElementById("day").value);
    let mon = (document.getElementById("mon").value);
    let year = (document.getElementById("year").value);
    if (!isNaN(parseInt(day)) & !isNaN(parseInt(mon)) & !isNaN(parseInt(year))) {
        day = parseInt(day);
        mon = parseInt(mon);
        year = parseInt(year);
    }
    else{ return;}
    date.setFullYear(year, mon, day);
    write();
}

document.onload(write())