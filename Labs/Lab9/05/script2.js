"use strict";

let p = document.getElementById("text");
let i1, i2, t = 0;


p.addEventListener("mouseover", function f(r){
    r = t++;
    i1 = setTimeout(function() {
        if (r % 2 == 0) {
            p.style.fontSize = "3vh";
        }
        else{
            p.style.fontSize = "2vh";
        }
        f(r++);
    }, 1500);
})

p.addEventListener("mouseout", function f(r){
    clearTimeout(i1);
})