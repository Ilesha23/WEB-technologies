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

let arrComp = [], arrSoil = [], arrUse = [];
for (let i = 0; i < 20; i++) {
    arrComp[i] = new Company(`name${i}`, i, i);
    arrSoil[i] = new SoilArea(i, i, i, i);
    arrUse[i] = new SoilUsage(i, i, i, i, i);
}

for (let i = 0; i < arrComp.length; i++) {
    document.write(arrComp[i].show() + "<br>");
}
document.write("<br>");
for (let i = 0; i < arrSoil.length; i++) {
    document.write(arrSoil[i].show() + "<br>");
}
document.write("<br>");
for (let i = 0; i < arrSoil.length; i++) {
    document.write(arrUse[i].show() + "<br>");
}






// for (let i = 0; i < arrComp.length; i++) {
//     console.log(arrComp[i].show());
// }