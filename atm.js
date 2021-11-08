"use strict";

//IMPORTS:
const prompt = require("prompt-sync")();
const account = require('./account');
const wallet = require('./wallet');

//Function to Get Balance:
function getBalance(){
    console.log(`Account Balance: $${account.balance}, Wallet Balance: $${wallet.balance}`);
}

//Function to Withdraw from Account:
function withdraw(){
    let amount = parseInt(prompt("Please enter in amount you want to withdraw: "));
    if(amount <= account.balance){
        account.balance -= amount;
        wallet.balance += amount;
        console.log(`$${amount} was Withdrawn Bank Account and Deposited in your Wallet!`);
        console.log(`Account Balance: $${account.balance}, Wallet Balance: $${wallet.balance}`);
    }else{
        console.log(`Amount entered is greater than available balance! Account Balance: $${account.balance}`);
        withdraw();
    }
    
}

//Function to Deposit into Account:
function deposit(){
    let amount = parseInt(prompt("Please enter in amount you want to deposit: "));
    if(amount <= wallet.balance){
        account.balance += amount;
        wallet.balance -= amount;
        console.log(`$${amount} was Withdrawn Bank Account and Deposited in your Wallet!`);
        console.log(`Account Balance: $${account.balance}, Wallet Balance: $${wallet.balance}`);
    }else{
        console.log(`Amount entered is greater than available balance! Wallet Balance: $${wallet.balance}`);
        deposit();
    }
   
}

//Function to Prompt and Validate User for Account Pin:
function validatePin(lock = 1){
    let userPin = 0;

    if(lock <= 3){
        //Prompt User for PIN and Convert Input into Int:
        userPin = parseInt(prompt("Please enter your PIN: "));
    }else{
        console.log("This Account is Locked!");
        return false;
    }

    if(userPin === account.pin){
        console.log("Welcome, Valued Customer!");
        return true;
    }else{
        console.log("Invalid PIN!");
        console.log(`After three attempts your account will lock! Attempt: ${lock}`);
        validatePin(lock += 1);
    }
}

//EXPORTS:
module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;
