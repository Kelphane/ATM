"use strict";

//IMPORTS:
const prompt = require("prompt-sync")();
const atm = require("./atm");

//Menu Related Code:
if(atm.validatePin()){
    mainMenu();
}else{
    console.log("Please Contact your Bank!");
}


function mainMenu(){
    let menuOption = parseInt(prompt("Please enter 1: 'Account Balance', 2: 'Withdraw', 3: 'Deposit', 4: 'Exit'"));

    switch(menuOption){
        case 1:
            atm.getBalance();
            mainMenu();
            break;
        case 2:
            atm.withdraw();
            mainMenu();
            break;
        case 3:
            atm.deposit();
            mainMenu();
            break;
        case 4:
            //Exit:
            return;
        default:
            console.log("Sorry, I didn't recognize that command!");
            mainMenu();
            break;
    }
}