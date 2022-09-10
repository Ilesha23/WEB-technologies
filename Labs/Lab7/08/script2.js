"use strict";

let table = document.getElementById("tab");
let addBut = document.getElementById("b1");
let delBut = document.getElementById("b2");
let arr = Array.from(document.querySelectorAll('[type="text"]'));

function changeBg(i){
    table.rows[i].style.backgroundColor = "rgb(125, 125, 230)";
    table.rows[i].style.color = "red";
    table.addEventListener("click", function(e){
        let cell = e.target;
        let i = cell.parentNode.rowIndex;
        let row = cell.parentNode;
        if (window.getComputedStyle(row).backgroundColor == "rgb(125, 125, 230)") {
            row.style.backgroundColor = "rgb(255, 255, 255)";
            row.style.color = "black";
        }
        else{
            row.style.backgroundColor = "rgb(125, 125, 230)";
            row.style.color = "red";
        }
    })

    for(let i = 0, row; row = table.rows[i]; ++i){
        delBut.disabled = true;
        if (window.getComputedStyle(row).color == "rgb(255, 0, 0)") {
            delBut.disabled = false;
            return;
        }
    }
}

table.addEventListener("click", function(e){
    let cell = e.target;
    let i = cell.parentNode.rowIndex;
    changeBg(i);
})

document.querySelectorAll(".inpq").forEach(item => {
    item.addEventListener("input", event => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].value == "") {
                addBut.disabled = true;
                return;
            }
            addBut.disabled = false;
        }
    })
})


function add(){
    let newLine = document.createElement("tr");
    document.querySelector("table").appendChild(newLine);
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
    delBut.disabled = true;
}