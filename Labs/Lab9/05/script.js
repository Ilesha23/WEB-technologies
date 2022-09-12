"use strict";

let p = document.getElementById("text");
let i1, i2;
p.addEventListener("mouseover", function(){
    i1 = setInterval(() => {
        p.style.fontSize = "3vh";
    }, 1500);
    i2 = setInterval(() => {
        p.style.fontSize = "2vh";
    }, 3000);
})

p.addEventListener("mouseout", function(){
    clearInterval(i1);
    clearInterval(i2);
})