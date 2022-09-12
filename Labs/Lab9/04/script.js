"use strict";

let inp = document.getElementById("inp");
let p = document.getElementById("p");
let sort = document.getElementById("sort");
let sear = document.getElementById("searchInp");
let text = document.getElementById("text");
let st = document.getElementById("stat");
let s;
let arr = text.innerHTML.split(" ");
let ar = text.innerHTML.split(/\. |\? |\! /);
// /\. |\? |\! /

function create(){
    p.innerHTML = "";
    s = inp.value.trim();
    let arr = s.split(' ');
    for (let i = arr.length - 1; i >= arr.length - 7; i--) {
        p.innerHTML += arr[i] + ", ";
    }
}
function sor(){
    sort.innerHTML = "";
    let arr = inp.value.trim().split(" ");
    arr.sort(function(a, b){
        return b.length - a.length;
    })
    for (let i = 0; i < arr.length; i++) {
        sort.innerHTML += arr[i] + ", ";
    }
}

sear.addEventListener("keyup", search);

function search(){
    let arr1 = document.getElementById("searchInp").value.split(" ");
    document.querySelectorAll("span").forEach(span => {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] == span.innerHTML) {
                span.style.color = "red";
            }
            if (sear.value == "") {
                span.style.color = "black";
            }
        }
    })
}

window.addEventListener("load", function(event){
    text.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        text.innerHTML += `<span id="color">${arr[i]}</span> `;
    }
})

function stat() {
    let size = 0, size1, size2, arr2, arr3;
    for (let i = 0; i < ar.length - 2; i++) {
        arr2 = ar[i].split(" ");
        arr3 = ar[i + 1].split(" ");
        size1 = arr2.length;
        size2 = arr3.length;
        if (size1 < size2) {
            size = size1;
        }
        else{
            size = size2;
        }
    }
    document.getElementById("stat").innerHTML = "Min words: " + size;
}