"use strict";

let list = document.getElementById("list");
let addBut = document.getElementById("b1");
let delBut = document.getElementById("b2");
let inp = document.getElementById("inp")
let idx;

function changeBg(e){
    if (window.getComputedStyle(e.target).backgroundColor == "rgb(255, 255, 255)") {
        e.target.style.backgroundColor = "rgb(125, 125, 230)";
        e.target.style.color = "red";
    }
    else{
        e.target.style.backgroundColor = "rgb(255, 255, 255)";
        e.target.style.color = "black";
    }
    
    let items = list.getElementsByTagName("li");
    for(let i = 0; i < items.length; ++i){
        delBut.disabled = true;
        if (window.getComputedStyle(items[i]).color == "rgb(255, 0, 0)") {
            delBut.disabled = false;
            return;
        }
    }
}
document.querySelector("ul").addEventListener("click", function(e){
    changeBg(e);
})
document.querySelector("ul").addEventListener("dblclick", function(e){
    inp.value = e.target.innerHTML;
    idx = Array.prototype.indexOf.call(list.childNodes, e.target);
    //alert(idx)
})

document.querySelector("input").addEventListener("input", updateVal);
function updateVal(e){
    addBut.disabled = false;
    if(e.target.value == ""){
        addBut.disabled = true;
    }
}

function add(){
    let newLine = document.createElement("li");
    if (document.querySelector('input').value != "") {
        newLine.innerHTML = document.querySelector('input').value;
        document.getElementById("list").appendChild(newLine);
    }
    inp.value = "";
    addBut.disabled = true;
}

function save(){
    list.childNodes[idx].innerHTML = inp.value;
    inp.value = "";
}

function del(){
    let arr = Array.from(document.querySelectorAll("li"));
    for(let i = 0; i < arr.length; i++){
        if(arr[i].style.color == "red"){
            arr[i].remove();
        }
    }
    delBut.disabled = true;
}