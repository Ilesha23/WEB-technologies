'use strict';

function fill(){
    let divs = document.getElementsByClassName("divs");
    let letters = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    for (let i = 0; i < divs.length; i++) {
        divs[i].innerHTML = letters[Math.floor(Math.random() * 31)];
    }
}