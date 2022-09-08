"use strict";

function add(){
    let newLine = document.createElement("li");
    newLine.innerHTML = document.querySelector('input').value;
    document.getElementById("list").appendChild(newLine);
}
function del(){
    document.querySelector('ul > li').remove();
}