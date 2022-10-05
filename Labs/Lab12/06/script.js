'use strict';

let d = document.getElementById('dialog');
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let p = document.getElementById('p');
function op(){
    d.show();
}
function clos(){
    d.close();
    p.style.border = inp1.value;
    p.style.fontSize = inp2.value + 'px';
}