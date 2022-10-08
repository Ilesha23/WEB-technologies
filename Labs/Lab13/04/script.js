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
        console.log(this.Company.show() + this.SoilArea.show() + this.show());
    }
}


let list = document.getElementById("list");
let tab = document.getElementById("tab");
let table = document.getElementById("table");
let table2 = document.getElementById("table2");
let items = document.getElementById("select");
let coll = items.selectedOptions;

let arrComp = [], arrSoil = [], arrUse = [];

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
        for (let i = 0; i < arrSoil.length; i++) {
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

function out(){
    if (document.querySelectorAll('input')[0].checked) {
        showList();
    }
    else if(document.querySelectorAll('input')[1].checked){
        showTable();
    }
}

function makeRequest(url){
    let xhttp, textInf;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            textInf = xhttp.responseXML;
            arrComp = [];
            arrSoil = [];
            if (items[0].selected) {
                for (let i = 0; i < textInf.getElementsByTagName("item").length; i++) {
                    arrComp.push(new Company(textInf.getElementsByTagName("item")[i].getAttribute("name"), textInf.getElementsByTagName("item")[i].getAttribute("acc"), textInf.getElementsByTagName("inc")[i].innerHTML))
                }
            } else {
                for (let i = 0; i < textInf.getElementsByTagName("item").length; i++) {
                    arrSoil.push(new SoilArea(textInf.getElementsByTagName("item")[i].getAttribute("cip"), textInf.getElementsByTagName("item")[i].getAttribute("area"), textInf.getElementsByTagName("price")[i].innerHTML, textInf.getElementsByTagName("soiltype")[i].innerHTML))
                }
            }
            out();
        }
    }
    if (items[0].selected) {
        xhttp.open("GET", "file1.xml", true);
    } else {
        xhttp.open("GET", "file2.xml", true);
    }
    xhttp.send(null);
}