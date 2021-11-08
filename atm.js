"use strict";

//IMPORTS:
const prompt = require("prompt-sync")();
const account = require('./account');
const wallet = require('./wallet');

//Function to Get Balance:
function getBalance(){
    console.log(account.balance);
    return account.balance;
}

//Function to Withdraw from Account:
function withdraw(amount){
    account.balance -= amount;
    wallet.balance += amount;
    console.log(`Account Balance: ${account.balance}, Wallet Balance:${wallet.balance}`);
}

//Function to Deposit into Account:
function deposit(amount){
    account.balance += amount;
    wallet.balance -= amount;
    console.log(`Account Balance: ${account.balance}, Wallet Balance:${wallet.balance}`);
}

//Function to Prompt and Validate User for Account Pin:
function validatePin(){
    //Prompt User for PIN and Convert Input into Int:
    userPin = parseInt(prompt("Please enter your PIN: "));

    if(userPin === account.pin){
        return true;
    }else{
        console.log("Invalid PIN!");
        validatePin();
    }
}

//EXPORTS:
module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;
