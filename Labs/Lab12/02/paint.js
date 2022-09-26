'use strict';

function paint(){
    let divs = document.getElementsByClassName("divs");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        divs[i].style.height = `${Math.floor(Math.random()*20)}` + 'vw';
        divs[i].style.border = Math.random() * 3 + 'vh dotted'
    }
}