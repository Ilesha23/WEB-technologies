'use strict';

class Stud{
    pib = '';
    arrOz = [];
    constructor(pib, arr1, arr2, arr3, arr4, arr5){
        this.pib = pib;
        this.arrOz = [arr1, arr2, arr3, arr4, arr5];
    }
}
let arr = [], oz1 = [], oz2 = [], oz3 = [], oz4 = [], oz5 = [];
let p = document.getElementById('p');

function fillArr(){
    for (let i = 0; i < 10; i++) {
        oz1.push(Math.floor(Math.random() * 100))
        oz2.push(Math.floor(Math.random() * 100))
        oz3.push(Math.floor(Math.random() * 100))
        oz4.push(Math.floor(Math.random() * 100))
        oz5.push(Math.floor(Math.random() * 100))
    }
}
function clearArr(){
    oz1 = [];
    oz2 = [];
    oz3 = [];
    oz4 = [];
    oz5 = [];
}
function show(){
    p.innerHTML = '<br><br>Average: ' + getAvg.apply(null, [0, 1, 4]) + '<br>Min: ' + getMin.apply(null, [0, 1, 4]) + '<br>Max: ' + getMax.apply(null, [0, 1, 4]);
    for (let i = 0; i < arr.length; i++) {
        p.innerHTML += '<br>' + arr[i].pib + '<br>'
        for (let j = 0; j < 5; j++) {
            for (let k = 0; k < 10; k++) {
                p.innerHTML += arr[i].arrOz[j][k] + ' ';
            }
            p.innerHTML += "<br>";
        }
    }
}
function getAvg(q, w, e){
    let a = 0, b = 0,  c = 0;
    for (let i = 0; i < 10; i++) {
        a += arr[0].arrOz[q][i];
        b += arr[0].arrOz[w][i];
        c += arr[0].arrOz[e][i];
    }
    return [a/10, b/10, c/10];
}
function getMax(q, w, e){
    let a = 0, b = 0,  c = 0;
    a = Math.max(...arr[0].arrOz[q]);
    b = Math.max(...arr[0].arrOz[w]);
    c = Math.max(...arr[0].arrOz[e]);
    return [a, b, c];
}
function getMin(q, w, e){
    let a = 0, b = 0,  c = 0;
    a = Math.min(...arr[0].arrOz[q]);
    b = Math.min(...arr[0].arrOz[w]);
    c = Math.min(...arr[0].arrOz[e]);
    return [a, b, c];
}
for (let i = 0; i < 15; i++) {
    fillArr();
    arr.push(new Stud(`pib${i+1}`, oz1, oz2, oz3, oz4, oz5));
    clearArr();
}