"use strict";

let img = document.getElementsByTagName("img");
let i1, l = 0;

function start(){
    i1 = setInterval(function(){
        for (let i = 0; i < img.length; i++) {
            img[i].style.transform = 'rotate(' + l + 'deg)';
        }
        l++;
    }, 20)
}
function stop(){
    clearInterval(i1);
}