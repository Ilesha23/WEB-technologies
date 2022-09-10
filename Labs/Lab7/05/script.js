"use strict";

function add(){
    let newLine = document.createElement("li");
    if (document.querySelector('input').value != "") {
        newLine.innerHTML = document.querySelector('input').value;
        document.getElementById("list").appendChild(newLine);
    }
}
function del(){
    document.querySelector('ul > li').remove();
}