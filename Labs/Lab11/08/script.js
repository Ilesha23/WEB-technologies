"use strict";

let date = new Date();
let d = document.getElementById('d');
let inp = document.getElementById('inp');

var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric',
    // second: 'numeric'
};

function change(){
    date = new Date(inp.value)
    date.setFullYear(date.getFullYear() + 10)
    date.setMonth(date.getMonth() - 2);
    write();
}

function change2(){
    let s = document.getElementById('inp2').value;
    date = new Date(Date.parse(s))
    write();
}

function write(){
    d.innerHTML = date.toLocaleDateString()
}

window.onload(
    write()
)