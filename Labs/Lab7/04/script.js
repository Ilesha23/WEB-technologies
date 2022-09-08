"use strict";

let newDiv = document.createElement("div");
function add(){
    newDiv.style.position = "relative";
    newDiv.style.background = String("#" + Math.floor(Math.random()*16777215).toString(16));
    newDiv.style.height = String(Math.floor(Math.random() * 90) + 1 + "vh");
    newDiv.style.width = String(Math.floor(Math.random() * 50) + 1 + "vw");
    newDiv.style.left = String(Math.floor(Math.random() * 50) + 1 + "vw");
    newDiv.style.border = String(Math.floor(Math.random() * 50) + 1 + "px solid #" + Math.floor(Math.random()*16777215).toString(16));
    document.getElementById("top").appendChild(newDiv);
}
function del(){
    document.getElementById("top").removeChild(newDiv);
}