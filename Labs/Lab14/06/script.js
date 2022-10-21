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
let items = document.getElementById("select");
let coll = items.selectedOptions;

$("#filt").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

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
        table.innerHTML = "<thead><tr><td id='sName'>Name</td><td id='sAcc'>Account</td><td id='sInc'>Income</td></tr></thead><tbody>";
        for (let i = 0; i < arrComp.length; i++) {
            table.innerHTML += `<tr><td>${arrComp[i].name}</td><td>${arrComp[i].account}</td><td>${arrComp[i].income}</td></tr>`;
        }
        table.innerHTML += "</tbody>";
        document.getElementById("sName").addEventListener("click", sortName);
        document.getElementById("sAcc").addEventListener("click", sortAcc);
        document.getElementById("sInc").addEventListener("click", sortInc);
    }
    else{
        table.innerHTML = "<thead><tr><td id='sCip'>Cipher</td><td id='sAr'>Area</td><td id='sPr'>Price</td><td id='sTyp'>Type</td></tr></thead><tbody>";
        for (let i = 0; i < arrSoil.length; i++) {
            table.innerHTML += `<tr><td>${arrSoil[i].cipher}</td><td>${arrSoil[i].area}</td><td>${arrSoil[i].price}</td><td>${arrSoil[i].soilType}</td></tr>`;
        }
        table.innerHTML += "</tbody>";
        document.getElementById("sCip").addEventListener("click", sortCip);
        document.getElementById("sAr").addEventListener("click", sortAr);
        document.getElementById("sPr").addEventListener("click", sortPr);
        document.getElementById("sTyp").addEventListener("click", sortTyp);
    }

    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.border = "1px solid black";
    }
}
function sortName(){
    let sorted = true;
    for (let i = 0; i < arrComp.length - 1; i++) {
        if (arrComp[i].name > arrComp[i+1].name) {
            sorted = false;
            break;
        }
    }
    if (sorted) {
        arrComp.sort(function(a, b){
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
        })
    }
    else{
        arrComp.sort(function(a, b){
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        })
    }
    showTable();
}
function sortAcc(){
    let sorted = true;
    for (let i = 0; i < arrComp.length - 1; i++) {
        if (arrComp[i].account > arrComp[i+1].account) {
            sorted = false;
            break;
        }
    }
    if (sorted) {
        arrComp.sort(function(a, b){
            if (a.account > b.account) return -1;
            if (a.account < b.account) return 1;
            return 0;
        })
    }
    else{
        arrComp.sort(function(a, b){
            if (a.account > b.account) return 1;
            if (a.account < b.account) return -1;
            return 0;
        })
    }
    showTable();
}
function sortInc(){
    let sorted = true;
    for (let i = 0; i < arrComp.length - 1; i++) {
        if (arrComp[i].income > arrComp[i+1].income) {
            sorted = false;
            break;
        }
    }
    if (sorted) {
        arrComp.sort(function(a, b){
            if (a.income > b.income) return -1;
            if (a.income < b.income) return 1;
            return 0;
        })
    }
    else{
        arrComp.sort(function(a, b){
            if (a.income > b.income) return 1;
            if (a.income < b.income) return -1;
            return 0;
        })
    }
    showTable();
}

function sortCip(){
    let sorted = true;
    for (let i = 0; i < arrSoil.length - 1; i++) {
        if (arrSoil[i].cipher > arrSoil[i+1].cipher) {
            sorted = false;
            break;
        }
    }
    if (sorted) {
        arrSoil.sort(function(a, b){
            if (a.cipher > b.cipher) return -1;
            if (a.cipher < b.cipher) return 1;
            return 0;
        })
    }
    else{
        arrSoil.sort(function(a, b){
            if (a.cipher > b.cipher) return 1;
            if (a.cipher < b.cipher) return -1;
            return 0;
        })
    }
    showTable();
}
function sortAr(){
    let sorted = true;
    for (let i = 0; i < arrSoil.length - 1; i++) {
        if (arrSoil[i].area > arrSoil[i+1].area) {
            sorted = false;
            break;
        }
    }
    if (sorted) {
        arrSoil.sort(function(a, b){
            if (a.area > b.area) return -1;
            if (a.area < b.area) return 1;
            return 0;
        })
    }
    else{
        arrSoil.sort(function(a, b){
            if (a.area > b.area) return 1;
            if (a.area < b.area) return -1;
            return 0;
        })
    }
    showTable();
}
function sortPr(){
    let sorted = true;
    for (let i = 0; i < arrSoil.length - 1; i++) {
        if (arrSoil[i].price > arrSoil[i+1].price) {
            sorted = false;
            break;
        }
    }
    if (sorted) {
        arrSoil.sort(function(a, b){
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
            return 0;
        })
    }
    else{
        arrSoil.sort(function(a, b){
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
        })
    }
    showTable();
}
function sortTyp(){
    let sorted = true;
    for (let i = 0; i < arrSoil.length - 1; i++) {
        if (arrSoil[i].soilType > arrSoil[i+1].soilType) {
            sorted = false;
            break;
        }
    }
    if (sorted) {
        arrSoil.sort(function(a, b){
            if (a.soilType > b.soilType) return -1;
            if (a.soilType < b.soilType) return 1;
            return 0;
        })
    }
    else{
        arrSoil.sort(function(a, b){
            if (a.soilType > b.soilType) return 1;
            if (a.soilType < b.soilType) return -1;
            return 0;
        })
    }
    showTable();
}








let arrComp = [], arrSoil = [], arrUse = [];
for (let i = 0; i < 20; i++) {
    arrComp[i] = new Company(`name${20-i}`, i, i);
    arrSoil[i] = new SoilArea(20-i, i, 20-i, i);
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