"use strict";

const account = require('./account');

//Function to Get Balance:
function getBalance(){
    account.balance += 10;
    console.log(account.balance);
}

//Function to Withdraw from Account:
function withdraw(){
    
}

//Function to Deposit into Account:
function deposit(){
    
}

//Function to Prompt and Validate User for Account Pin:
function validatePin(){
   
}

module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;
