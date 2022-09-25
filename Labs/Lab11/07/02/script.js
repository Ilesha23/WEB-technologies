"use strict";

let p = document.getElementById("p");
let l = document.getElementById("length");
let f = document.getElementById("filt")
let s = document.getElementById("stat");
let m = document.getElementById("mod");
let arr = [];
let arr2 = [];
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");

function create(){
    p.innerHTML = "";
    let length = Math.floor(Math.random() * 10);
    for (let i = 0; i < 10000; i++) {
        arr[i] = ((Math.random() * 35) - 25).toFixed(2);
    }
    out(arr);
    arr2 = arr.slice();
    arr.splice(0, arr.length);
}

function clear(){
    l.innerHTML = "";
    p.innerHTML = "";
}

function out(ar){
    clear();
    for (let i = 0; i < ar.length; i++) {
        p.innerHTML += ar[i] + ", ";
    }
    l.innerHTML = `Length: ${ar.length}`;
    arr2 = ar;
}

function mod(){
    let d1 = new Date().getTime();
    m.innerHTML = ""
    arr2.forEach(function(elem){
        if (elem > 0) {
            //m.innerHTML += /////////////////////////
            Math.sqrt(elem).toFixed(2) + ", ";
        }
        else{
            //m.innerHTML += /////////////////////////
            Math.cbrt(elem).toFixed(2) + ", ";
        }
    })
    let d2 = new Date().getTime();
    m.innerHTML += `<br>Mod time: ${d2-d1}`;
}