"use strict";

class Company{
    #name = "default";
    #account = 0;
    #income = 0;

    constructor(name = "def", account = 0, income = 0){
        this.#name = name;
        this.#account = account;
        this.#income = income;
    }

    get name(){ return this.#name; }
    get account(){ return this.#account; }
    get income(){ return this.#income; }

    show(){
        return `Name: ${this.#name} Acc: ${this.#account} Inc: ${this.#income} `;
    }
}

class SoilArea{
    #cipher = 0;
    #area = 0;
    #price = 0;
    #soilType = 0;

    constructor(cipher = 0, area = 0, price = 0, soilType = 0){
        this.#cipher = cipher;
        this.#area = area;
        this.#price = price;
        this.#soilType = soilType;
    }

    get cipher(){ return this.#cipher; }
    get area(){ return this.#area; }
    get price(){ return this.#price; }
    get soilType(){ return this.#soilType; }

    show(){
        return `Cip: ${this.#cipher} Area: ${this.#area} Price: ${this.#price} Type: ${this.#soilType} `;
    }
}

class SoilUsage{
    #usageType = 0;
    #from = 0;
    #to = 0;

    constructor(Company, SoilArea, usage = 0, from = 0, to = 0){
        this.Company = Company;
        this.SoilArea = SoilArea;
        this.#usageType = usage;
        this.#from = from;
        this.#to = to;
    }

    get usageType(){ return this.#usageType; }
    get from(){ return this.#from; }
    get to(){ return this.#to; }

    show(){
        return `Num1: ${this.Company} Num2: ${this.SoilArea} Type: ${this.#usageType} From: ${this.#from} To: ${this.#to} `;
    }

    toString(){
        //document.write(this.Company.show() + this.SoilArea.show() + this.show());
        console.log(this.Company.show() + this.SoilArea.show() + this.show());
    }
}


let list = document.getElementById("list");
let tab = document.getElementById("tab");
let table = document.getElementById("table");
let table2 = document.getElementById("table2");
let items = document.getElementById("select");
let coll = items.selectedOptions;

function showList(){
    tab.style.display = "none";
    list.style.display = "block";
    list.innerHTML = "";

    if (coll[0].value == "1") {
        for (let i = 0; i < arrComp.length; i++) {
            list.innerHTML += "Name: " + arrComp[i].name + "<br>Account: " + arrComp[i].account + "<br>Income: " + arrComp[i].income + "<br><br>";
        }
    }
    else{
        for (let i = 0; i < arrComp.length; i++) {
            list.innerHTML += "Cipher: " + arrSoil[i].cipher + "<br>Area: " + arrSoil[i].area + "<br>Price: " + arrSoil[i].price + "<br>Soil Type: " + arrSoil[i].soilType + "<br><br>";
        }
    }
}
function showTable(){
    tab.style.display = "block";
    list.style.display = "none";

    
    if (coll[0].value == "1") {
        table.innerHTML = "<tr><td>Num</td><td>Name</td><td>Account</td><td>Income</td></tr>";
        for (let i = 0; i < arrComp.length; i++) {
            table.innerHTML += `<tr><td>${i}</td><td>${arrComp[i].name}</td><td>${arrComp[i].account}</td><td>${arrComp[i].income}</td></tr>`;
        }
    }
    else{
        table.innerHTML = "<tr><td>Num</td><td>Cipher</td><td>Area</td><td>Price</td><td>Type</td></tr>";
        for (let i = 0; i < arrSoil.length; i++) {
            table.innerHTML += `<tr><td>${i}</td><td>${arrSoil[i].cipher}</td><td>${arrSoil[i].area}</td><td>${arrSoil[i].price}</td><td>${arrSoil[i].soilType}</td></tr>`;
        }
    }

    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.border = "1px solid black";
    }
}

let arrComp = [], arrSoil = [], arrUse = [];
for (let i = 0; i < 20; i++) {
    arrComp[i] = new Company(`name${i}`, i, i);
    arrSoil[i] = new SoilArea(i, i, i, i);
    arrUse[i] = new SoilUsage(i, i, i, i, i);
}
// for (let i = 0; i < arrComp.length; i++) {
//     document.write(arrComp[i].show() + "<br>");
// }
// document.write("<br>");
// for (let i = 0; i < arrSoil.length; i++) {
//     document.write(arrSoil[i].show() + "<br>");
// }
// document.write("<br>");
// for (let i = 0; i < arrSoil.length; i++) {
//     document.write(arrUse[i].show() + "<br>");
// }






// for (let i = 0; i < arrComp.length; i++) {
//     console.log(arrComp[i].show());
// }