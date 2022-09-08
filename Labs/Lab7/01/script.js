"use strict";


let checkBoxes = ["comp", "sport", "art", "sci"];
let ids = ["name", "age", "sex", "inter", "opin"];
function display(){
    document.getElementById("name").append(document.getElementById("inName").value);
    document.getElementById("age").append(document.getElementById("inAge").options[document.getElementById("inAge").selectedIndex].text);
    if(document.getElementById("m").checked){
        document.getElementById("sex").append("male")
    }
    else if(document.getElementById("f").checked){
        document.getElementById("sex").append("female")
    }
    else{
        document.getElementById("sex").append("unknown")
    }
    for(let i=0;i<checkBoxes.length;i++){
        if(document.getElementById(checkBoxes[i]).checked){
            document.getElementById("inter").append(checkBoxes[i] + ", ")
        }
    }
    document.getElementById("opin").append(document.getElementById("inOpin").value);
    for(let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).style.display = "block";
    }
}