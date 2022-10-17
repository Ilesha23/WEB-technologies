"use strict";

let length = 3;

class square{
    constructor(width){
        this.width = width;
    }
    get area(){return this.width * this.width;}
    get p(){return this.width * 4;}
}

function check(){
    let sel1 = $('sel1').value;
    let sel2 = $('sel2').value;
    let s = new square(length);
    if ((s.p == parseInt(sel1)) & (s.area == parseInt(sel2))) {
        alert("true");
    }
    else{
        alert("false");
    }
}