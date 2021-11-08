"use strict";

//IMPORTS:
const prompt = require("prompt-sync")();
const atm = require("./atm");

//Menu Related Code////////////////

//Validate User Pin and Proceed only if User Enters Correct PIN:
if(atm.validatePin()){
    mainMenu();
}else{
    console.log("Please Contact your Bank!");
}

//Main Menu Function:
function mainMenu(){
    //Prompt User for Menu Command:
    let menuOption = parseInt(prompt("Please enter 1: 'Account Balance', 2: 'Withdraw', 3: 'Deposit', 4: 'Exit'"));

    switch(menuOption){
        case 1:
            //Get Account and Wallet Balances:
            atm.getBalance();
            mainMenu();
            break;
        case 2:
            //Withdraw from Account and Deposit into Wallet:
            atm.withdraw();
            mainMenu();
            break;
        case 3:
            //Withdraw from Wallet and Deposit into Account:
            atm.deposit();
            mainMenu();
            break;
        case 4:
            //Exit:
            console.log("Thank you for visiting!");
            return;
        default:
            //Run if User enters invalid input:
            console.log("Sorry, I didn't recognize that command!");
            mainMenu();
            break;
    }
}

//EXPORTS///////////////