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
document.write(date.toLocaleString("ru", options) + "<br>");
document.write(date.toLocaleString("en-GB", options));