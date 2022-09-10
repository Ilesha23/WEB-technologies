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
    clear();
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
    if(arr.length % 2 == 0){
        arr2[Math.floor(arr2.length / 2) - 1] *= -1;
    }
    else{
        arr2[Math.floor(arr2.length / 2)] *= -1;
    }
    arr = arr2.slice();
    out(arr);
}

function sortUp(){
    if (inp1.value == "" & inp2.value == "") {
        arr2.sort((a, b) => a - b);
        arr = arr2.slice();
        out(arr);
        return;
    }
    let temp = arr2.slice(inp1.value, inp2.value);
    temp.sort((a, b) => a - b);
    arr = arr2.slice(0, inp1.value);
    arr.push.apply(arr, temp);
    arr.push.apply(arr, arr2.slice(inp2.value, arr2.length));
    arr2 = arr.slice();
    out(arr);
}
function sortDown(){
    if (inp1.value == "" & inp2.value == "") {
        arr2.sort((a, b) => b - a);
        arr = arr2.slice();
        out(arr);
        return;
    }
    let temp = arr2.slice(inp1.value, inp2.value);
    temp.sort((a, b) => b - a);
    arr = arr2.slice(0, inp1.value);
    arr.push.apply(arr, temp);
    arr.push.apply(arr, arr2.slice(inp2.value, arr2.length));
    arr2 = arr.slice();
    out(arr);
}

function copy(){
    arr2 = arr2.slice(Math.floor(arr2.length / 2), arr2.length + 1).reverse();
    arr = arr2.slice();
    out(arr);
}

function filt(){
    f.innerHTML = "Filter: "
    let i = 0;
    arr2.forEach(function(elem, index){
        if (index % 2 == 0) {
            f.innerHTML += elem + ", ";
            i++;
        }
    })
}

function stat(){
    s.innerHTML = "Statistics: "
    let i = 0;
    arr2.forEach(function(elem){
        if (elem % 2 == 0) {
            i++;
        }
    })
    s.innerHTML += i;
}

function mod(){
    m.innerHTML = "Modification: "
    arr2.forEach(function(elem){
        if (elem > 0) {
            m.innerHTML += Math.sqrt(elem).toFixed(2) + ", ";
        }
        else{
            m.innerHTML += Math.cbrt(elem).toFixed(2) + ", ";
        }
    })
}

function check(){
    let b1 = false, b2 = false;
    c.innerHTML = "Check: "
    arr2.forEach(function(elem){
        if (elem % 3 != 0) {
            b1 = false;
        }
        if (elem % 3 == 0) {
            b2 = true;
        }
    })
    if (b1 == false) {
        c.innerHTML += "all - no, ";
    }
    else{
        c.innerHTML += "all - yes, ";
    }
    if (b2) {
        c.innerHTML += "one - yes";
    }
    else{
        c.innerHTML += "one - no";
    }
}

function search(){
    se.innerHTML = "Search: ";
    arr2.forEach(function(elem, index){
        if (elem == 0) {
            se.innerHTML += elem + ", index: " + index;
        }
    })
}