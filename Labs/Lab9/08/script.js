"use strict";

let div = document.getElementById("div");
let i1, w = 10, h = 40, width = 40;

function start(){
    i1 = setInterval(function(){
        div.style.left = `${w}vw`;
        div.style.top = `${h}vh`;
        if (w >= 30) {

            clearInterval(i1);
            i1 = setInterval(function(){
                div.style.left = `${w}vw`;
                div.style.top = `${h}vh`;
                if (w >= 50) {
                    
                    clearInterval(i1);
                    i1 = setInterval(function(){
                        div.style.left = `${w}vw`;
                        if (w <= 10) {
                            
                            clearInterval(i1);
                            w = 10;
                            h = 40;
                            start();
                        }
                        w--;
                    }, 20)
                    
                }
                w++;
                h++;
            }, 20)

        }
        w++;
        h--;
    }, 20)
}

function stop(){
    clearInterval(i1);
}