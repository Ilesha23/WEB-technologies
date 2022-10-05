'use strict';

let array = [];
for (let i = 0; i < 5; i++)
    array[i] = [];
let p = document.getElementById('p');
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        array[i].push(Math.floor(Math.random() * 20 - 10));
    }
}
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        p.innerHTML += array[i][j] + ' ';
    }
    p.innerHTML += "<br>";
}
p.innerHTML += "<br><br>";
let n = 0;//array[0].slice();
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (array[j][i] > 0) {
            n++
        }
    }
    p.innerHTML += n + ' ';
    n = 0;
}