"use strict";

//IMPORTS:
const prompt = require("prompt-sync")();
const atm = require("./atm");

//Menu Related Code:
if(atm.validatePin() == true){
    switch(menuOption){
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
    }
}else{
    console.log("Please Contact your Bank!");
}

