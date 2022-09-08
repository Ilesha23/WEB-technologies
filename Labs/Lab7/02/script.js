"use strict";

let links = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"]
function change(){
    document.getElementById("img").src = links[document.getElementById("sel").selectedIndex];
}