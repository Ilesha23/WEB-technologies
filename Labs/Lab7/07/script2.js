"use strict";

let table = document.querySelector("table");
function changeBg(i){
    table.rows[i].style.backgroundColor = "rgb(125, 125, 230)";
    table.addEventListener("click", function(e){
        let cell = e.target;
        let i = cell.parentNode.rowIndex;
        let row = cell.parentNode;
        if (window.getComputedStyle(row).backgroundColor == "rgb(125, 125, 230)") {
            row.style.backgroundColor = "rgb(255, 255, 255)";
        }
        else{
            row.style.backgroundColor = "rgb(125, 125, 230)";
        }
    })   
}

document.querySelector("table").addEventListener("click", function(e){
    let cell = e.target;
    let i = cell.parentNode.rowIndex;
    changeBg(i);
})

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
    let arr = [];
    for (let i = 0; i < table.rows.length; i++) {
        if (window.getComputedStyle(table.childNodes[i+1]).backgroundColor == "rgb(125, 125, 230)") {
            table.childNodes[i+1].remove();
        }
    }
}