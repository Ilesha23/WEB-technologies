"use strict";

let p = document.getElementById("p");
let l = document.getElementById("length");
let f = document.getElementById("filt")
let s = document.getElementById("stat");
let m = document.getElementById("mod");
let c = document.getElementById("check");
let se = document.getElementById("search");
let arr = [];
let arr2 = [];
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");

function create(){
    p.innerHTML = "";
    let length = Math.floor(Math.random() * 35) + 10;
    for (let i = 0; i < 10000; i++) {
        arr[i] = ((Math.random() * 35) -25).toFixed(2);
    }
    //out(arr);
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

function search(){
    let d1 = new Date().getTime();
    se.innerHTML = "Search: ";
    arr2.forEach(function(elem, index){
        if (elem == 0) {
            se.innerHTML += elem + " index: " + index + "<br>";
        }
    })
    let d2 = new Date().getTime();
    se.innerHTML += `<br>Time: ${d2-d1}`;
}