"use strict";

let p = document.getElementById("p");
let l = document.getElementById("length");

function create(){
    let arr = [];
    p.innerHTML = "";
    let length = Math.floor(Math.random() * 35) + 10;
    for (let i = 0; i < length; i++) {
        arr[i] = ((Math.random() * 35) -25).toFixed(2);
        
    }
    for (let i = 0; i < arr.length; i++) {
        //alert(arr[i])
        p.innerHTML += arr[i] + ", ";
    }
    l.innerHTML = `Length: ${arr.length}`;
}

//Math.random() * (max - min) + min;