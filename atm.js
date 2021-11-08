"use strict";

//IMPORTS:
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
   
}

//EXPORTS:
module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;
