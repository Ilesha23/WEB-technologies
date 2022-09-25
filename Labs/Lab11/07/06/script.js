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
        arr[i] = ((Math.random() * 35)).toFixed(2);
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
    se.innerHTML = "";
    let a = arr2.slice();
    arr2 = bubbleSort(arr2);
    let d2 = new Date().getTime();
    a.sort();
    //out(arr2)
    let d3 = new Date().getTime();
    se.innerHTML += `<br>Time 1: ${d2-d1}`;
    se.innerHTML += `<br>Time 2: ${d3-d2}`;
}

function bubbleSort(arr) {
    for (var i = 0, endI = arr2.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr2[j] > arr2[j + 1]) {
                var swap = arr[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = swap;
            }
        }
    }
    return arr;
}