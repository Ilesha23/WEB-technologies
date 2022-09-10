"use strict";

let p = document.getElementById("p");
let l = document.getElementById("length");
let arr = [];
let arr2 = [];

function create(){
    p.innerHTML = "";
    let length = Math.floor(Math.random() * 35) + 10;
    for (let i = 0; i < length; i++) {
        arr[i] = ((Math.random() * 35) -25).toFixed(2);
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
    clear(ar);
    for (let i = 0; i < ar.length; i++) {
        p.innerHTML += ar[i] + ", ";
    }
    l.innerHTML = `Length: ${ar.length}`;
    arr2 = ar;
}

function add(){
    arr2.unshift(arr2[0]);
    arr = arr2.slice();
    out(arr);
}

function del(){
    arr2.pop();
    arr = arr2.slice();
    out(arr);
}

function change(){
    arr2[Math.floor(arr2.length / 2) - 1] *= -1;
    arr = arr2.slice();
    out(arr);
}

//Math.random() * (max - min) + min;