'use strict';

let d = document.getElementById('main');

function createBlocks(){
    d.innerHTML = "";
    for (let i = 0; i < Math.floor(Math.random() * 10 + 5); i++) {
        let div = document.createElement('div');
        div.className = "divs";
        d.appendChild(div);
    }
}