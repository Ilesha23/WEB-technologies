"use strict";

function changeBg(e){
    if (window.getComputedStyle(e.target).backgroundColor == "rgb(255, 255, 255)") {
        e.target.style.backgroundColor = "rgb(125, 125, 230)";
        e.target.style.color = "red";
    }
    else{
        e.target.style.backgroundColor = "rgb(255, 255, 255)";
        e.target.style.color = "black";
    }    
}
document.querySelector("ul").addEventListener("click", function(e){
    changeBg(e);
})

function add(){
    let newLine = document.createElement("li");
    newLine.innerHTML = document.querySelector('input').value;
    document.getElementById("list").appendChild(newLine);
}
function del(){
    let arr = Array.from(document.querySelectorAll("li"));
    for(let i = 0; i < arr.length; i++){
        if(arr[i].style.color == "red"){
            arr[i].remove();
        }
    }
}