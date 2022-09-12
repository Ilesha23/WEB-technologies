"use strict";

let inp = document.getElementsByTagName("input")[0];
let p = document.getElementsByTagName("p")[0];
let p2 = document.getElementById("p2");

function adapt(){
    p.innerHTML = "";
    let arr = inp.value.trim().split(" ");
    let arr2;
    if (arr.length > 7) {
        arr2 = arr.slice(arr.length - 7);
    }
    else{
        arr2 = arr;
    }
    p.innerHTML = ". . . ";
    for (let i = 0; i < arr2.length; i++) {
        p.innerHTML += arr2[i] + " ";
    }
}

function sorting(){
    p2.innerHTML = "";
    let arr = inp.value.trim().split(" ");
    arr.sort(function(a, b){
        return b.length - a.length;
    })
    for (let i = 0; i < arr.length; i++) {
        p2.innerHTML += `${[i + 1]}. ` + arr[i] + "<br>";
    }
}