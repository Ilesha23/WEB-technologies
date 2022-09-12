"use strict";

let inp = document.getElementsByTagName("input")[0];
let p = document.getElementsByTagName("p")[0];

function adapt(){
    p.innerHTML = "";
    let text = inp.value;
    let arr = text.trim().split(" ");
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