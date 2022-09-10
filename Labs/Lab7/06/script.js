"use strict";

function add(){
    let newLine = document.createElement("tr");
    document.querySelector("table").appendChild(newLine);
    let arr = Array.from(document.querySelectorAll('[type="text"]'));
    for(let i = 0; i < arr.length; i++){
        let newTd = document.createElement("td");
        newTd.innerHTML = arr[i].value;
        newLine.appendChild(newTd);
    }
}
function del(){
    document.querySelector('table > tr').remove();
}