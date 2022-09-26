"use strict";

let num = document.getElementById('inp');
let buts = document.getElementsByName('a');
let p = document.getElementById('ans');
let divs = document.getElementsByClassName('divs');

function count(){
    let a = num.value;
    if (buts[0].checked) {
        a *= 2;
        a = Math.sqrt(a);
        a *= 3;
    }
    else if (buts[1].checked) {
        a = Math.sqrt(a);
        a *= 3;
        a *= 2;
    }
    else if (buts[2].checked) {
        a *= 3;
        a *= 2;
        a = Math.sqrt(a);
    }
    p.innerHTML = a;
}

// document.getElementById('d1').addEventListener('click', q1)
// document.getElementById('d2').addEventListener('click', q2)
// document.getElementById('d3').addEventListener('click', q3)
// document.getElementById('d4').addEventListener('click', q4)
document.getElementById('d5').addEventListener('click', q5)

// function q1(){
//     alert('1')
//     if (!e) var e = window.event;
//     e.cancelBubble = true;
//     if (e.stopPropagation) e.stopPropagation(); 
// }
// function q2(){
//     alert('2')
//     if (!e) var e = window.event;
//     e.cancelBubble = true;
//     if (e.stopPropagation) e.stopPropagation(); 
// }
// function q3(){
//     alert('3')
//     if (!e) var e = window.event;
//     e.cancelBubble = true;
//     if (e.stopPropagation) e.stopPropagation(); 
// }
// function q4(){
//     alert('4')
//     if (!e) var e = window.event;
//     e.cancelBubble = true;
//     if (e.stopPropagation) e.stopPropagation(); 
// }
function q5(){
    //alert('5')
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();

    setTimeout(() => {
        let rc = Math.floor(Math.random()*16777215).toString(16);
        divs[0].style.backgroundColor = "#" + rc;
        setTimeout(() => {
            rc = Math.floor(Math.random()*16777215).toString(16);
            divs[1].style.backgroundColor = "#" + rc;
            setTimeout(() => {
                rc = Math.floor(Math.random()*16777215).toString(16);
                divs[4].style.backgroundColor = "#" + rc;
                setTimeout(() => {
                    rc = Math.floor(Math.random()*16777215).toString(16);
                    divs[3].style.backgroundColor = "#" + rc;
                    setTimeout(() => {
                        rc = Math.floor(Math.random()*16777215).toString(16);
                        divs[2].style.backgroundColor = "#" + rc;
                        setTimeout(() => {
                            rc = Math.floor(Math.random()*16777215).toString(16);
                            divs[1].style.backgroundColor = "#" + rc;
                            setTimeout(() => {
                                rc = Math.floor(Math.random()*16777215).toString(16);
                                divs[0].style.backgroundColor = "#" + rc;
                                
                            }, 400);
                        }, 400);
                    }, 400);
                }, 400);
            }, 400);
        }, 400);
    }, 0);
}