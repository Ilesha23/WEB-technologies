"use strict";

let img = document.getElementsByTagName("img")[0];
let i1, w = 4.5, h = 6;

function start(){
    i1 = setInterval(function(){
        img.style.left = `${w}vw`;
        w++;
        if (w >= 87.5) {
            clearInterval(i1);
            i1 = setInterval(function(){
                img.style.top = `${h}vh`;
                h++;
                if (h >= 76) {
                    clearInterval(i1);
                    i1 = setInterval(function(){
                        img.style.left = `${w}vw`;
                        w--;
                        if (w <= 4.5) {
                            clearInterval(i1);
                            i1 = setInterval(function(){
                                img.style.top = `${h}vh`;
                                h--;
                                if (h <= 6) {
                                    clearInterval(i1);
                                    w = 4.5;
                                    h = 6;
                                    start();
                                }
                            }, 20)
                        }
                    }, 20)
                }
            }, 20)
        }
    }, 20)
}

function stop(){
    clearTimeout(i1);
}